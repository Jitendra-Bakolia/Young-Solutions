import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import YoungSolutionsLoader from "./components/common-components/loader/YoungSolutionsLoader";

const AuthenticateHandler = ({ children }) => {
    const navigate = useNavigate();
    const isFirstRender = useRef(true); // Track the first render
    const prevLoginArray = useRef(); // Ref to store the previous value of loginArray

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect to login if not authenticated
            navigate("/login", { replace: true });
        }
    }, [isAuthenticated]);

    useEffect(() => {
        // Skip the effect during the first render
        if (isFirstRender.current) {
            prevLoginArray.current = loginArray
            isFirstRender.current = false; // Set to false after first render
            return;
        }

        // Check if loginArray has actually changed
        if (prevLoginArray.current !== loginArray) {
            // Redirect to current landing module on change in loginArray
            navigate(currentUser.landingModule, { replace: true });
            prevLoginArray.current = loginArray; // Update previous loginArray value
        }
    }, [loginArray, currentUser.landingModule]); // The effect now only runs when loginArray or landingModule changes

    return login?.loader ? <YoungSolutionsLoader from="auth" /> : <>{children}</>;
};

export default AuthenticateHandler;
