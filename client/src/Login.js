import React from "react";

function Login() {
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}></form>
    </div>
  );
}

export default Login;
