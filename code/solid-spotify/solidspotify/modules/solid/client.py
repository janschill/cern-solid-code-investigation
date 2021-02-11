import requests
from solidspotify.util.enums.http import HTTPMethod


class Client:
    def __init__(self):
        print('client')

    def fetch(self, resourceUrl, method=HTTPMethod.GET, headers={}, body=''):
        if method == HTTPMethod.PUT:
            if headers.get('content-type') is None:
                headers['content-type'] = 'text/turtle'

            return requests.put(resourceUrl, headers=headers, data=body)

        return requests.get(resourceUrl).text


client = Client()
