import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Services</Link>
      <h1 className="text-3xl font-bold mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
      <p className="text-lg">This is a detailed page for the <strong>{slug.replace(/-/g, ' ')}</strong> service. You can write more information here based on actual content.</p>
    </div>
  );
};

export default ServiceDetail;
