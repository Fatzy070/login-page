import { useState } from "react";
import fakeUser from "../data/fakeuser"
import { useNavigate } from "react-router-dom";

let Login = () => {
    const [email , setEmail] = useState("")
    const [error , setError]  = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === fakeUser.email && password === fakeUser.password ) {
            localStorage.setItem("isloggedin" , "true")
            navigate('/dashboard');
        }else {
            setError('invalid email or password ❌')
        }
    }

    return ( <>
        <div className="flex justify-center h-[100dvh] items-center">
            <form action="" onSubmit={handleSubmit}>
                <h2 className="text-center text-3xl uppercase font-bold text-pretty text-indigo-400">login</h2>
                {error && <p>{error}</p>}

                <div className="mb-4">
                    <label htmlFor="" className="font-semibold">Email:</label> <br />
                    <input type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     className="border outline-none h-8 px-2"
                    />
                </div>
                <div>
                    <label htmlFor="" className="font-semibold">Password:</label><br />
                    <input type="text"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                   className="border outline-none h-8 px-2"
                     />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="mt-6 bg-amber-800 font-semibold capitalize text-white px-4 py-2 rounded">
                    login
                </button>
                </div>
            </form>
        </div>
    </>)
}
export default Login