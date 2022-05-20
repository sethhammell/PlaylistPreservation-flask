from flask import Flask, jsonify
from playlist import populatePlaylist

app = Flask(__name__)


@app.route("/api/playlists/<url>")
def playlists(url):
    playlist = populatePlaylist(url)
    return jsonify(playlist)


if __name__ == "__main__":
    app.run(debug=True)
