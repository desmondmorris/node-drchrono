# DrChrono

This is a client library generated using the openapi-typescript-codegen tool for the DrChrono API.

## Installation

To install the DrChrono library, you can use npm:

```shell
npm install drchrono
```

## Usage

Here's an example of how you can use the DrChrono library in your JavaScript project:

```javascript
const { DrChronoClient } = require("drchrono");

// Create a new instance of the DrChronoClient
const client = new DrChronoClient({
  token: YOUR_API_TOKEN,
});

// Make API requests using the client
async function fetchPatients() {
  try {
    const patients = await client.clinical.patientsList({});
    console.log(patients);
  } catch (error) {
    console.error(error);
  }
}

fetchPatients();
```

## Configuration

The DrChrono library requires the OpenAPI specification file (openapi-schema.json) to be present in your project directory. Make sure you have the latest version of the OpenAPI specification file for the DrChrono API.

## Documentation

For detailed documentation on the DrChrono API and the available endpoints, please refer to the official DrChrono API documentation.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.
