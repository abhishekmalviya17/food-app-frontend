import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import Button from './common/Button';
import Checkbox from './common/Checkbox';
import Snackbar from './common/Snackbar';
import InputField from './common/InputField';
import LoginSchema from '../validation/LoginValidation';
import {loginUser} from '../redux/actions/authActions'
import { useSnackbar } from '../context/SnackbarContext';
import ReviewsCarousel from './layout/Carousel';

const Login = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.token) {
      navigate('/home')
    }

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        rememberMe: false,
      },
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        try {
          console.log("Login Data:", values);
          dispatch(loginUser(values, navigate, showSnackbar)); // Dispatch the loginUser action
        } catch (error) {
          const errorMsg = error.response ? error.response.data.message : error.message;
          showSnackbar( errorMsg,  'error' );
        }
      },
    });
  

    return (
        <div className='h-screen flex flex-row'>
            <div className='flex flex-col justify-between w-2/5 custom-sm:w-full mx-40 custom-sm:mx-5 mt-4 mb-6'>
                <div id="RootRoot" className="flex flex-col justify-center pt-0 gap-32 w-full items-start">
                    <img
                        src="https://file.rendit.io/n/UDxGnOZshAV2KGpCr6OY.svg"
                        alt="Shape"
                        id="Shape"
                        className="w-20"
                    />
                    <div className="flex flex-col justify-between gap-24 w-full font-['Nunito'] items-start px-6">
                        <div className="flex flex-col gap-10 w-full items-start">
                            <div className="flex flex-col gap-8 w-full items-start">
                                <div className="flex flex-col gap-4 w-full items-start">
                                    <div className="text-6xl font-bold tracking-[0.1] leading-[82px] text-[#2b2b43]">
                                        Login
                                    </div>
                                    <div className="text-sm tracking-[0.1] leading-[20px] text-[#545563] w-full">
                                        Sign in with your data that you entered during your registration.
                                    </div>
                                </div>
                                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full items-start">
                                    {/* Email Field */}
                                    <InputField
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && formik.errors.email}
                                    />

                                    {/* Password Field */}
                                    <InputField
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && formik.errors.password}
                                    />

                                    {/* Remember Me Checkbox */}
                                    <Checkbox
                                    label="Remember me"
                                    checked={formik.values.rememberMe}
                                    onChange={() => formik.setFieldValue('rememberMe', !formik.values.rememberMe)}
                                    />

                                    {/* Submit Button */}
                                    <Button text="Login" color="blue-600" onClick={formik.handleSubmit} hoverColor="blue-700" textColor="white" hoverTextColor="white" border={false} extraClasses="w-full text-lg" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm tracking-[0.1] leading-[20px] text-[#545563]">
                    Don’t have an account?{" "}
                    <span className="font-bold tracking-[0.3] text-[#4e60ff] cursor-pointer" onClick={() => navigate('/signup')}>
                        Sign up
                    </span>
                </div>
            </div>
            <div className='flex flex-col w-3/5 custom-sm:hidden bg-[#697BFF]'>
                <ReviewsCarousel />
            </div>
        </div>
    );
}

export default Login;
