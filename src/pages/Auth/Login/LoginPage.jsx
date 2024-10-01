import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../../services/hooks/useAuth';
import LoginForm from './LoginForm';
import AuthLayout from '../../../components/AuthLayout';
import { logout } from '../../../redux/slices/authSlice';
import useTitle from '../../../services/hooks/useTitle';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();
  const { setTitle } = useTitle();

  useEffect(() => {
    dispatch(logout());
    setAuth({});
    setTitle({});
  }, []);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;