import { toast } from "react-toastify";
import { server } from "../../utils/axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const signInAction = createAsyncThunk('signInAction', async (body) => {
    try {
        const data = await server.post(`/auth/signin`, body)
        console.log("signIn", body);
        localStorage.setItem('token', data.data.token)
        console.log(data.data);
        console.log(data.data.success);
        if (data.data.success) {
            toast.success('Welcome ' + data.data.user.name + " " + data.data.user.surname, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error("error: " + data.data.error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        return data.data
    } catch (error) {
        console.log(error, response);
        return []
    }
})

export const signUpAction = createAsyncThunk('signUpAction', async (body) => {
    console.log("signup", body);
    try {
        const data = await server.post(`/auth/signup`, body)
        localStorage.setItem('token', data.data.token)
        console.log("data signup" + data);
        return data.data
    } catch (error) {
        console.log("error ", error.response);
        toast.error("error: " + error.response.data.message, {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })



        return []
    }
})

export const loginTokenAction = createAsyncThunk('loginTokenAction', async () => {
    try {
        const token = localStorage.getItem('token')
        console.log(token);
        const { data } = await server.post('/auth/signin/token', {}, {
            headers: {
                Authorization: "Bearer " + token
            }

        })
        console.log("Data token", data);
        toast.success('Welcome ' + data.user.usrName + " " + data.user.usrSurname, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return { ...data, token }
    } catch (e) {
        console.log(e);
        return e
    }

})

export const logoutAction = createAction("logout", () => {
    localStorage.removeItem('token')
    toast.warn('Successfully logged out', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return {
        payload: null
    }
})

export default {
    signInAction,
    signUpAction,
    loginTokenAction,
    logoutAction
}