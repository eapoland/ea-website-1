import React from 'react'
import Spinner from 'reactstrap/lib/Spinner'
import './styles.module.scss'

const LoadingScreen = () => (
  <div className="ea-loading">
    <Spinner animation="border" className="ea-spinner wide-spinner" />
    <h5>Trwa ładowanie strony...</h5>
  </div>
)

export default LoadingScreen
