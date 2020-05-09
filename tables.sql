-- CREATE TABLE IF NOT EXISTS userDb(
-- userid SERIAL PRIMARY KEY,
-- username TEXT UNIQUE,
-- password TEXT,
-- profilePic TEXT
-- );

CREATE TABLE IF NOT EXISTS reviewsDb(
reviewid SERIAL PRIMARY KEY,
message TEXT,
postdate TIMESTAMP,
userid INTEGER,
venueid INTEGER
);

-- CREATE TABLE IF NOT EXISTS venuesDb(
-- venueid SERIAL PRIMARY KEY,
-- name TEXT,
-- description TEXT,
-- location TEXT,
-- img TEXT
-- );

