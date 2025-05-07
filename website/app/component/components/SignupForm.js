"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function EmployerSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Friendly error messages mapping
  const errorMessages = {
    "Account already exists": "An account with this email already exists. Please log in instead.",
    "Invalid email format": "Please enter a valid email address.",
    "All fields required": "Please fill in all required fields.",
    "Passwords mismatch": "Passwords do not match.",
    "Unexpected error": "Something went wrong. Please try again.",
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage("");

  // Frontend validation
  if (!name || !email || !password || !confirmPassword) {
    setErrorMessage(errorMessages["All fields required"]);
    return;
  }

  if (!validateEmail(email)) {
    setErrorMessage(errorMessages["Invalid email format"]);
    return;
  }

  if (password !== confirmPassword) {
    setErrorMessage(errorMessages["Passwords mismatch"]);
    return;
  }

  setIsSubmitting(true);

  const res = await signIn("credentials", {
    redirect: false,
    name,
    email,
    password,
    callbackUrl: "/Login",
    mode: 'signup',
  });

  setIsSubmitting(false);

  if (res?.error) {
    let errorText = res.error;

    // Try parsing JSON error from backend
    try {
      const parsed = JSON.parse(res.error);
      if (parsed?.message) {
        errorText = parsed.message;
      }
    } catch (e) {
      // Not JSON → keep raw
    }

    const friendlyMsg = errorMessages[errorText] || errorText || errorMessages["Unexpected error"];
    setErrorMessage(friendlyMsg);
  } else {
    window.location.href = "/Login";
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4"> {/* Reduced gap slightly */}
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Min 8 alphanumeric characters"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="flex items-center justify-end mt-1">
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

      <div>
        <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {errorMessage && (
        <div className="text-red-600 text-sm border border-red-200 bg-red-50 p-2 rounded text-center">
          {errorMessage}
        </div>
      )}

      <p className="text-sm text-gray-600 mt-1">
        Already have an account?{" "}
        <a href="/Login" className="text-blue-600 hover:underline">
          Log in
        </a>
      </p>

      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center text-base transition-transform active:scale-95 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
}
