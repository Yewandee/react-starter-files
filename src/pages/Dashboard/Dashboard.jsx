import React, { useEffect } from 'react'
import useTitle from '../../services/hooks/useTitle';

function Dashboard() {
    const { appTitle, setAppTitle } = useTitle();

    useEffect(() => {
        setAppTitle('Dashboard');
        console.log('New alert title ', appTitle);
    }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;