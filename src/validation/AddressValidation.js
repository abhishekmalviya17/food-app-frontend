import * as Yup from 'yup';

const AddressValidationSchema = Yup.object().shape({
  street: Yup.string()
    .required('Street address is required')
    .min(2, 'Street address must be at least 2 characters long')
    .max(100, 'Street address must not exceed 100 characters'),

  city: Yup.string()
    .required('City is required')
    .min(2, 'City must be at least 2 characters long')
    .max(50, 'City must not exceed 50 characters'),

  state: Yup.string()
    .required('State is required')
    .min(2, 'State must be at least 2 characters long')
    .max(50, 'State must not exceed 50 characters'),

  zipCode: Yup.string()
    .required('Zip code is required')
    .matches(/^[0-9]+$/, 'Zip code must be numeric')
    .min(5, 'Zip code must be at least 5 digits long')
    .max(10, 'Zip code must not exceed 10 digits'),

  country: Yup.string()
    .required('Country is required')
    .min(2, 'Country must be at least 2 characters long')
    .max(50, 'Country must not exceed 50 characters'),
});

export default AddressValidationSchema;
