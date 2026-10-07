"use client";
import Container from "@/components/Container";
// import axios from "axios";
import { useState } from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // const data = axios({
        //     url: "http://localhost:3004/login",
        //     method: "POST",
        //     data: {
        //         username: userName,
        //         password: password
        //     }
        // })

        const response = {
            token: "ssdkjf3kjkljef8se8ejf8ef8sjef",
            expire: 7,
        }

        Cookie.set("token", response.token, {expires: response.expire});
        redirect("/dashboard");
    }
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center w-96 mx-auto gap-y-2 mt-5 ">
          <input 
            type="text" 
            placeholder="Username" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
