from .FindRemovedSongs import findRemovedSongs
from .Playlist import Playlist
from .PostgresContext import postPlaylist, getPlaylist

urlPrefix = 'https://www.youtube.com/playlist?list='


def populatePlaylist(url):
    playlist = Playlist(url, urlPrefix + url)
    postPlaylist(url, playlist.videos)
    playlist_past = getPlaylist(url)
    playlist_current = playlist.videos
    removed_songs_playlist = findRemovedSongs(playlist_past, playlist_current)
    return removed_songs_playlist
