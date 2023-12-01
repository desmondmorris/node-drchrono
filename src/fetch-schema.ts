import fs from "fs";
import path from "path";

const SCHEMA_URL = "https://app.drchrono.com/openapi-schema";
const SCHEMA_DEST_PATH = path.join(__dirname, "../openapi-schema.json");

interface OpenApiSchema {
  paths: {
    [key: string]: {
      get: {
        parameters: {
          in: string;
          name: string;
          required: boolean;
          schema: {
            description: string;
            title: string;
            type: string;
          };
        }[];
      };
    };
  };
}

export const fetchSchema = async (schemaUrl: string = SCHEMA_URL) => {
  const response = await fetch(schemaUrl);
  const spec = await response.text();
  return spec;
};

export const fixSchemaProblems = (schema: string) => {
  let fixedSchema = schema
    .replace(/\"bool\"/g, '"boolean"')
    .replace(/\"data\"/g, '"results"');

  const parsed = JSON.parse(fixedSchema) as OpenApiSchema;

  for (let path in parsed.paths) {
    for (let method in parsed.paths[path]) {
      if (method !== "get") continue;
      parsed.paths[path][method].parameters.push({
        in: "query",
        name: "verbose",
        required: false,
        schema: {
          description:
            "If true, return additional information about the objects returned.s",
          title: "verbose",
          type: "integer",
        },
      });
    }
  }

  return JSON.stringify(parsed);
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
