import React, { lazy, Suspense } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import YoungSolutionsLoader from '@/components/common-components/loader/YoungSolutionsLoader';
import PageLoader from '@/components/common-components/loader/PageLoader';

import UnProtectedRoutes from './UnProtectedRoutes';

//& Commented out for now ... Will use this in future . . .
// import AdminRoutes from './AdminRoutes';
// import CustomerRoutes from './CustomerRoutes';
// import CommonRoutes from './CommonRoutes';
// import AuthenticateHandler from '@/AuthenticateHandler';
// import { SYSTEM_USER_TYPE } from '@/helper/constants/constants';

import PageNotFound from '@/components/common-components/PageNotFound';

const BaseLayout = lazy(() => import('@/components/common-components/layout/BaseLayout'));

//& ProtectedRoute ensures access to routes based on user type
const ProtectedRoute = ({ systemUserTypes, currentSystemUserTypeId, children }) => {
  return systemUserTypes.includes(currentSystemUserTypeId) ? children : <Navigate to="/page-not-found" />;
};

//& Wrapper function to wrap routes without Authentication protection
const wrapRoutesWithoutProtection = (routes) =>
  routes.map(({ path, element }) => ({
    path,
    element: (
      //& YoungSolutionsLoader for general unprotected routes
      <Suspense fallback={<YoungSolutionsLoader />}>{element}</Suspense>
    ),
  }));

//& Wrapper function to wrap routes with Authentication protection
const wrapRoutesWithProtection = (routes, systemUserTypes, currentSystemUserTypeId) =>
  routes.map(({ path, element }) => ({
    path,
    element: (
      //& PageLoader for routes requiring authorization
      <ProtectedRoute systemUserTypes={systemUserTypes} currentSystemUserTypeId={currentSystemUserTypeId}>
        <Suspense fallback={<PageLoader />}>{element}</Suspense>
      </ProtectedRoute>
    ),
  }));

const Routes = () => {
  // const { systemUserTypeId } = selectCurrentUser(); // Selector to fetch current user info

  //& Define routes with respective protection and loaders
  const routes = [
    // ...wrapRoutesWithoutProtection(UnProtectedRoutes), // Unprotected routes

    {
      element: (
        // <AuthenticateHandler>
          <BaseLayout />
        // </AuthenticateHandler>
      ),
      children: [
        ...wrapRoutesWithoutProtection(UnProtectedRoutes), // Unprotected routes with BaseLayout
        // ...wrapRoutesWithProtection(CommonRoutes, [SYSTEM_USER_TYPE.ADMIN, SYSTEM_USER_TYPE.CLIENT], systemUserTypeId), // Common routes
        // ...wrapRoutesWithProtection(AdminRoutes, [SYSTEM_USER_TYPE.ADMIN], systemUserTypeId), // Admin routes
        // ...wrapRoutesWithProtection(CustomerRoutes, [SYSTEM_USER_TYPE.CLIENT], systemUserTypeId), // Customer routes
      ],
    },
    { path: '/page-not-found', element: <PageNotFound /> }, // 404 Page
    { path: '*', element: <Navigate to="/page-not-found" /> }, // Redirect invalid paths to 404
  ];

  //& Initialize the router
  const router = createBrowserRouter(routes);

  return (
    //& YoungSolutionsLoader for route-level fallback
    <Suspense fallback={<YoungSolutionsLoader from="route" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
