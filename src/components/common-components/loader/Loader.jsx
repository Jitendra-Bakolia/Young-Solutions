import React from 'react'
import PageLoader from './PageLoader'

const Loader = ({ isLoading, children = <></> }) => {

  return (
    <>
      {isLoading && <PageLoader isLoading={isLoading} />}
      {!isLoading && children}
    </>
  )
}

export default Loader