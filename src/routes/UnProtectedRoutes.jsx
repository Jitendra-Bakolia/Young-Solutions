import { lazy } from 'react'

const LandingPage = lazy(() => import('@/components/unprotected/landing-page/LandingPage'));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const UnProtectedRoutes = [

    { path: "/", element: <LandingPage /> },


    // { path: "/", element: <Enroll type={""} /> },



    // { path: "/aimelogin", element: <Login type={"aime"} /> },


    // { path: "/aimeforgotpassword", element: <ForgetPassword type={"aime"} /> },
]

export default UnProtectedRoutes;


