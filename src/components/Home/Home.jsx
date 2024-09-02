import React from "react";
import { useGetPostsQuery } from "../../redux/service/api/baseUrl";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const Home = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {data.map((post) => (
        <div key={post.id} className="mb-6 p-4 border rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-2"> {post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
