import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  });
  export default SignupSchema;
