from datetime import date
from sqlalchemy import *
from pathlib import Path
from datetime import datetime
import yaml
import json

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

playlists = Table("playlists",
                  metadata,
                  autoload=True,
                  autoload_with=engine)


def postPlaylist(url, videos):
    stmt = insert(playlists).values(
        url=url, videos=json.dumps(videos), createdAt=datetime.now())
    connection.execute(stmt)


def getPlaylist(url):
    subquery = select(func.min(playlists.columns.createdAt)
                      ).where(playlists.columns.url == url)
    stmt = select([playlists]).where(and_(playlists.columns.url == url,
                                          playlists.columns.createdAt ==
                                          subquery.scalar_subquery()))
    result = connection.execute(stmt).first()
    return json.loads(result[0])
