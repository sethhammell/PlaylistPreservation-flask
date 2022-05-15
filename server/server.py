from flask import Flask, jsonify, request
from playlist import populatePlaylist

app = Flask(__name__)
urlPrefix = 'https://www.youtube.com/playlist?list='


@app.route("/api/playlists/<url>")
def playlists(url):
    playlist = populatePlaylist(urlPrefix + url)
    return jsonify(playlist.videos)


if __name__ == "__main__":
    app.run(debug=True)
