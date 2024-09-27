import React from 'react';
import HeroSection from '../../../components/HeroSection';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <div className="block lg:bg-[transparent] lg:flex h-screen">
      <div className="w-[60%] hidden lg:block overflow-hidden">
        <HeroSection />
      </div>
      <div className='lg:w-[40%] flex justify-center lg:block overflow-y-scroll'>
        <div className="h-full w-[80%] lg:w-full px-16">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;