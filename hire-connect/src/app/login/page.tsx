import React from 'react';
import AuthForm from '../../components/AuthForm';

const Login: React.FC = () => (
  <div className="py-16 bg-gray-100">
    <AuthForm isRegistering={false} />
  </div>
);

export default Login;
