import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Scholar UI</title>
        <meta name="description" content="Google Scholar-inspired UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-800">Scholar</div>
          <nav className="space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">Home</a>
            <a href="#" className="hover:text-gray-800">Library</a>
            <a href="#" className="hover:text-gray-800">My Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-10">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Search Articles</h1>
          <form>
            <input
              type="text"
              placeholder="Search scholarly articles"
              className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-10">
        <div className="container mx-auto px-4 py-6 text-gray-600">
          © {new Date().getFullYear()} Scholar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}