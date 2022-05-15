import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function Home() {
  const api = "/api/playlists/";
  const searchString = "list=";
  const [url, setUrl] = useState("");

  useEffect(() => {}, []);

  function fetchRemovedVideos() {
    const index = url.indexOf(searchString) + searchString.length;

    // -1 + 5 = 4
    if (index === 4) return;
    
    const id = url.substring(index, url.length)
    console.log(encodeURIComponent(id))
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
      <TextField
        value={url}
        onChange={updateUrl}
        autoFocus
        margin="dense"
        label="Playlist URL"
      />
      <Button variant="contained" onClick={fetchRemovedVideos}>
        Fetch
      </Button>
    </div>
  );
}

export default Home;
