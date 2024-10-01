import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import RequireAuth from '../services/hooks/RequiredAuth';
import LoginPage from '../pages/Auth/Login/LoginPage';
import RegisterPage from '../pages/Auth/Register/RegisterPage';
import ResetPasswordPage from '../pages/Auth/ResetPassword/ResetPasswordPage';
import ForgotPasswordPage from '../pages/Auth/ForgotPassword/ForgotPasswordPage';
import Dashboard from '../pages/Dashboard/Dashboard';

const RoutesSystem = () => {
  return (
    <Routes>

      {/* public routes */}

      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/reset-password' element={<ResetPasswordPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      {/* <Route path='/confirm-email' element={<ConfirmEmailPage />} /> */}
      {/* <Route path='/complete-registration' element={<RegisterMultiStepPage />} /> */}


      {/* protected routes */}

      <Route element={<RequireAuth />}>
        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="customers" element={<Customers />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="/merchant/credentials/:merchantCode" element={<MerchantCredentials />} />
          <Route path="merchant/credentials/merchantPopUpForm" element={<MerchantPopUpForm />} /> */}

          {/* <Route path="/settlement" >
            <Route path='all' element={<AllSettlement />} />
            <Route path='bank-account' element={<BankAccount />} />
            <Route path='configuration' element={<Configuration />} />
          </Route> */}


          {/* Add other routes */}

          {/* <Route path="transaction" element={<Transactions />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="settings" element={<Settings />} />
          <Route path='/change-password' element={<ChangePasswordPage />} /> */}

          {/* Compliance Routes */}

          {/* <Route path="compliance" element={<ComplianceLayout />} >
            <Route path="contact" element={<ContactForm />} />
            <Route path="profile" element={<ProfileForm />} />
            <Route path="bank" element={<BankForm />} />
            <Route path="business" element={<BusinessForm />} />
            <Route path="service-agreement" element={<MerchantServiceAgreement />} />
            <Route index element={<Navigate to='profile' />} />
          </Route> */}

        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesSystem;