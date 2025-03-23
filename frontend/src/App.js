import React, { useEffect, useState } from "react";
import axios from "axios";
import Leaderboard from "./Leaderboard";
import './App.css';

function App() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/mock-influencers")
      .then((response) => {
        const sortedInfluencers = response.data.sort(
          (a, b) => b.influenceiq_score - a.influenceiq_score
        );
        setInfluencers(sortedInfluencers);
      })
      .catch((error) => console.error("Error fetching influencers:", error));
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">InfluenceIQ</h1>
      {influencers.length > 3 && <Leaderboard influencers={influencers} />}
    </div>
  );
}

export default App;
