"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';


const Dashboard = () => {
    const session = useSession();
    // console.log("session Dashboard", session);
    // console.log("process.env.NEXT_PUBLIC_ADMIN", process.env.NEXT_PUBLIC_ADMIN);

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router.push("/dashboard/login")
    }

    if (session.status === "authenticated" && session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN) {
        router.push("/")
    }

    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {
        return <p style={{ color: "red" }}>Welcome, ADMIN</p>
    }
}


export default Dashboard