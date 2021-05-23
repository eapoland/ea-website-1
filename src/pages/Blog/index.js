import React, { useState } from 'react'
import {
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from 'reactstrap'
import { useQuery, gql } from '@apollo/client'
import Slider from 'react-slick'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'
import EAButton from '../../components/Common/EAButton/EAButton'
import LoadingScreen from '../../components/LoadingScreen'

const GET_BLOG_DATA = gql`
  query GET_DATA($first: Int, $last: Int, $after: String, $before: String) {
    categories {
      nodes {
        id
        slug
        name
      }
    }
    recommendedPosts: posts(where: { tag: "recommended" }) {
      nodes {
        author {
          node {
            customuser {
              photo {
                sourceUrl
              }
            }
            slug
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        excerpt(format: RENDERED)
        slug
        title(format: RENDERED)
        id
        categories {
          nodes {
            id
            name
          }
        }
      }
    }
    posts(first: $first, last: $last, after: $after, before: $before) {
      nodes {
        author {
          node {
            customuser {
              photo {
                sourceUrl
              }
            }
            slug
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
        excerpt(format: RENDERED)
        slug
        title(format: RENDERED)
        id
        categories {
          nodes {
            id
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`

const updateQuery = (previousResult, { fetchMoreResult }) =>
  fetchMoreResult.posts.nodes.length ? fetchMoreResult : previousResult

const Blog = () => {
  const [searchPhrase, setsearchPhrase] = useState('')
  const variables = {
    first: 7,
    last: null,
    after: null,
    before: null,
  }
  const { data, loading, fetchMore } = useQuery(GET_BLOG_DATA, {
    variables,
  })

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    className: 'd-flex align-items-center',
    dots: true,
    arrows: false,
  }
  return loading ? (
    <LoadingScreen />
  ) : (
    <div>
      <Row className="recommended-slider">
        <Col className="recommended-slider-column text-center mx-auto">
          <Slider {...settings}>
            {data.recommendedPosts.nodes.map(post => (
              <div className="d-flex flex-column justify-content-center align-items-start">
                <div
                  className="d-flex flex-column justify-content-center align-items-start recommended-slider__item"
                  style={{
                    backgroundImage: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.5452556022408963) 0%,
                        rgba(9, 9, 121, 0) 90%,
                        rgba(255, 255, 255, 0) 100%
                      ), url(https://ea-poland-wordpress.azurewebsites.net${post.featuredImage.node.sourceUrl})`,
                    backgroundSize: 'cover',
                    height: '580px',
                    width: '100%',
                    color: '#f5f5f5',
                  }}
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="author__img"
                      src={`https://ea-poland-wordpress.azurewebsites.net${
                        post.author.node.customuser.photo &&
                        post.author.node.customuser.photo.sourceUrl
                      }`}
                      alt={post.author.node.slug}
                    />
                    <p className="recommended-post__author">
                      {post.author.node.name} /{' '}
                      {post.categories.nodes.map(cat => cat.name)}
                    </p>
                  </span>
                  <h1>{post.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                  <EAButton
                    title="Czytaj dalej"
                    size={150}
                    target={`blog/${post.slug}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      <Row className="blog-post__first">
        <Col xs={8}>
          {data.posts.nodes[0] && (
            <NavHashLink
              to={`blog/${data.posts.nodes[0].slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  backgroundImage: `url(https://ea-poland-wordpress.azurewebsites.net${data.posts.nodes[0].featuredImage.node.sourceUrl})`,
                }}
                className="d-flex flex-column justify-content-end first-post"
                key={data.posts.nodes[0].id}
              >
                <h3 style={{ color: 'white' }}>
                  {data.posts.nodes[0].categories.nodes.map(cat => cat.name)}
                </h3>
                <h1>{data.posts.nodes[0].title}</h1>
              </div>
            </NavHashLink>
          )}
        </Col>
        <Col xs={4}>
          <InputGroup>
            <Input
              className="shadow-none"
              placeholder="Wpisz wyszukiwaną frazę"
              value={searchPhrase}
              onChange={e => setsearchPhrase(e.target.value)}
            />
            <InputGroupAddon
              addonType="append"
              onClick={() => console.log(searchPhrase)}
            >
              <NavHashLink to={`search/${searchPhrase}`}>
                <InputGroupText className="search-btn">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </NavHashLink>
            </InputGroupAddon>
          </InputGroup>
          <div>
            <h3>ZAGADNIENIA</h3>
            {data.categories.nodes.map(category => (
              <NavHashLink to={`category/${category.slug}`}>
                <button
                  className="blog-post__first--btn"
                  key={category.slug}
                  type="submit"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>{category.name}</h5>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>{' '}
                </button>
              </NavHashLink>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="blog-posts justify-content-between">
        {data.posts.nodes.slice(1).map(post => (
          <NavHashLink
            to={`blog/${post.slug}`}
            style={{ textDecoration: 'none' }}
            key={post.id}
          >
            <div>
              <img
                src={`https://ea-poland-wordpress.azurewebsites.net${post.featuredImage.node.sourceUrl}`}
                alt={post.featuredImage.node.slug}
                style={{
                  height: '220px',
                  width: '362px',
                  borderRadius: '10px',
                }}
              />
              <h3>{post.categories.nodes.map(cat => cat.name)}</h3>
              <h2>{post.title}</h2>
            </div>
          </NavHashLink>
        ))}
      </Row>
      <div className="page-controls">
        {data.posts.pageInfo.hasNextPage ? (
          <button
            className="page-btn"
            type="button"
            onClick={() => {
              fetchMore({
                variables: {
                  first: 7,
                  after: data.posts.pageInfo.endCursor || null,
                  last: null,
                  before: null,
                },
                updateQuery,
              })
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronLeft} />
            <h6>Starsze wpisy</h6>
          </button>
        ) : null}
        {data.posts.pageInfo.hasPreviousPage ? (
          <button
            className="page-btn"
            type="button"
            onClick={() => {
              fetchMore({
                variables: {
                  first: null,
                  after: null,
                  last: 7,
                  before: data.posts.pageInfo.startCursor || null,
                },
                updateQuery,
              })
            }}
          >
            <h6>Nowsze wpisy</h6>
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Blog
