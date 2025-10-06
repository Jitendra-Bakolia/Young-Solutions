import { lazy } from 'react'

const Home = lazy(() => import('@/components/unprotected/Home'));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const UnProtectedRoutes = [

    { path: "/", element: <Home /> },


    // { path: "/", element: <Enroll type={""} /> },



    // { path: "/aimelogin", element: <Login type={"aime"} /> },


    // { path: "/aimeforgotpassword", element: <ForgetPassword type={"aime"} /> },
]

export default UnProtectedRoutes;


