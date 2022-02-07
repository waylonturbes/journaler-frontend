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
    <form className="p-10 flex-auto mx-auto card" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="input"
          type="text"
          value={credentials.username}
          id="username"
          name="username"
          onChange={handleInputs}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="text"
          value={credentials.password}
          id="password"
          name="password"
          onChange={handleInputs}
        />
      </div>
      <div>
        <button className="btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default Login;
