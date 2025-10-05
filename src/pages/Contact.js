import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-400">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg leading-relaxed mb-4">
          For any questions regarding this project, feel free to reach out to the authors.
        </p>
        <p className="text-lg leading-relaxed font-semibold">
          Raushan Kumar & Rahul Kumar
        </p>
        <p className="text-gray-400 mt-2">
          (Email and contact details can be added here)
        </p>
      </div>
    </div>
  );
}

export default Contact;