import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/patients"
      );
      const { patients } = await response.json();
      return patients;
    } catch (error) {
      console.log("error while fetching patients");
    }
  }
);
export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patientData) => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/patients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patientData),
        }
      );
      const patient = await response.json();
      toast.success("patient Added Successfully", { autoClose: 1000 });
      return patient;
    } catch (error) {
      console.log("error while adding");
    }
  }
);

export const editPatient = createAsyncThunk(
  "patients/editPatient",
  async (data) => {
    const { patient, id } = data;
    
    try {
      const response = await fetch(
        `https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/patients/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patient),
        }
      );
      const updatedPatient = await response.json();
      toast.success("patient details updated", { autoClose: 1000 });
      return updatedPatient;
    } catch (error) {
      console.log("error while editing");
    }
  }
);
