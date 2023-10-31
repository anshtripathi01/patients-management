import React from "react";
import {
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { calculateHospitalStatistics } from "../utils/calculateHospitalStatistics"; // Adjust the import based on your specific implementation

export const HospitalView = () => {
  const patients = useSelector((state) => state.patients.patients);
  const wards = useSelector((state) => state.wards.wards);
  const hospitalStatistics = calculateHospitalStatistics(patients, wards);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        Hospital View
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" boxShadow="md" m="1rem" p="2rem">
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Hospital-wide Statistics
        </Text>
        <Stat>
          <StatLabel>Total Patients</StatLabel>
          <StatNumber>{hospitalStatistics.totalPatients}</StatNumber>
          <StatHelpText>As of today</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Occupancy Rate</StatLabel>
          <StatNumber>{hospitalStatistics.occupancyRate}%</StatNumber>
          <StatHelpText>Overall</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Average Length of Stay</StatLabel>
          <StatNumber>{hospitalStatistics.averageLengthOfStay} days</StatNumber>
          <StatHelpText>Overall</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Top-Performing Ward</StatLabel>
          <StatNumber>{hospitalStatistics.topPerformingWard.name}</StatNumber>
          <StatHelpText>
            Criteria: {hospitalStatistics.topPerformingWard.criteria}
          </StatHelpText>
        </Stat>
      </Box>
    </Flex>
  );
};
