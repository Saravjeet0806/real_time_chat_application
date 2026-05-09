import React, { useState } from 'react';
import { register } from '../store/authStore';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            email,
            password
        };

        await register(formData);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center m-10 gap-4'
            >

                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='border p-2'
                />

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border p-2'
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border p-2'
                />

                <button
                    type="submit"
                    className='bg-black text-white px-4 py-2'
                >
                    Register
                </button>

            </form>
        </div>
    );
};

export default Register;