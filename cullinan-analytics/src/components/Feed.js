// src/components/Feed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error", error);
                setError("Failed to fetch posts. Please try again later.");
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;