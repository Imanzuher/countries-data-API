// import { useState, useEffect } from "react";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Home />
      <h1>hello</h1>
    </div>
  );
  // const [users, setUsers] = useState([]);

  // const API_END_POINT = `https://restcountries.com/v3.1/all`;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(API_END_POINT);
  //       const data = await res.json();
  //       setUsers(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [API_END_POINT]);

  // return (
  //   <div className="App">
  //     {users.map((user) => {
  //       return <div>{user.name.common}</div>;
  //     })}
  //   </div>
  // );
}

export default App;
