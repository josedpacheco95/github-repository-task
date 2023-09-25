import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../api/authentication';

export const AuthenticationForm = ({ authenticationFormType = 'login' }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const  navigate = useNavigate()

    const handleSubmit = async () => {
        if (authenticationFormType == 'register') {
            const response = await register({email, password})
            console.log(response);
            navigate('/')
            return
        }
        const response = await login({ email, password})
        console.log(response)
        localStorage.setItem('token', response.token)
        navigate('/commits')
    }

    return (
    <div className='bg-gray-900'>
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                 { authenticationFormType == 'login' ? 'Sign in to your account' : 'Register'}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white:focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" 
                         />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input 
                        value={password}
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••" 
                        className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white:focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                
                  <button onClick={() => handleSubmit() } className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[blue] hover:bg-primary-700 focus:ring-primary-800">Sign {authenticationFormType == 'login'? 'Up' : 'In'}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                     {authenticationFormType == 'login'? "Don't have an account yet?" : 'Already have an account' }<a onClick={() => navigate(authenticationFormType == 'login'? '/register': '/')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign {authenticationFormType == 'login'? 'Up' : 'In'}</a>
                  </p>
              </form>
          </div>
      </div>
  </div>

    </div>
    )
}

export default AuthenticationForm;