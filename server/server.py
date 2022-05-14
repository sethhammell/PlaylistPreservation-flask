from flask import Flask, jsonify
from flask_cors import CORS
from playlist import populatePlaylist

app = Flask(__name__)
CORS(app)


@app.route("/api/playlists")
def playlists():
    playlist = populatePlaylist(
        "https://www.youtube.com/playlist?list=PLQpvjd7YxOqTQtt4Vj7nhGF5ST4YGkQvR")
    return jsonify(playlist.videos)


if __name__ == "__main__":
    app.run(debug=True)
