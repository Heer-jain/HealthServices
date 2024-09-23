const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.length ? (
        services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-green-600 font-bold mt-4">Price: ₨{service.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
              <button
                className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No services available.</p>
      )}
    </div>
  );
};

export default ServiceList