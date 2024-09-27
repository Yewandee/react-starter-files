import React from 'react';
import HeroSection from '../../../components/HeroSection';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="block lg:bg-[transparent] lg:flex h-screen overflow-hidden">
      <div className="w-[60%] hidden lg:block overflow-hidden">
        <HeroSection />
      </div>
      <div className='lg:w-[40%] flex justify-center lg:block'>
        <div className="h-full w-[80%] lg:w-full px-16">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;