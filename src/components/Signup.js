import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from './common/Button';
import Checkbox from './common/Checkbox';
import Snackbar from './common/Snackbar';
import config from '../config'; // Ensure this is the correct path
import InputField from './common/InputField';
import SignupSchema from '../validation/SignupValidation';
import { useSnackbar } from '../context/SnackbarContext';

const Signup = () => {
  const navigate = useNavigate();
  
  const { showSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeTerms: true,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`${config.apiUrl}/api/users/`, values);
        showSnackbar('Signup successful! Redirecting to login...',  'success' );
        setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
      } catch (error) {
        const errorMsg = error.response ? error.response.data.message : error.message;
        showSnackbar(errorMsg, 'error' );
      }
    },
  });

 

  return (
    <div className='h-screen flex flex-row'>
    <div className='flex flex-col justify-between w-2/5 custom-sm:w-full mx-40 custom-sm:mx-5 mt-4 mb-6'>
      <div id="RootRoot" className="flex flex-col justify-center pt-0 gap-32 w-full items-start">
        <img
          src="https://file.rendit.io/n/UDxGnOZshAV2KGpCr6OY.svg"
          alt="Logo"
          className="w-20"
        />
        <div className="flex flex-col justify-between gap-24 w-full font-['Nunito'] items-start px-6">
          <div className="text-6xl font-bold tracking-[0.1] leading-[82px] text-[#2b2b43]">
            Sign Up
          </div>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full items-start">
            {/* First Name Field */}
            <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
                />


            {/* Last Name Field */}
            <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
                />

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

            {/* Agree to Terms Checkbox */}
            <Checkbox
                label="I agree to the terms and conditions"
                checked={formik.values.agreeTerms}
                onChange={() => formik.setFieldValue('agreeTerms', !formik.values.agreeTerms)}
                />
            {formik.touched.agreeTerms && formik.errors.agreeTerms && <div className="text-xs text-red-500">{formik.errors.agreeTerms}</div>}

            {/* Submit Button */}
            <Button text="Sign Up" color="blue-600" onClick={formik.handleSubmit} hoverColor="blue-700" textColor="white" hoverTextColor="white" border={false} extraClasses="w-full text-lg" />
          </form>
          <div className="text-center text-sm tracking-[0.1] leading-[20px] text-[#545563]">
                    Already have an account?{" "}
                    <span className="font-bold tracking-[0.3] text-[#4e60ff] cursor-pointer" onClick={() => navigate('/login')}>
                        Login
                    </span>
                </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col w-3/5 custom-sm:hidden bg-[#697BFF]'>
              
    </div>
    
  </div>
  );
};

export default Signup;

