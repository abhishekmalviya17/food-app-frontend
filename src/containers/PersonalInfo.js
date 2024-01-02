import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../context/SnackbarContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import Checkbox from "../components/common/Checkbox";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import '../../src/App.css';
import '../../src/index.css'
import { getUser, updateUser } from "../redux/actions/userActions";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const userInfo = useSelector(state => state.auth.userProfile);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user && user._id) {
      dispatch(getUser(user._id, showSnackbar));
    }
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      newDeals: false,
      newRestaurants: false,
      orderStatuses: false,
      passwordChanges: false,
      specialOffers: false,
      newsletter: false
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Prepare values for update
      const updateValues = {
        name: { first: values.firstName, last: values.lastName },
        email: values.email,
        phone: values.phone,
        settings: {
          emailNotifications: {
            newDeals: values.newDeals,
            newRestaurants: values.newRestaurants,
            orderStatuses: values.orderStatuses,
            passwordChanges: values.passwordChanges,
            specialOffers: values.specialOffers,
            newsletter: values.newsletter
          }
        }
      };
      dispatch(updateUser(user._id, updateValues, navigate, showSnackbar,));
      showSnackbar("Profile updated successfully", "success");
    }
  });

  useEffect(() => {
    if (userInfo) {
      formik.setValues({
        firstName: userInfo.name.first,
        lastName: userInfo.name.last,
        email: userInfo.email,
        phone: userInfo.phone,
        ...userInfo.settings.emailNotifications
      });
    }
  }, [userInfo, formik.setValues]);

  const handleButtonClick = () => {

  }

  return (
    <div id="NewRootRoot" className="flex flex-col w-full items-start custom-sm:p-0 mt-4">
      <div className="text-xl font-['Nunito'] font-semibold leading-[28px] text-[#2b2b43] mb-5">
        Account
      </div>
      <form onSubmit={formik.handleSubmit}
        id="Box"
        className="border-solid border-[#edeef2] bg-white flex flex-col justify-center gap-6 w-full font-['Nunito'] items-start pt-6 pb-5 px-4 custom-sm:p-2 border rounded-lg"
      >
        <div className="flex flex-col gap-8 w-full items-start">
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-col justify-between gap-4 w-full items-start">
            <div className="text-lg font-bold tracking-[0.1] leading-[24px] text-[#2b2b43]">
              Personal information
            </div>
            <div className="flex flex-row gap-8 w-2/5 items-start">
              <div className="flex flex-col gap-2 w-2/3 items-start">
                <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                  Avatar
                </div>
                <div className="flex flex-row gap-6 w-full items-start">
                  <img
                    src="https://file.rendit.io/n/hC80TTwFLS5zvCfZP904.svg"
                    alt="Avatar"
                    className="w-20"
                  />
                  <Button 
                      text="Change" 
                      color="blue-600" 
                      onClick={handleButtonClick} 
                      hoverColor="blue-700" 
                      textColor="blue-700" 
                      hoverTextColor="white" 
                      border={true} 
                      extraClasses="w-full text-lg bg-white" 
                  />
                  

                  <Button 
                   text="Remove" 
                   color="white" 
                   onClick={handleButtonClick} 
                   hoverColor="gray-300" 
                   textColor="gray-600" 
                   hoverTextColor="black" 
                   border={true} 
                   extraClasses="w-full text-lg bg-white"
                    
                  />
                </div>
              </div>
              
            </div>
          </div>

          {/* Name and Contact Information */}
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="flex flex-row custom-sm:hidden justify-between w-3/5 custom-sm:w-full items-start">
              <div className="text-xs font-semibold leading-[16px] custom-sm:w-full text-[#545563]">
                First name
              </div>
              <div className="text-xs font-semibold leading-[16px] text-[#545563] custom-sm:w-full">
                Last name
              </div>
            </div>
            <div className="flex flex-row custom-sm:flex-col gap-4 w-full items-start">
              <div className="text-xs font-semibold leading-[16px] custom-sm:w-full custom-md:hidden text-[#545563]">
                First name
              </div>
              <InputField
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && formik.errors.firstName}
               />
               <div className="text-xs custom-md:hidden font-semibold leading-[16px] custom-sm:w-full custom-md:hidden text-[#545563]">
                Last name
              </div>
              <InputField
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && formik.errors.lastName}
               />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="flex flex-row justify-between w-3/5 items-start custom-sm:hidden">
              <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                Email
              </div>
              <div className="text-xs font-semibold leading-[16px] text-[#545563]">
                Phone number
              </div>
            </div>
            <div className="flex flex-row custom-sm:flex-col gap-4 w-full items-start">
              <div className="custom-md:hidden custom-sm:w-full text-xs font-semibold leading-[16px] text-[#545563]">
                Email
              </div>
              <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
               />
              <div className="custom-md:hidden custom-sm:w-full text-sm font-semibold leading-[16px] text-[#545563]">
                Phone number
              </div>
              <InputField
                  type="number"
                  name="phone"
                  placeholder="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && formik.errors.phone}
               />
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="flex flex-row custom-sm:flex-col justify-between w-full items-start">
            <div className="flex flex-col gap-12 w-full items-start custom-md:w-1/4">
              <div className="flex flex-col justify-between w-full h-[148px] items-start">
                <div className="text-lg font-bold custom-sm:font-md tracking-[0.1] leading-[24px] text-[#2b2b43] ">
                  Email notifications
                </div>
                <Checkbox
                    label="New deals"
                    checked={formik.values.newDeals}
                    onChange={() => formik.setFieldValue('newDeals', !formik.values.newDeals)}
                />
                <Checkbox
                    label="New restaurants"
                    checked={formik.values.newRestaurants}
                    onChange={() => formik.setFieldValue('newRestaurants', !formik.values.newRestaurants)}
                />
                 <Checkbox
                    label="Order statuses"
                    checked={formik.values.orderStatuses}
                    onChange={() => formik.setFieldValue('orderStatuses', !formik.values.orderStatuses)}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 custom-sm:mt-3 gap-12 w-full items-start custom-md:w-1/2">
              <div className="flex flex-col justify-between w-full h-[108px] items-start">
                <Checkbox
                    label="Password Changes"
                    checked={formik.values.passwordChanges}
                    onChange={() => formik.setFieldValue('passwordChanges', !formik.values.passwordChanges)}
                />
                 <Checkbox
                    label="News letters"
                    checked={formik.values.newsletter}
                    onChange={() => formik.setFieldValue('newsletter', !formik.values.newsletter)}
                />
                 <Checkbox
                    label="Special Offers"
                    checked={formik.values.specialOffers}
                    onChange={() => formik.setFieldValue('specialOffers', !formik.values.specialOffers)}
                />
              </div>
            </div>
          </div>
        </div>

       

        <div className="border-t border-[#edeef2] p-4 w-full mt-6 flex flex-row justify-between items-start">
          
             <Button 
                      text="Logout" 
                      color="red-600" 
                      onClick={handleButtonClick} 
                      hoverColor="red-700" 
                      textColor="red-700" 
                      hoverTextColor="white" 
                      border={true} 
                      extraClasses="text-lg bg-white" 
                  />
            <div className="flex flex-row justify-between items-start w-80  custom-sm:w-70">
                <Button 
                      text="Discard changes" 
                      color="gray-600" 
                      onClick={() => formik.resetForm()} 
                      hoverColor="gray-700" 
                      textColor="gray-700" 
                      hoverTextColor="white" 
                      border={true} 
                      extraClasses="text-lg bg-white w-100 " 
                  />
                 <Button 
                      text="Save changes" 
                      color="green-600" 
                      type="submit"
                      onClick={() => formik.handleSubmit()}
                      hoverColor="green-700" 
                      textColor="green-700" 
                      hoverTextColor="white"  
                      border={true} 
                      extraClasses="text-lg bg-white w-100" 
                  />
            </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

{/* <div className="flex flex-row ml-16 gap-4 w-5/6 items-start">

</div>


*/}
