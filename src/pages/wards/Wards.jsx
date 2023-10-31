import { Button, Card, Flex, Heading, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { fetchWards } from '../../services/wardServices'
import { NavLink } from 'react-router-dom'

export const Wards = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const wards = useSelector(state=>state.wards.wards)
    useEffect(()=>{
        dispatch(fetchWards())
    },[dispatch,wards])

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/ward/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New Ward
      </Button>
      {!wards?.length && (
        <Heading size="sm" m="1rem">
          No wards found
        </Heading>
      )}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {wards?.map(({ _id, wardNumber, capacity, specializations}) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/wards/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`Ward Number : ${wardNumber} - Capacity : ${capacity}`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
