import React from "react";

function Leaderboard({ influencers }) {
  if (influencers.length < 3) return null;

  const [first, second, third] = influencers;

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        <div className="leaderboard-card rank-2">
          {second.name} <br /> {second.influenceiq_score} points
        </div>
        <div className="leaderboard-card rank-1">
          {first.name} <br /> {first.influenceiq_score} points
        </div>
        <div className="leaderboard-card rank-3">
          {third.name} <br /> {third.influenceiq_score} points
        </div>
      </div>

      <div className="influencers-container">
        {influencers.slice(3).map((inf, index) => (
          <div key={index} className="influencer-card">
            <h2>{inf.name}</h2>
            <p>{inf.text}</p>
            <p><strong>Emotion:</strong> {inf.emotion}</p>
            <p><strong>Credibility:</strong> {inf.credibility_score}</p>
            <p><strong>InfluenceIQ:</strong> {inf.influenceiq_score}</p>
            <p><strong>News:</strong> {inf.news}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
