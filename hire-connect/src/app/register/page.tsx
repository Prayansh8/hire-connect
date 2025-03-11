import React from 'react';
import AuthForm from '../../components/AuthForm';

const Register: React.FC = () => (
  <div className="py-16 bg-gray-100">
    <AuthForm isRegistering={true} />
  </div>
);

export default Register;