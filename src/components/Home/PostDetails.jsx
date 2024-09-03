import React from "react";
import { useGetPostByIdQuery } from "../../redux/features/api/baseApi";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const params = useParams();

  const { data: postDetails, isLoading, error } = useGetPostByIdQuery(params.id);

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="p-6 border rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{postDetails?.title}</h1>
        <p className="text-gray-700">{postDetails?.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
