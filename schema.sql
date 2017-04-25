DROP TABLE if exists light_type CASCADE;
DROP TABLE if exists light_options CASCADE;
DROP TABLE if exists water CASCADE;
DROP TABLE if exists plants CASCADE;

CREATE TABLE light_type (
  id SERIAL PRIMARY KEY UNIQUE,
  type TEXT
);

CREATE TABLE light_options (
  id SERIAL PRIMARY KEY UNIQUE,
  description TEXT,
  type_id INTEGER REFERENCES light_type
);

CREATE TABLE water (
  id SERIAL PRIMARY KEY UNIQUE,
  instruction TEXT,
  frequency TEXT
);

CREATE TABLE plants (
  id SERIAL PRIMARY KEY UNIQUE,
  botanical_name TEXT,
  english_name TEXT,
  care_link TEXT,
  image_url TEXT,
  light_id INTEGER REFERENCES light_type,
  water_id INTEGER REFERENCES water
);
