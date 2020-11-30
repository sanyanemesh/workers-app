import React, { useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import { EMPLOYEES } from 'modules/api/endpoints';
import useFetch from 'hooks/useFetch';
import ProfileGrid from 'components/common/ProfileGrid';
import { selectAppState } from 'modules/app/selectors';

export default function Empoyees() {
  const {response, performFetch} = useFetch(EMPLOYEES);
  const { loading, data } = response;
  const appState = useSelector(selectAppState);

  useEffect(() => {
    performFetch()
  }, [performFetch]);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      return []
    }

    if (!appState.selectedJob) {
      return data;
    }

    return data.filter(employee => employee.job === appState.selectedJob)
  }, [data, appState.selectedJob])

  return (
    <ProfileGrid profiles={filteredData} loading={loading} />
  )
}