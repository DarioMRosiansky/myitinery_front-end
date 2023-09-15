import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signUpAction } from '../redux/actions/usersActions'
import { useNavigate } from 'react-router-dom'



//https://www.googleapis.com/oauth2/v3/userinfo

const GoogleButton = ({ }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = useGoogleLogin({

        onSuccess: async tokenResponse => {
            //const infoUser = jwtDecode(tokenResponse)
            const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: "Bearer " + tokenResponse.access_token
                }
            })
            const body = {
                usrName: data.given_name,
                usrSurname: data.family_name,
                pictureUrl: data.picture,
                email: data.email.toLowerCase(),
                password: import.meta.env.VITE_GOOGLE_PASSWORD,
                verified: true
            }
            dispatch(signUpAction(body)).then((response) => {
                console.log(response);
                if (response.payload.success) {
                    navigate("/");
                }
            });
        }
    })
    return (
        <button onClick={login} type="button" className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current" >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
        </button>
    )
}

export default GoogleButton