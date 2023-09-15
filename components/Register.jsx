import React, { useRef, useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { signUpAction } from '../redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import GoogleButton from './GoogleButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink as Anchor } from 'react-router-dom';

export default function Register() {
  const name = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const photo = useRef(null)
  const password = useRef(null)
  const country = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user.user)
  const [countries, setCountries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      usrName: name.current.value,
      usrSurname: lastName.current.value,
      pictureUrl: photo.current.value,
      country: country.current.value,
      email: email.current.value.toLowerCase(),
      password: password.current.value
    }
    dispatch(signUpAction(body)).then((response) => {
      if (response.payload.success) {

        navigate("/");
      }
      console.log(response);
    });
  }

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">

      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input type="text" required ref={name} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800">
              Lastname
            </label>
            <input type="text" required ref={lastName} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input type="email" required ref={email} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="photoUrl" className="block text-sm font-semibold text-gray-800" >
              Photo URL
            </label>
            <input type="text" required ref={photo} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800" >
              Password
            </label>
            <input type="password" required ref={password} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <div className="w-[100]">
              <label htmlFor="country" className="block text-sm font-semibold text-gray-800" >
                country
              </label>
              <select name="country" ref={country} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                {countries.length > 0 &&
                  countries.map((country) => (
                    <option key={`opt-country-${country}`} value={country}>
                      {" "}
                      {country}{" "}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button type='submit' onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Sign up
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">

          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            {/* <GoogleLogin onSuccess={credentialResponse => {
              //console.log(credentialResponse);
              const infoUser = jwtDecode(credentialResponse.credential)
              console.log(infoUser);
              handleSubmitGoogle(infoUser)

            }}
              onError={() => {
                console.log('Login Failed');
              }} /> */}
            <GoogleButton />
          </GoogleOAuthProvider>

        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already registered?{" "}
          <Anchor
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign in
          </Anchor>
        </p>
      </div>
    </div>
  );
}
