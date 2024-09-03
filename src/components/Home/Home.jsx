import { useNavigate } from "react-router-dom";
import { useGetPostQuery } from "../../redux/features/api/baseApi";

const Home = () => {
  const { data: PostData, isLoading, error } = useGetPostQuery();

  const navigate = useNavigate();

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      {PostData.map((post) => (
        <div
          onClick={() => navigate(`/post/${post?.id}`)}
          key={post.id}
          className="mb-6 p-4 border rounded shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
