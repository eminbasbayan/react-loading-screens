import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="container">
      <Sidebar isLoading={isLoading} />
      <div className="home">
        <Topbar isLoading={isLoading} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
