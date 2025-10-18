import { lazy } from 'react'

const LandingPage = lazy(() => import('@/components/unprotected/landing-page/LandingPage'));
const CartPage = lazy(() => import('@/components/unprotected/cart-page/CartPage'));

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const UnProtectedRoutes = [

    { path: "/", element: <LandingPage /> },
    { path: "/cart", element: <CartPage /> },


    // { path: "/", element: <Enroll type={""} /> },



    // { path: "/aimelogin", element: <Login type={"aime"} /> },


    // { path: "/aimeforgotpassword", element: <ForgetPassword type={"aime"} /> },
]

export default UnProtectedRoutes;


