import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../redux/actions/usersActions';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleButtonLogin from './GoogleButtonLogin';
import { NavLink as Anchor, useNavigate } from 'react-router-dom';

export default function Login() {

	const navigate = useNavigate()
	const email = useRef(null);
	const password = useRef(null);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handleSubmit");
		console.log("email", email.current.value, "password", password.current.value);
		const body = {
			email: email.current.value,
			password: password.current.value,
		};
		dispatch(signInAction(body)).then((response) => {
			console.log("response", response);
			if (response.payload.success != undefined) {
				navigate("/");
			}
			console.log(response);
		})
	}

	return (
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
			<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
					Sign in
				</h1>
				<form className="mt-6">
					<div className="mb-2">
						<label htmlFor="email" className="block text-sm font-semibold text-gray-800" >
							Email
						</label>
						<input type="email" ref={email} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
					</div>
					<div className="mb-2">
						<label htmlFor="password" className="block text-sm font-semibold text-gray-800">
							Password
						</label>
						<input type="password" ref={password} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
					</div>
					<div className="mt-6">
						<button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
							Login
						</button>
					</div>
				</form>
				<div className="relative flex items-center justify-center w-full mt-6 border border-t">
					<div className="absolute px-5 bg-white">Or</div>
				</div>
				<div className="flex mt-4 gap-x-2">
					<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
						<GoogleButtonLogin />
					</GoogleOAuthProvider>
				</div>

				<p className="mt-8 text-xs font-light text-center text-gray-700">
					{" "}
					Don't have an account?{" "}
					<Anchor
						to="/register"
						className="font-medium text-purple-600 hover:underline"
					>
						Sign up
					</Anchor>
				</p>
			</div>
		</div>
	);
}
