"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function Login() {
    return (
        <div className="bg-[rgb(242,244,247)] w-screen h-[92vh] flex items-center justify-center">
            <div className="flex items-center justify-center mx-10 gap-30 w-full max-w-[90%]
                    max-[970px]:flex-col 
                    max-[970px]:justify-center 
                    max-[970px]:space-x-0 
                    max-[970px]:text-center">
                <div className="flex flex-col justify-center w-[570px] space-y-8 
                    max-[1123px]:w-[400px]
                    max-[970px]:mb-1
                    max-[970px]:items-center">
                    <Image
                        src={"/assets/images/icons/fb-text-logo.png"}
                        width={250}
                        height={250}
                        alt="facebook text logo"
                    />
                    <p className="text-3xl max-[1123px]:text-2xl">Facebook helps you connect and share with the people in your life.</p>
                </div>

                <div className="flex items-center justify-center">
                    <button 
                        onClick={() => signIn("facebook", { callbackUrl: "/" })}
                        className="p-5 bg-blue-500 rounded-xl w-[350px] text-white text-center text-2xl font-bold cursor-pointer">
                        Login with Facebook
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Login;