import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  const { name } = authInfo;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
