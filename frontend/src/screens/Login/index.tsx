import React, {useEffect} from 'react'
import AuthenticationForm from '../../components/AuthenticationForm'
import { useNavigate } from 'react-router-dom'
export const LoginScreen = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/commits')
    }, [])
    return (<AuthenticationForm authenticationFormType='login' />)
}

export default LoginScreen;