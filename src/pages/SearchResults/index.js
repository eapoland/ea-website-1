import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Row } from 'reactstrap'
import { useQuery, gql } from '@apollo/client'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'
import LoadingScreen from '../../components/LoadingScreen'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ScrollToTop from '../../components/ScrollToTop'

const GET_SEARCH_RESULTS = gql`
  query GET_DATA(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $phrase: String
  ) {
    categories {
      nodes {
        id
        slug
        name
      }
    }
    posts(
      first: $first
      last: $last
      after: $after
      before: $before
      where: { search: $phrase }
    ) {
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

const SearchResults = () => {
  const { phrase } = useParams()

  const variables = {
    first: 8,
    last: null,
    after: null,
    before: null,
    phrase,
  }
  const { data, loading, fetchMore } = useQuery(GET_SEARCH_RESULTS, {
    variables,
  })
  console.log(data)
  return loading ? (
    <LoadingScreen />
  ) : (
    <div>
      <ScrollToTop />
      <SectionTitle text="Wyniki wyszukiwania" title={phrase} />
      <Row className="blog-posts justify-content-between">
        {data.posts.nodes.map(post => (
          <NavHashLink
            to={`/blog/${post.slug}`}
            style={{ textDecoration: 'none' }}
            key={post.id}
          >
            <div>
              <img
                src={`https://ea-poland-wordpress.azurewebsites.net${post.featuredImage.node.sourceUrl}`}
                className="post-thumb"
                alt={post.featuredImage.node.slug}
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

export default SearchResults
