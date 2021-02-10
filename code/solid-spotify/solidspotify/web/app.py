import pprint
from rdflib import Graph, URIRef, Literal
from rdflib.namespace import CSVW, DC, DCAT, DCTERMS, DOAP, FOAF, ODRL2, ORG, OWL, PROF, PROV, RDF, RDFS, SDO, SH, SKOS, SOSA, SSN, TIME, VOID, XMLNS, XSD

from flask import Flask, render_template
from solidspotify.util.enums.http import HTTPMethod

from solidspotify.modules.solid.client import client
tracks = client.fetch('http://localhost:3000/solid-spotify/recent_tracks.ttl')
# print(tracks)


g = Graph()
g.parse('http://localhost:3000/solid-spotify/recent_tracks.ttl', format="turtle")
# print(g.serialize(format="turtle").decode("utf-8"))
# 1. Find all RDF.type = SDO.MusicRecording O(N)
# 2. Get for each all their triples 0(N)
#
#
#
#
for s, p, o in g.triples((None, RDF.type, SDO.MusicRecording)):
    print("{} is a track".format(s))

# for stmt in g:
#     pprint.pprint(stmt)


# put_response = client.fetch('http://localhost:3000/test/test.ttl',
# method = HTTPMethod.PUT, body = '<ex:s> <ex:p> <ex:o>.')

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', name='Index')
