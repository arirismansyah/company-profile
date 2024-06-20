CREATE TABLE "public"."company_attribute" (
  id SERIAL PRIMARY KEY NOT NULL,
  attribute_name VARCHAR(255),
  attribute_value TEXT
);

CREATE TABLE "public"."services" (
  id SERIAL PRIMARY KEY NOT NULL,
  service_name VARCHAR(255),
  service_desc TEXT,
  service_icon VARCHAR(255),
  service_demo_link VARCHAR(255),
  service_price INTEGER,
  service_preview_link VARCHAR(255),
  service_unit VARCHAR(255),
);

CREATE TABLE "public"."projects" (
  id SERIAL PRIMARY KEY NOT NULL,
  project_name VARCHAR(255),
  project_desc TEXT
  project_desc TEXT
);

