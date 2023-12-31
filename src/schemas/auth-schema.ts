import * as yup from 'yup';

const passwordRules = /[0-9a-zA-Z]{6,}/;
const usernameRules = /^[a-zA-Z0-9-]{3,30}$/;

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  username: yup
    .string()
    .min(6, 'Too short')
    .max(30, 'Too long')
    .matches(usernameRules, { message: 'Please create stronger username' })
    .required('Required'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: 'Please create stronger password' })
    .required('Required')
});

export const loginSchema = yup.object().shape({
  username: yup.string().min(2, 'Too short').required('Required'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: 'Please create stronger password' })
    .required('Required'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: 'Please create stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ' '], 'Passwords must match')
    .required('Required'),
});