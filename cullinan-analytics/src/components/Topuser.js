// src/components/Topuser.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Topuser = () => {
    const [topUsers, setTopu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchu = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
              
                setTopu(response.data.slice(0, 5));
            } catch (error) {
                console.error("Error fetching:", error);
                setError("Failed to fetch top users.");
            }
        };

        fetchu();
    }, []);

    return (
        <div>
            <h1>Top Users</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {topUsers.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Topuser;