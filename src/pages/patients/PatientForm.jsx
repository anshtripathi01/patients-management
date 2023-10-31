import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addPatient, editPatient } from "../../services/patientServices";

export const PatientForm = () => {
  const {
    _id: id,
    name,
    age,
    gender,
    assignedWard,
    medicalHistory,
    contactInfo,
  } = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [patient, setPatient] = useState({
    name,
    age,
    gender,
    assignedWard,
    medicalHistory,
    contactInfo,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editPatient({ patient, id }));
    navigate("/patients");
  };

  const handleAddPatient = (e, patientData) => {
    e.preventDefault();
    dispatch(addPatient(patientData));
    navigate("/patients");
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        {location === "/patient/edit"
          ? "Update Patient Details"
          : "Fill Patient Details"}
      </Heading>
      <Flex
        w="20rem"
        h="30rem"
        as="form"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        onSubmit={(e) => {
          location === "/patient/edit"
            ? handleUpdate(e)
            : handleAddPatient(e, patient);
        }}
      >
        <Input
          onChange={(e) => setPatient({ ...patient, name: e.target.value })}
          type="text"
          placeholder="Enter Patient name"
          defaultValue={name}
          required
        />
        <Input
          onChange={(e) => setPatient({ ...patient, age: e.target.value })}
          type="number"
          placeholder="age"
          defaultValue={age}
          required
        />
        <Input
          onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
          type="text"
          placeholder="gender"
          defaultValue={gender}
          required
        />
        <Input
          onChange={(e) => setPatient({ ...patient, assignedWard: e.target.value })}
          type="number"
          placeholder="ward number"
          defaultValue={assignedWard}
          required
        />
        <Input
          onChange={(e) => setPatient({ ...patient, medicalHistory: e.target.value })}
          type="text"
          placeholder="Medical History"
          defaultValue={medicalHistory}
          required
        />
        <Input
          onChange={(e) =>
            setPatient({ ...patient, contactInfo: e.target.value })
          }
          type="text"
          placeholder="contact details"
          defaultValue={contactInfo}
          required
        />

        <Button type="submit" m="1rem" colorScheme="teal" color="white">
          {location === "/patient/edit" ? "Update" : "Add"}
        </Button>
      </Flex>
    </Flex>
  );
};
