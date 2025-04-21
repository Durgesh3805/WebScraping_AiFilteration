"use client";
import { signIn } from 'next-auth/react';

export default function SocialLogin() {
    return (
        <>
            {/* Social Login Section */}
            <div className="my-6 flex items-center justify-center">
                <span className="text-gray-500">or</span>
            </div>
        
            <div className="space-y-4">
                <button
                    onClick={() => signIn("google")}
                    className="w-full border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-100">
                        <img src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
                    Continue with Google
                </button>
        
                <button
                    onClick={() => signIn("github")}
                    className="w-full border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-100">
                    <img src="/github-icon.svg" alt="GitHub" width={20} height={20} className="mr-2" />
                    Continue with GitHub
                </button>
        
                <button
                    onClick={() => signIn("linkedin")}
                    className="w-full border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-100">
                    <img src="/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} className="mr-2" />
                    Continue with LinkedIn
                </button>
            </div>
        </>
    );
}