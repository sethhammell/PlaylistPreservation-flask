import { TextField } from "@mui/material";
import React, { useState } from "react";

function Home() {
  const [url, setUrl] = useState("");

  function updateUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <div>
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
