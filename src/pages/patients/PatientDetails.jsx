import { Button, ButtonGroup, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export const PatientDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);
  const { patientId } = useParams();
  const { _id, name, age, gender, medicalHistory, contactInfo, assignedWard } =
    patients.find(({ _id }) => _id === patientId);

  const deletePatient = createAsyncThunk(
    "patients/deletePatient",
    async (id) => {
      try {
        const response = await fetch(
          `https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/patients/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { message } = await response.json();
        toast.warning(message, { autoClose: 1000 });
        navigate("/patients");
      } catch (error) {
        console.log("error while deleting patient");
      }
    }
  );
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        Student Details
      </Heading>
      <Card w="20rem">
        <CardBody textAlign="center">
          <Heading size="md" m={1}>
            {name}
          </Heading>
          <Heading size="xs">Age : {age}</Heading>
          <Heading size="xs">Gender : {gender}</Heading>
          <Heading size="xs">Ward Number : {assignedWard}</Heading>
          <Heading size="xs">Medical History : {medicalHistory}</Heading>
          <Heading size="xs">Contacts : {contactInfo}</Heading>
          <ButtonGroup m="1rem" spacing={5}>
            <Button
              colorScheme="teal"
              color="white"
              onClick={() => {
                navigate("/patient/edit", {
                  state: { _id, name, age, gender, assignedWard, medicalHistory, contactInfo },
                });
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deletePatient(_id));
              }}
              colorScheme="red"
              color="white"
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Flex>
  );
};
