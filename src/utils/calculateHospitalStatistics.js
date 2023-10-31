// Example calculateHospitalStatistics function
export function calculateHospitalStatistics(patients, wards) {
  if (!patients || patients?.length === 0) {
    return {
      totalPatients: 0,
      occupancyRate: 0,
      averageLengthOfStay: 0,
      topPerformingWard: {
        name: "N/A",
        criteria: "N/A",
      },
    };
  }

  const totalPatients = patients?.length;

  const occupancyRate = ((wards?.length / totalPatients) * 100)?.toFixed(2);

  const totalLengthOfStay = patients?.reduce(
    (total, patient) => total + patients.length,
    0
  );
  const averageLengthOfStay = (totalLengthOfStay / totalPatients).toFixed(2);

  const topPerformingWard = patients.reduce((topWard = 0, patient) => {
    if (!topWard || patient?.assignedWard < topWard) {
      return {
        name: patient?.assignedWard,
        criteria: `Ward Capacity: ${
            wards.find(
                ({ wardNumber }) =>
                  parseInt(wardNumber) === parseInt(patient.assignedWard)
              )?.capacity
        }`,
      };
    }
    return topWard;
  }, null);

  return {
    totalPatients,
    occupancyRate,
    averageLengthOfStay,
    topPerformingWard,
  };
}
