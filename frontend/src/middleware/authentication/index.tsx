import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
type Children = {
    children: React.ReactNode
}
export const RequiredAuth = ({children}: Children) => {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, [])
    return children
}

export default RequiredAuth;