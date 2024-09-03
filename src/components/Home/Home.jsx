import { useNavigate } from "react-router-dom";
import { useGetPostQuery } from "../../redux/features/api/baseApi";
import { useForm } from "react-hook-form";

const Home = () => {
  const { data: PostData, isLoading, error } = useGetPostQuery();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
          <div className="flex items-center">
            <input
              {...register("postTitle")}
              type="text"
              placeholder="Enter post title"
              className="border p-2 rounded mr-2 flex-grow"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Add
            </button>
          </div>
        </form>

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
    </>
  );
};

export default Home;
