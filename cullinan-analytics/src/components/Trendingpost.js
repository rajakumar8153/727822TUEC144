// src/components/Trendingpost.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trendingpost = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ftrending = async () => {
            try {
                // Fetch posts
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const posts = res.data;

                // Fetch comments
                const cres = await axios.get('https://jsonplaceholder.typicode.com/comments');
                const comments = cres.data;

                // Count comments for each post
                const postcresponse = posts.map(post => {
                    const commentCount = comments.filter(comment => comment.postId === post.id).length;
                    return { ...post, commentCount };
                });

               
                const sortedTrendingPosts = postcresponse.sort((a, b) => b.commentCount - a.commentCount).slice(0, 5);
                setTrendingPosts(sortedTrendingPosts);
            } catch (error) {
                console.error("Error :", error);
                setError("Failed try again later.");
            }
        };

        ftrending();
    }, []);

    return (
        <div>
            <h1>Trending Posts</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {trendingPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>Comments: {post.commentCount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Trendingpost;