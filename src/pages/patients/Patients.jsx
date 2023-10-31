import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPatients } from '../../services/patientServices'
import { useNavigate } from 'react-router'
import { Button, Card, Flex, Heading } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

export const Patients = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const patients = useSelector(state=>state.patients.patients)
    useEffect(()=>{
        dispatch(fetchPatients())
    },[dispatch,patients])
  
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/patient/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New Patient
      </Button>
      {!patients?.length && (
        <Heading size="sm" m="1rem">
          No patients found
        </Heading>
      )}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {patients?.map(({ _id, name, gender, assignedWard }) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/patients/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`${name} - ${gender} - ${assignedWard}`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
