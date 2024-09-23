import React, { useState } from 'react';
import AddService from "./Pages/AddService"
import EditService from "./Pages/EditService"
import ServiceList from "./Pages/ServiceList"

const App = () => {
  const [services, setServices] = useState([
    { name: "General Check-up", description: "A comprehensive medical examination.", price: 50 },
    { name: "Dental Care", description: "Professional dental cleaning and check-ups.", price: 100 },
    { name: "Cardiology Consultation", description: "Specialized heart and cardiovascular care.", price: 200 },
  ]);
  const [editing, setEditing] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service === currentService ? updatedService : service
      )
    );
    setEditing(false);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const editService = (index) => {
    setCurrentService(services[index]);
    setEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-green-400 to-blue-500 p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center">Healthcare Services</h1>
        <p className="text-white text-lg text-center mt-2">Providing professional medical services to keep you healthy</p>
      </header>

      <main className="w-full max-w-4xl p-6">
        {!editing ? (
          <>
            <AddService addService={addService} />
            <ServiceList
              services={services.length > 0 ? services : exampleServices}
              onEdit={editService}
              onDelete={deleteService}
            />
          </>
        ) : (
          <EditService
            serviceToEdit={currentService}
            updateService={updateService}
            cancelEdit={() => setEditing(false)}
          />
        )}
      </main>

      <footer className="w-full bg-gray-800 p-4 text-white text-center mt-auto">
        <p>Healthcare Services © 2024 | Designed by Heer Jain</p>
      </footer>
    </div>
  );
};


export default App;
