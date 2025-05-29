import { useNavigate } from "react-router-dom";
import fakeUser from "../data/fakeuser";
import fakePosts from "../data/fakepost";

let Dashboard = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("isloggedin")
        navigate("/")
    }

        return <>
            <div className="text-center">
                <div>
                    <img src={fakeUser.avatar} alt={fakeUser.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                </div>
                <h1 className="font-semibold capitalize text-3xl">welcome {fakeUser.name}</h1>
                <p className="font-semibold text-gray-600">{fakeUser.bio}</p>

                <ul className="mt-7 mb-5">
                    {fakeUser.posts.map((post) => (
                        <li key={post.id}>
                            <p className="text-[1.2rem] font-semibold font-sans">{post.title}</p>
                            <p className="font-bold text-amber-700">{post.date}</p>
                            {post.link && 
                            <a href={post.link}
                            target="_blank"
                            className="text-purple-500 capitalize und"
                            >visit</a>
                            }
                        </li>
                    ))}
                </ul>
                <div>
                    <h2 className="text-xl font-semibold mb-3">📌 Recent Posts</h2>
        {fakePosts.map((post) => (
          <div key={post.id} className="border rounded p-3">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.body}</p>
            {post.link && (
              <a href={post.link} target="_blank" className="text-blue-500 underline mt-2 block">
                Read More →
              </a>
                            )
                            }
                        </div>
                    ))
                    }
                </div>
                <button 
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
            </div>
        </>
}
export default Dashboard
