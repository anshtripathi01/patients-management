import { Button, ButtonGroup, Card, CardBody, Flex, Heading } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export const WardDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wards = useSelector((state) => state.wards.wards);
    const { wardId } = useParams();
    const { _id, wardNumber, capacity, specializations} =
      wards.find(({ _id }) => _id === wardId);
  
    const deleteWard = createAsyncThunk(
      "wards/deleteward",
      async (id) => {
        try {
          const response = await fetch(
            `https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/wards/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const { message } = await response.json();
          toast.warning(message, { autoClose: 1000 });
          navigate("/wards");
        } catch (error) {
          console.log("error while deleting ward");
        }
      }
    );
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading size="md" m="1rem">
          Ward Details
        </Heading>
        <Card w="20rem">
          <CardBody textAlign="center">
            <Heading size="md" m={1}>
              {wardNumber}
            </Heading>
            <Heading size="xs">Ward Capacity : {capacity}</Heading>
            <Heading size="xs">Specializations: {specializations}</Heading>
           
            <ButtonGroup m="1rem" spacing={5}>
              <Button
                colorScheme="teal"
                color="white"
                onClick={() => {
                  navigate("/ward/edit", {
                    state: { _id, wardNumber, capacity, specializations},
                  });
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteWard(_id));
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
}
