
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <p className="text-lg text-white">Page Not Found</p>
      <a href="/product" className="mt-6 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition duration-200">Go Back Home</a>
    </div>
  );
}

export default NotFoundPage;
