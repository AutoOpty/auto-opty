"use client";
import { useSession } from 'next-auth/react';
import React from 'react';


const Dashboard = () => {
    const session = useSession();
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard