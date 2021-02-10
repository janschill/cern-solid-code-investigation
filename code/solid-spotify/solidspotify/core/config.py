import os
from dotenv import load_dotenv
load_dotenv()

SOLID_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SOLID_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
