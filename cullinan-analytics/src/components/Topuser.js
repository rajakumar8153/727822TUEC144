// src/components/Topuser.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Topuser = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://20.244.56.144/test/users');
            const users = response.data.users;

            const userPostCounts = await Promise.all(
                Object.keys(users).map(async (userId) => {
                    const postsResponse = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`);
                    return { userId, userName: users[userId], postCount: postsResponse.data.posts.length };
                })
            );

            const sortedUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
            setTopUsers(sortedUsers);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Top Users</h1>
            <ul>
                {topUsers.map(user => (
                    <li key={user.userId}>{user.userName}: {user.postCount} posts</li>
                ))}
            </ul>
        </div>
    );
};

export default Topuser;