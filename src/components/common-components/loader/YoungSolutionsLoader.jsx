const YoungSolutionsLoader = ({ from }) => {
  const resetCacheStyle = { display: 'none' }; //! Removed !important as it's not supported in React

  return (
    <>
      <div className={`page-loader`} id="youngSolutionsLoader">
        <img src="/img/Young-Solutions-Favicon.png" alt="Loading..." sizes="" srcset="" />
        <div className="main-loader">
          <div class="circle-container">
            <div class="animated-circle one"></div>
            <div class="animated-circle two"></div>
            <div class="animated-circle three"></div>
          </div>
        </div>
        <p className="Futura-PT-Book">{"Loading... Please hold on!"}</p>
        <div className="d-flex align-items-center justify-content-center flex-direction-col" id="resetCache" style={resetCacheStyle}>
          <p className="font-bold text-center pl-3 pr-3 mb-0">Ooops! Looks like there has been a little hiccup.</p>
          <p className="font-bold text-center pl-3 pr-3 mb-0">Please click the Refresh button below to try again. Thanks!</p>
          <button className="btn-orange-delete Futura-PT-Demi mt-2" id="resetCacheBtn" type="button">Refresh</button>
        </div>
      </div>

    </>
  );
};

export default YoungSolutionsLoader;
