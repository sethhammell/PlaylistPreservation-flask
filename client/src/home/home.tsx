import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import "./home.css";

function Home() {
  const api = "/api/playlists/";
  const searchString = "list=";
  const [url, setUrl] = useState("");

  function fetchRemovedVideos() {
    const index = url.indexOf(searchString) + searchString.length;

    // -1 + 5 = 4
    if (index === 4) return;

    const id = url.substring(index, url.length);
    console.log(encodeURIComponent(id));
    fetch(`${api}${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  function updateUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <div>
      {/* drop down of actions: print all videos, blocked videos, scrape wayback */}
      <div className="header-wrapper">
        <Card className="welcome-header">Playlist Preservation</Card>
      </div>
      <div className="input">
        <div className="url">
          <TextField
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
    </div>
  );
}

export default Home;
