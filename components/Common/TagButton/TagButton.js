import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import Button from 'reactstrap/lib/Button'
import './TagButton.scss'

const TagButton = ({ title, slug }) => (
  <NavHashLink to={`tag/${slug}`}>
    <Button className="tag-button">{title}</Button>
  </NavHashLink>
)

export default TagButton
