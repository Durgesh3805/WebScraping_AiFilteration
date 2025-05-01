// File: app/Password/page.js

import PasswordComponent from '../component/components/PasswordComponent'; // Import the PasswordComponent directly
import Head from 'next/head';

export default function SetPasswordPage() {
  return (
    <>
      <Head>
        <title>Set Your Password</title>
      </Head>

      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <PasswordComponent /> {/* Render the PasswordComponent here */}
      </div>
    </>
  );
}
