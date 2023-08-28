"use client";
import { useSession } from 'next-auth/react';
import React from 'react';


const Dashboard = () => {
    const session = useSession();
    console.log("session", session);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard