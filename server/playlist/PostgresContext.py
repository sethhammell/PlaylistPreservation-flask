from datetime import date
import json
from sqlalchemy import *
from sqlalchemy.sql import select
from pathlib import Path
import yaml
from datetime import datetime

path = Path("config.yml")

with open(path, 'r') as stream:
    config = yaml.safe_load(stream)

creds = config["postgres_credientials"]
host = creds["host"]
port = creds["port"]
database = creds["database"]
user = creds["user"]
password = creds["password"]

connstr = f"postgresql://{user}:{password}@{host}/{database}"
engine = create_engine(connstr)
connection = engine.connect()
metadata = MetaData()

# playlists = Table("playlists", metadata,
#                   Column('url', Text, primary_key=True),
#                   Column('videos', json, nullable=False),
#                   Column('createdAt', date, nullable=False)
#                   )

playlists = Table("playlists",
                  metadata,
                  autoload=True,
                  autoload_with=engine)

# metadata.create_all(playlists)


def postPlaylist(url, videos):
    stmt = insert(playlists).values(
        url=url, videos=json.dumps(videos), createdAt=datetime.now())
    connection.execute(stmt)


def getPlaylist(url):
    stmt = select([playlists]).where(playlists.columns.url == url)
    result = connection.execute(stmt)
    for row in result:
        print(row)
