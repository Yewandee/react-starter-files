import React, { useEffect } from 'react'
import useTitle from '../../services/hooks/useTitle';

function Dashboard() {
    const { appTitle, setAppTitle } = useTitle();

    useEffect(() => {
        setAppTitle('Dashboard');
    }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;