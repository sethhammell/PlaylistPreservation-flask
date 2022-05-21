import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import "./home.css";
import HomeTable from "./homeTable";

function Home() {
  const api = "/api/playlists/";
  const searchString = "list=";
  const [url, setUrl] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [videos, setVideos] = useState([]);

  function fetchRemovedVideos() {
    const index = url.indexOf(searchString) + searchString.length;

    // -1 + 5 = 4
    if (index === 4) return;

    const id = url.substring(index, url.length);
    fetch(`${api}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShowTable(true);
        setVideos(data);
      });
  }

  function updateUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  const table = () => {
    if (!showTable) return null;

    return (
      <div className="home-table-container">
        <HomeTable videos={videos} url={url} />
      </div>
    );
  };

  return (
    <div>
      {/* drop down of actions: print all videos, blocked videos, scrape wayback */}
      <div className="header-wrapper">
        <Card className="welcome-header">Playlist Preservation</Card>
      </div>
      <div className="input">
        <div className="url">
          <TextField
            className="url-field"
            value={url}
            onChange={updateUrl}
            autoFocus
            label="Playlist URL"
          />
        </div>
        <Button variant="contained" onClick={fetchRemovedVideos}>
          Find Removed Videos
        </Button>
      </div>
      {table()}
    </div>
  );
}

export default Home;
