'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PasswordComponent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('/api/set-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),   // ✅ Only sending password
      });

      if (res.ok) {
        setError('Password has been successfully set!');
        // ✅ Optional redirect after success
        setTimeout(() => {
          window.location.href = '/Login'; // Change to your dashboard/home page
        }, 2000);
      } else {
        const data = await res.json();
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error occurred:', err);
      setError('Error occurred.');
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center relative">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={180} height={50} priority />
      </div>

      <div className="w-full max-w-md mx-auto p-6 sm:p-8 md:p-12 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">Set Your Password</h1>
        <p className="text-gray-600 text-lg mb-8 text-left">Complete your registration process!</p>

        {error && (
          <p className={`${error.includes('successfully') ? 'text-green-500' : 'text-red-500'} mb-4 text-left`}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2 text-left">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 alphanumeric characters"
              minLength={8}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Show Password toggle */}
          <div className="flex items-center justify-end mt-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Show Password
            </label>
          </div>

          {/* Confirm Password input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2 text-left">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center text-base transition-transform active:scale-95"
          >
            Set Password
          </button>

          {/* Terms and Privacy */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              By setting your password, you agree to the{' '}
              <Link href="/terms" className="text-blue-500 hover:text-blue-700">
                Terms of Use
              </Link>{' '}
              &{' '}
              <Link href="/privacy" className="text-blue-500 hover:text-blue-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
