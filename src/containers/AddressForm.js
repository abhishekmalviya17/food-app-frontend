import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";

// Validation Schema
const AddressValidationSchema = Yup.object().shape({
  street: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip code is required'),
  country: Yup.string().required('Country is required'),
});

const AddressForm = ({ initialValues, onSubmit, onCancel }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    validationSchema: AddressValidationSchema,
    onSubmit,
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <InputField
          name="street"
          placeholder="Street Address"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.street && formik.errors.street}
        />
        <InputField
          name="city"
          placeholder="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.city && formik.errors.city}
        />
        <InputField
          name="state"
          placeholder="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.state && formik.errors.state}
        />
        <InputField
          name="zipCode"
          placeholder="Zip Code"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.zipCode && formik.errors.zipCode}
        />
        <InputField
          name="country"
          placeholder="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.country && formik.errors.country}
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button text="Cancel" color="gray-400" hoverColor="gray-500" onClick={onCancel} />
          <Button text="Save Address" type="submit" color="blue-600" hoverColor="blue-700" onClick={() => formik.handleSubmit()}/>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
