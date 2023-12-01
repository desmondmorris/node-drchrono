import fs from "fs";
import path from "path";

const SCHEMA_URL = "https://app.drchrono.com/openapi-schema";
const SCHEMA_DEST_PATH = path.join(__dirname, "../openapi-schema.json");

export const fetchSchema = async (schemaUrl: string = SCHEMA_URL) => {
  const response = await fetch(schemaUrl);
  const spec = await response.text();
  return spec;
};

export const fixSchemaProblems = (schema: string) => {
  let fixedSchema = schema
    .replace(/\"bool\"/g, '"boolean"')
    .replace(/\"data\"/g, '"results"');

  return fixedSchema;
};

export const saveSchema = (schema: string, dest: string = SCHEMA_DEST_PATH) => {
  fs.writeFileSync(dest, schema);
};

if (require.main === module) {
  fetchSchema()
    .then((schema: string) => {
      const fixedSchema = fixSchemaProblems(schema);
      saveSchema(fixedSchema);
    })
    .catch(console.error);
}
