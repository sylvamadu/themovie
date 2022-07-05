import React from 'react';
import { Navigate } from "react-router-dom";


function Protected({children}) {

    const credentialToken = localStorage.getItem('tokenuser')

    if (!credentialToken || credentialToken === 'undefined') {
        return <Navigate to="/signin" replace />;
    }
    return children;
}

export default Protected