def findRemovedSongs(playlist_past, playlist_current):
    removed_songs_playlist = []

    for video in playlist_past:
        if (not (video[0], video[1]) in playlist_current):
            removed = True
            for current_video in playlist_current:
                if video[1] == current_video[1]:
                    removed = False
            if removed:
                removed_songs_playlist.append(video)

    return removed_songs_playlist
