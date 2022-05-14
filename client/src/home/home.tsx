import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function Home() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("/api/playlists")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

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
    </div>
  );
}

export default Home;
