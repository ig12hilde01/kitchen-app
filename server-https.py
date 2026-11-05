#!/usr/bin/env python3
"""Einfacher HTTPS-Server für die Kitchen App."""
import ssl, sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
handler = SimpleHTTPRequestHandler

httpd = HTTPServer(('0.0.0.0', 8443), handler)
ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ctx.load_cert_chain('cert.pem', 'key.pem')
httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)

print(f"https://localhost:8443")
print(f"https://192.168.166.78:8443 (WLAN)")
httpd.serve_forever()
