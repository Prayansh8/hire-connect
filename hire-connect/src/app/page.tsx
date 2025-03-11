import React from 'react';
// import Notifications from '../components/Notifications';
// import JobStatistics from '../components/JobStatistics';

const Home: React.FC = () => {
  return (
    <div>
      {/* <Notifications /> */}
      <header className="bg-blue-700 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Our Recruitment Platform</h1>
        <p className="text-lg mt-4">Connecting top talent with leading companies worldwide.</p>
        <div className="mt-8">
          <a href="/register" className="bg-white text-blue-700 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 mx-2">Register</a>
          <a href="/login" className="bg-white text-blue-700 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 mx-2">Login</a>
        </div>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Platform?</h2>
          <p className="text-center text-gray-600 mb-12">
            Our platform provides advanced tools for job seekers and recruiters to connect seamlessly and efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-md rounded-md bg-white">
              <h3 className="font-semibold text-lg mb-2">For Job Seekers</h3>
              <p className="text-gray-600">Discover exciting job opportunities tailored to your skills and preferences.</p>
            </div>
            <div className="p-6 shadow-md rounded-md bg-white">
              <h3 className="font-semibold text-lg mb-2">For Recruiters</h3>
              <p className="text-gray-600">Find the perfect candidates with our optimized recruitment tools.</p>
            </div>
            <div className="p-6 shadow-md rounded-md bg-white">
              <h3 className="font-semibold text-lg mb-2">Advanced Features</h3>
              <p className="text-gray-600">Utilize state-of-the-art technology for efficient recruitment processes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        {/* <JobStatistics /> */}
      </section>
    </div>
  );
};

export default Home;