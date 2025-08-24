import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10 p-4">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;