import React from 'react'

const PageLoader = () => {

  return (
    <>
      <div className="white-bg border loader-section">
        <div className="p-2 d-flex align-items-center justify-content-center flex-direction-col">
          <div className="d-flex align-items-center">
            <span className="Futura-PT-Demi mr-1">Loading...</span>
            <div className="loading-dots">
              <div className="loading-dots--dot"></div>
              <div className="loading-dots--dot"></div>
              <div className="loading-dots--dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLoader