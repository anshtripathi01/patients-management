import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { HospitalView } from "./pages/HospitalView";
import { Patients } from "./pages/patients/Patients";
import { Wards } from "./pages/wards/Wards";
import { PatientForm } from "./pages/patients/PatientForm";
import { PatientDetails } from "./pages/patients/PatientDetails";
import { WardForm } from "./pages/wards/WardForm";
import { WardDetails } from "./pages/wards/WardDetails";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <Flex flexDirection="column">
    <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HospitalView />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patient/add" element={<PatientForm />} />
        <Route path="/patient/edit" element={<PatientForm />} />
        <Route path="/patients/:patientId" element={<PatientDetails />} />
        <Route path="/wards" element={<Wards />} />
        <Route path="/ward/add" element={<WardForm />} />
        <Route path="/ward/edit" element={<WardForm />} />
        <Route path="/wards/:wardId" element={<WardDetails />} />
      </Routes>
    </Flex>
  );
}

export default App;
