from solidspotify.core.config import SOLID_CLIENT_ID, SOLID_CLIENT_SECRET
import spotipy
from spotipy.oauth2 import SpotifyOAuth


class Client:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.redirect_uri = 'http:localhost:5566'
        self.scope = "user-library-read user-read-currently-playing streaming user-read-playback-state user-read-recently-played"
        self.sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=self.client_id,
                                                            client_secret=self.client_secret,
                                                            redirect_uri=self.redirect_uri,
                                                            scope=self.scope))

    def last_50_tracks_played(self):
        return self.sp.current_user_recently_played(50)


client = Client(SOLID_CLIENT_ID, SOLID_CLIENT_SECRET)
