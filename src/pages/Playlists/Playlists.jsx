import React, {useState, useEffect} from "react";
import "./playlists.css";

import axios from "axios";

// api
import {mongoServer} from "../../api/apiUrl";

const Playlists = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // start loading

  useEffect(() => {
    axios.get(`${mongoServer}/playlists`).then(res => {
      console.log(res.data);
      setData(res.data); // grab data
      setLoading(false); // stop loading
    });

    // cleanup
    return () => {
      setData([]);
      setLoading(true);
    };
  }, []);
  return (
    <div className="playlist-container">
      <h3 style={{textAlign: "center"}}>Your Playlist</h3>
      {/* map through data and render UI */}
      {data.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
        </div>
      ))}
      <h4></h4>
    </div>
  );
};

export default Playlists;
