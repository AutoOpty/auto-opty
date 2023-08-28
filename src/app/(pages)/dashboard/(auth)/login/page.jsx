"use client";
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    )
}

export default LoginPage