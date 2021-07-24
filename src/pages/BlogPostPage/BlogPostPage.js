import React from 'react'
import { useParams } from 'react-router-dom'
import './BlogPostPage.scss'
import { useQuery, gql } from '@apollo/client'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TagButton from '../../components/Common/TagButton/TagButton'
import DateService from '../../services/DateService'
import ScrollToTop from '../../components/ScrollToTop'
import LoadingScreen from '../../components/LoadingScreen'

const GET_BLOG_POST = gql`
  query GET_POST($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
      title(format: RENDERED)
      date
      author {
        node {
          name
          customuser {
            photo {
              sourceUrl
              slug
            }
            email
            linkedin
          }
          description
        }
      }
      content(format: RENDERED)
      tags {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
`

const BlogPostPage = () => {
  const { slug } = useParams()
  const variables = {
    slug,
  }
  const { loading, data } = useQuery(GET_BLOG_POST, {
    variables,
  })

  return loading ? (
    <LoadingScreen />
  ) : (
    <div>
      <ScrollToTop />
      <div className="d-flex flex-column justify-content-center align-items-start">
        <div
          className="d-flex flex-column justify-content-center align-items-center post__header"
          style={{
            backgroundImage: `linear-gradient(180deg, #00000080 0%, #80808000 100%), url(https://ea-poland-wordpress.azurewebsites.net${data.post.featuredImage.node.sourceUrl})`,
            backgroundSize: 'cover',
            height: '580px',
            width: '100%',
            color: '#f5f5f5',
          }}
        >
          <span className="d-flex align-items-center">
            <p className="recommended-post__author">
              {data.post.categories.nodes.map(cat => cat.name)}
            </p>
          </span>
          <h1>{data.post.title}</h1>
          <p>
            {data.post.author.node.name} /{' '}
            {DateService.prepareDate(data.post.date)}
          </p>
        </div>
      </div>
      <div className="post">
        <div
          className="post__content"
          dangerouslySetInnerHTML={{
            __html: data ? data.post.content : '',
          }}
        />
        <div className="post__tags d-flex justify-content-between align-items-center">
          <div>
            {data.post.tags.nodes.map(tag => (
              // CREATE TAG BUTTON
              <TagButton title={tag.name} slug={tag.slug} />
            ))}
          </div>
          <div>
            <FacebookShareButton url={window.location.href}>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="social-icon"
              />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </LinkedinShareButton>
          </div>
        </div>
        <Row className="post__author">
          <Col xs={4}>
            <img
              className="author__img"
              src={`https://ea-poland-wordpress.azurewebsites.net${
                data.post.author.node.customuser.photo &&
                data.post.author.node.customuser.photo.sourceUrl
              }`}
              alt={
                data.post.author.node.customuser.photo &&
                data.post.author.node.customuser.photo.slug
              }
            />
          </Col>
          <Col>
            <h3>Autor</h3>
            <h2>{data.post.author.node.name}</h2>
            <p>{data.post.author.node.description}</p>
            <div>
              <a
                href={data.post.author.node.customuser.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
              <a
                href={`mailto:${data.post.author.node.customuser.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/* <Row className="post__recommended">
        <Col>
          <h2>Polecamy</h2>
          <Row className="post__recommended--list justify-content-between">
            {recommendedPosts.map(blogPost => (
              <NavHashLink
                to={`${blogPost.slug}`}
                style={{ textDecoration: 'none' }}
                key={blogPost.id}
              >
                <div>
                  <img
                    src={`https://ea-poland-wordpress.azurewebsites.net${post._embedded['wp:featuredmedia'][0].source_url}`}
                    alt={post._embedded.author[0].slug}
                    style={{
                      height: '220px',
                      width: '362px',
                      borderRadius: '10px',
                    }}
                  />
                  <h4>
                    {categories
                      .filter(cat => cat.id === post.categories[0])
                      .map(cat => cat.name)}
                  </h4>
                  <h3>{post.title.rendered}</h3>
                </div>
              </NavHashLink>
            ))}
          </Row>
        </Col>
      </Row> */}
    </div>
  )
}

export default BlogPostPage
