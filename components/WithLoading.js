import React, { useState } from 'react'
import { Spinner } from 'reactstrap'

const WithLoading = WrappedComponent => {
  function LoadedComponent(props) {
    const [isLoading, setLoading] = useState(true)

    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading)
    }

    return (
      <>
        {isLoading && <Spinner animation="border" className="wide-spinner" />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    )
  }
  return LoadedComponent
}

export default WithLoading
