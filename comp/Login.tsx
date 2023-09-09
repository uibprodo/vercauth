"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Login = () => {
  const [userCred, setUserCred] = useState({
    username: "",
    password: "",
  });

  const submit = async () => {
    await signIn('credentials', {
      username: userCred.username,
      password: userCred.password,
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        className="mb-5 text-black"
        onChange={(e) => setUserCred({ ...userCred, username: e.target.value })}
        value={userCred.username}
      />
      <input
        type="text"
        className="mb-5 text-black"
        onChange={(e) => setUserCred({ ...userCred, password: e.target.value })}
        value={userCred.password}
      />
      <button onClick={submit} className="bg-white text-black">Submit</button>
    </div>
  );
};

export default Login;
