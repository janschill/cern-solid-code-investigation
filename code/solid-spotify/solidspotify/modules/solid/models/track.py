from solidspotify.modules.solid.models.solid import Solid, SDO, URIRef


class Track(Solid):
    def __init__(self, uri, name):
        self.uri = URIRef(uri)
        self.type = SDO.MusicRecording
        pass
