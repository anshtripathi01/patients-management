import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    const activeLink = ({ isActive }) => ({
        borderBottom: isActive ? "3px teal solid" : "",
      });
      return (
        <Flex
          w="100%"
          boxShadow="md"
          flexWrap="wrap"
          justifyContent="space-between"
          bgColor="teal.300"
          p="3"
        >
          <Link to="/">
            <Heading fontSize="md">Patients Management</Heading>
          </Link>
          <Flex flexGrow="1" justifyContent="space-evenly">
            <NavLink style={activeLink} to="/">
              Hospital View
            </NavLink>
            <NavLink style={activeLink} to="/patients">
              Patients
            </NavLink>
            <NavLink style={activeLink} to="/wards">
              Wards
            </NavLink>
            <NavLink style={activeLink} to="https://github.com/anshtripathi01/patients-management">
              Github Repo
            </NavLink>
          </Flex>
        </Flex>
      );
}
