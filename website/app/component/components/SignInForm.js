"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function CredentialsLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapping error codes to friendly messages
  const errorMessages = {
    CredentialsSignin: "Invalid email or password.",
    "Account exists via OAuth. Please use social login.": "Account exists via social login. Please sign in using Google, GitHub, or LinkedIn.",
    "No account found. Please sign up first.": "No account found. Please sign up first.",
    "Unexpected error": "An unexpected error occurred. Please try again.",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Clear any previous error messages

    // Basic validation for empty fields
    if (!email || !password) {
      setIsSubmitting(false);
      setErrorMessage("Both fields are required.");
      return;
    }

    // Attempt to sign in using credentials
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      mode: 'login',
    });

    setIsSubmitting(false);

    // Log the response to understand the error
    console.log("SignIn response:", res);

    // Handle error scenarios based on response
    if (res?.error) {
      let errorText = res.error;

      // Try to extract the message from error response
      try {
        const parsed = JSON.parse(res.error);
        if (parsed?.message) {
          errorText = parsed.message; // Use the message from the response if available
        }
      } catch (e) {
        // If the error is not JSON, keep the original error
      }

      // Extract the content of the error message and map it to a friendly message
      const friendlyMsg = errorMessages[errorText] || errorText || errorMessages["Unexpected error"];
      setErrorMessage(friendlyMsg);
    } else {
      // Clear the form fields on successful login
      setEmail("");
      setPassword("");
      window.location.href = "/HeroPage"; // Redirect to the home page
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {errorMessage && (
        <div className="text-red-600 text-sm mb-3 border border-red-200 bg-red-50 p-2 rounded text-center">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md flex justify-center items-center"
        disabled={isSubmitting}  // Disable button while submitting
      >
        {isSubmitting ? (
          <span className="loader">Signing In...</span>  // Add a loading spinner here if desired
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
}
