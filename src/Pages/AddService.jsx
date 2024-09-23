import { useState } from "react";

const AddService = ({ addService }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addService(service);
    setService({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Add New Service</h3>
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
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Add Service
      </button>
    </form>
  );
};

export default AddService;
