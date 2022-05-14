# from FindRemovedSongs import findRemovedSongs
# from FirebaseContext import postPlaylistsToFirebase, readPastPlaylistsFromFirebase
# from EmailResults import emailResults, sendEmail
from .Playlist import Playlist


def populatePlaylist(url):
    playlist = Playlist("Test", url)
    return playlist


# postPlaylistsToFirebase(playlists_current)
# playlists_past = readPastPlaylistsFromFirebase()

# removed_songs = findRemovedSongs(playlists_past, playlists_current)

# if (sendEmail(removed_songs)):
#     emailResults(removed_songs)
