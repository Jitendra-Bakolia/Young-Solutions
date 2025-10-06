// import React, { lazy, useEffect, useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';

// const AdminSideNavigation = lazy(() => import('@/components/common-components/layout/AdminSideNavigation'));
// const Header = lazy(() => import('@/components/common-components/Header'));
// const Loader = lazy(() => import('@/components/common-components/loader/Loader'));

// import { selectApiStatusStore, selectCurrentUser, selectIsAuthenticated } from '@/redux/selectors';
// import useSideNavToggle from '@/hooks/useSideNavToggle';
// import { useDispatch } from 'react-redux';
// import { showPageLoader, hidePageLoader } from '@/redux/slices/apiStatusSlice';
// import ClientSideNavigation from './CientSideNavigation';
// import PartnerSideNavigation from './PartnerSideNavigations';
// import { SYSTEM_USER_TYPE } from '@/helper/constants/user.constants';

// const BaseLayout = () => {
//     const { getClasses } = useSideNavToggle();
//     const classes = getClasses();
//     const location = useLocation();

//     const { isPageLoading } = selectApiStatusStore()
//     const isAuthenticated = selectIsAuthenticated();

//     const { systemUserTypeId } = selectCurrentUser();

//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(showPageLoader());

//         // set to false if not set in component
//         const timer = setTimeout(() => {
//             dispatch(hidePageLoader());
//         }, 500);

//         return () => clearTimeout(timer); // Cleanup
//     }, [dispatch, location.pathname]);

//     const [isSideNavShow, setIsSideNavShow] = useState(window.innerWidth <= 768 ? false : true);
//     const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsResponsive(window.innerWidth <= 768);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <section>
//             <div className="wrapper" id="mainComponentDiv">
//                 {isAuthenticated &&
//                     systemUserTypeId == SYSTEM_USER_TYPE.ADMIN ? <AdminSideNavigation setIsSideNavShow={setIsSideNavShow} isSideNavShow={isSideNavShow} isResponsive={isResponsive} />
//                     : systemUserTypeId == SYSTEM_USER_TYPE.CLIENT ? <ClientSideNavigation setIsSideNavShow={setIsSideNavShow} isSideNavShow={isSideNavShow} isResponsive={isResponsive} />
//                     : [SYSTEM_USER_TYPE.PARTNER, SYSTEM_USER_TYPE.REFERRAL_PARTNER, SYSTEM_USER_TYPE.ALTAIR_CLIENT].includes(systemUserTypeId ) ? <PartnerSideNavigation setIsSideNavShow={setIsSideNavShow} isSideNavShow={isSideNavShow} isResponsive={isResponsive} />
//                     : <></>
//                 }
//                 <div id="content" className={isAuthenticated ? classes.content : ''}>
//                     {isAuthenticated && (
//                         <Header setIsSideNavShow={setIsSideNavShow} isResponsive={isResponsive} />
//                     )}
//                     <Loader isLoading={isPageLoading} >
//                         <div id={isAuthenticated ? 'main' : ''}>
//                             <Outlet />
//                         </div>
//                     </Loader>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BaseLayout



import React, { lazy, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Loader = lazy(() => import('@/components/common-components/loader/Loader'));

const BaseLayout = () => {

    return (
        <section>
            <div className="wrapper" id="mainComponentDiv">
                <h1>Side Menu</h1>
                <div id="content">
                    <Loader >
                        <div>
                            <Outlet />
                        </div>
                    </Loader>
                </div>
            </div>
        </section>
    );
};

export default BaseLayout
