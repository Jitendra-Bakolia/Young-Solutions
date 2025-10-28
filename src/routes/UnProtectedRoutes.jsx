import { lazy } from 'react'

const LandingPage = lazy(() => import('@/components/unprotected/landing-page/LandingPage'));
const CartPage = lazy(() => import('@/components/unprotected/cart-page/CartPage'));
const PrivacyPolicy = lazy(() => import('@/components/unprotected/policy-condition-page/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@/components/unprotected/policy-condition-page/TermsConditions'));
const ReturnRefundPolicy = lazy(() => import('@/components/unprotected/policy-condition-page/ReturnRefundPolicy'));


/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const UnProtectedRoutes = [

    { path: "/", element: <LandingPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-and-conditions", element: <TermsConditions /> },
    { path: "/refund-policy", element: <ReturnRefundPolicy /> },


    // { path: "/", element: <Enroll type={""} /> },



    // { path: "/aimelogin", element: <Login type={"aime"} /> },


    // { path: "/aimeforgotpassword", element: <ForgetPassword type={"aime"} /> },
]

export default UnProtectedRoutes;


