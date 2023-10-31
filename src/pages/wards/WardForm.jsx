import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { addWard, editWard } from '../../services/wardServices';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export const WardForm = () => {
    const{ _id:id, wardNumber, capacity, specializations} = useLocation()?.state ?? "";
      const navigate = useNavigate();
      const location = useLocation()?.pathname;
      const dispatch = useDispatch();
      const [ward, setWard] = useState({ wardNumber, capacity, specializations});
      const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editWard({ ward, id }));
        navigate("/wards");
      };
    
      const handleAddWard = (e, wardData) => {
        e.preventDefault();
        dispatch(addWard(wardData));
        navigate("/wards");
      };
      return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Heading size="md" m="1rem">
            {location === "/ward/edit"
              ? "Update ward Details"
              : "Fill ward Details"}
          </Heading>
          <Flex
            w="20rem"
            h="30rem"
            as="form"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            onSubmit={(e) => {
              location === "/ward/edit"
                ? handleUpdate(e)
                : handleAddWard(e, ward);
            }}
          >
            <Input
              onChange={(e) => setWard({ ...ward, wardNumber: e.target.value })}
              type="number"
              placeholder="Enter ward number"
              defaultValue={wardNumber}
              required
            />
            <Input
              onChange={(e) => setWard({ ...ward, capacity: e.target.value })}
              type="number"
              placeholder="Capacity"
              defaultValue={capacity}
              required
            />
            <Input
              onChange={(e) => setWard({ ...ward, specializations: e.target.value })}
              type="text"
              placeholder="Specializations"
              defaultValue={specializations}
              required
            />
    
            <Button type="submit" m="1rem" colorScheme="teal" color="white">
              {location === "/ward/edit" ? "Update" : "Add"}
            </Button>
          </Flex>
        </Flex>
  )
}
