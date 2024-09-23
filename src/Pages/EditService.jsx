import React, { useState, useEffect } from 'react';

const EditService = ({ serviceToEdit, updateService, cancelEdit }) => {
  const [service, setService] = useState(serviceToEdit);

  useEffect(() => {
    setService(serviceToEdit);
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(service);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mt-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Edit Service</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Name</label>
          <input
            type="text"
            value={service.name}
            onChange={(e) => setService({ ...service, name: e.target.value })}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={service.description}
            onChange={(e) => setService({ ...service, description: e.target.value })}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={service.price}
            onChange={(e) => setService({ ...service, price: e.target.value })}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Update Service
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditService;
