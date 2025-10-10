import { lazy } from 'react'

const LandingPage = lazy(() => import('@/components/unprotected/landing-page/LandingPage'));
const youngSolutionsLoader = lazy(() => import('@/components/common-components/loader/YoungSolutionsLoader'));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const UnProtectedRoutes = [

    { path: "/", element: <LandingPage /> },
    { path: "/loader", element: <youngSolutionsLoader /> },


    // { path: "/", element: <Enroll type={""} /> },



    // { path: "/aimelogin", element: <Login type={"aime"} /> },


    // { path: "/aimeforgotpassword", element: <ForgetPassword type={"aime"} /> },
]

export default UnProtectedRoutes;


