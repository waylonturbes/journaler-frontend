import React, { useState } from "react";

interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="auth-form p-10 mx-auto h-fit flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="pb-2 flex flex-col">
        <label htmlFor="username" className="text-left text-lg pb-1">
          Username:
        </label>
        <input
          className="input"
          type="text"
          value={credentials.username}
          id="username"
          name="username"
          onChange={handleInputs}
        />
      </div>
      <div className="py-2 flex flex-col">
        <label htmlFor="password" className="text-left text-lg pb-1">
          Password:
        </label>
        <input
          className="input"
          type="text"
          value={credentials.password}
          id="password"
          name="password"
          onChange={handleInputs}
        />
      </div>
      <p className="sub-text text-left pb-2">
        Don't have an account?{" "}
        <a
          href="#username"
          className="text-teal-500 underline underline-offset-2 ease-out duration-100 hover:text-teal-800 hover:drop-shadow-lg shadow-teal-200"
        >
          Register here
        </a>
      </p>
      <div>
        <button className="btn-primary w-full p-3 text-xl">Login</button>
      </div>
    </form>
  );
};

export default Login;
