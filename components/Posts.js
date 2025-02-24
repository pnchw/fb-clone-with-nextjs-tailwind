"use client";

import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore';
import { db } from "@/firebase";
import Post from "./Post";

function Posts() {
    const postsQuery = query(collection(db, "posts"), orderBy("timestamp","desc"));
    const [realTimePosts, loading, error] = useCollection(postsQuery);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

  return (
    <div>
        {realTimePosts?.docs.map(post => (
            <Post 
                key={post.id} 
                name={post.data().name}
                email={post.data().email}
                message={post.data().message}
                image={post.data().image}
                timestamp={post.data().timestamp}
                postImage={post.data().postImage}
            />
        ))}

        <div className="flex items-center justify-center my-10">
          <button className="text-gray-500 px-5 py-2 border-1 border-gray-400 rounded-xl cursor-pointer">Load More</button>
        </div>
    </div>
  )
}

export default Posts;