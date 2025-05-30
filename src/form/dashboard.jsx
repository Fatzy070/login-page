import { useNavigate } from "react-router-dom";
import fakeUser from "../data/fakeuser";
import fakePosts from "../data/fakepost";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isloggedin");
    navigate("/");
  };

  return (
    <div className="min-h-[100dvh] bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        {/* User Info */}
        <div className="text-center">
          <img
            src={fakeUser.avatar}
            alt={fakeUser.name}
            className="rounded-full w-24 h-24 mx-auto mb-4 shadow-md"
          />
          <h1 className="text-3xl font-bold capitalize text-indigo-600">
            Welcome, {fakeUser.name}
          </h1>
          <p className="text-gray-600 italic">{fakeUser.bio}</p>
        </div>

        {/* User Posts */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">📝 Your Posts</h2>
          <ul className="space-y-4">
            {fakeUser.posts.map((post) => (
              <li
                key={post.id}
                className="bg-indigo-50 p-4 rounded-lg shadow-sm space-y-1"
              >
                <p className="text-lg font-semibold text-indigo-700">
                  {post.title}
                </p>
                <p className="text-sm font-medium text-gray-600">{post.date}</p>
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    className="text-indigo-500 hover:underline text-sm"
                  >
                    Visit →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📌 Recent Posts
          </h2>
          <div className="space-y-4">
            {fakePosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-700 mt-1">{post.body}</p>
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    className="text-blue-500 underline mt-2 inline-block"
                  >
                    Read More →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="text-center pt-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
