"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon, XIcon } from "@heroicons/react/solid";
import { db, storage } from "@/firebase";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InputBox() {
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imagePost, setImagePost] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const sendPost = async (e) => {
        e.preventDefault();
    
        if (!inputRef.current.value) return;
    
        try {
            // Add document to Firestore and get the reference
            const docRef = await addDoc(collection(db, "posts"), {
                message: inputRef.current.value,
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,
                timestamp: serverTimestamp(),
                postImage: "",
            })
                // If there's an image to upload, handle it to Firebase Storage
                if (imagePost) {
                    const postRef = ref(storage, `posts/${docRef.id}`); // Storage reference
                    await uploadString(postRef, imagePost, "data_url"); // Upload image
                    const imageUrl = await getDownloadURL(postRef); // Get the download URL for the uploaded image
                    await updateDoc(doc(db, "posts", docRef.id), { // Step 3: Update the Firestore document with the image URL
                        postImage: imageUrl
                    });
                }

            inputRef.current.value = ""; // Clear input field after sending
            setImagePost(null);    
            setShowModal(false);

        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImagePost(readerEvent.target.result);
        }
    };

    const removeImage = () => {
        setImagePost(null);
    };

  return (
    <>
    <div className="bg-white p-2 mb-6 rounded-2xl shadow-md tex-gray-500 font-medium mt-3">
        <div className='flex space-x-4 p-4 items-center'>
            {session?.user && (
                <Image 
                className='rounded-full object-cover'
                src={session.user.image}
                width={40}
                height={40}
                alt="profile image"
                />
            )}

            <form
                onClick={() => setShowModal(true)} 
                className='flex flex-1'>
                {session?.user && (
                <input 
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none cursor-pointer"
                    type="" 
                    readOnly
                    placeholder={`What's on your mind, ${session.user.name}?`} 
                    ref={inputRef}
                />
                )}
            </form>
        </div>

        <div className="flex justify-evenly items-center pt-1 border-t border-[rgba(204,204,204,1)]">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div 
                onClick={() => setShowModal(true)}
                className="inputIcon">
                <CameraIcon className="h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300"/>
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
            </div>
        </div>
    </div>

    {/* Modal for creating a new post */}
    {showModal && (
        <div className="fixed inset-0 z-20000 flex justify-center items-center bg-black/60 border-1 border-gray-300">
            <div className={`relative bg-white rounded-xl p-6 ${!imagePost ? "w-full max-w-xl" : "w-fit"} custom-shadow`}>
                <h2 className="text-xl font-bold flex justify-center">Create post</h2>
                <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="absolute right-2 top-4"
                >
                    <XIcon className="icon" />
                </button>
                <hr className="mt-5 w-[100%] text-gray-300" />
    
                <div className="flex justify-start mt-3">
                    <div className="flex items-center justify-center p-1 mr-2">
                        {session?.user && (
                        <Image 
                            className='rounded-full object-contain'
                            src={session.user.image}
                            width={40}
                            height={40}
                            alt="profile image"
                        />
                        )}
                    </div>
                    <div className="flex flex-col items-start">
                    {session?.user && (
                        <p className="font-semibold text-md">{session.user.name}</p>
                    )}
                        <div className="font-semibold text-sm rounded-md bg-gray-200">    
                            <select className="px-1 border-gray-700">
                                <option>Public</option>
                                <option>Friends</option>
                                <option>Only me</option>
                            </select>
                        </div>
                    </div>
                </div>

                <form onSubmit={sendPost}>
                    <div className="mt-2">
                        <textarea 
                            className="w-full p-2 resize-none border-none outline-none text-mg "
                            ref={inputRef}
                            placeholder={`What's on your mind, ${session.user.name}`}
                            rows={4}
                        ></textarea>
                    </div>

                    {imagePost && (
                        <div className="relative my-2 p-2 mx-auto w-fit rounded-xl custom-shadow border-1 border-gray-300">
                            <Image 
                                className="object-contain rounded-xl"
                                src={imagePost} 
                                width={300}
                                height={300}
                                alt="image preview"
                            />
                            <button type="button" onClick={removeImage} className="absolute right-1 top-2"><XIcon className="icon" /></button>
                        </div>
                    )}

                    <div 
                        onClick={() => filepickerRef.current.click()}
                        className="inputIcon my-3 custom-shadow border-1 border-gray-300">
                        <CameraIcon className="h-7 text-green-400"/>
                        <p className="text-base">Add photo to your post</p>
                        <input 
                            type="file"
                            onChange={addImage} 
                            ref={filepickerRef}
                            hidden
                        />
                    </div>

                    <button
                        onSubmit={sendPost}
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-400 cursor-pointer"
                    >
                        Post
                    </button>
                    
                </form>
            </div>
        </div>
    )}
    </>
  )
}

export default InputBox;