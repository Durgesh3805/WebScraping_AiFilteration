// pages/index.js
import Head from 'next/head';
import UserForm from '../component/components/';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Create Developer Profile</title>
        <meta name="description" content="Create your developer profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
          <h1 className="text-2xl font-bold text-red-500">Developer Hub</h1>
        </div>
      </header>

      <main className="py-10">
        <UserForm />
      </main>
    </div>
  );
}