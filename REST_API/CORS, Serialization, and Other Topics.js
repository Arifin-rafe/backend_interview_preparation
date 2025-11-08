// REST API - CORS, Serialization, and Other Topics
// 	77	What is CORS in RESTful APIs?

// 	CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers
// 	to restrict web pages from making requests to a domain different from the one that served the web page.
// 	CORS defines which origins are permitted to access resources from your API.

// 	78	How to remove CORS restriction on RESTful API?

// 	You can enable CORS in Node.js using the cors middleware package.

// 	79	What are serialization and deserialization?

// 	Serialization → converting an object or data structure into a format that can be easily 
// 	stored or transmitted (e.g., converting an object to JSON).
// 	Deserialization → converting that serialized data back into an object for use in code.

// 	80	What are the types of serialization?

// 	JSON serialization – Most common for REST APIs (JSON.stringify() / JSON.parse())
// 	XML serialization – Used in SOAP APIs or legacy systems.
// 	Binary serialization – Used for compact data transfer (e.g., Protocol Buffers, BSON).
// 	Custom serialization – Developer-defined format for specific use cases.

// 	81	How to serialize and deserialize in Node.js?

// 	In Node.js (and Express), JSON is most commonly used.
// 	// Serialization
// 	const obj = { name: "Rafe", age: 22 };
// 	const json = JSON.stringify(obj);

// 	// Deserialization
// 	const parsed = JSON.parse(json);

// 	82	Explain the concept of versioning in RESTful APIs.
// 	API versioning is a way to manage changes in your API without breaking existing clients.

// 	83	What is an API document? What are the popular documentation formats?

// 	API documentation explains how to use the API — including available endpoints, request methods, parameters, and responses.
// 	Purpose:
// 	Helps developers integrate and test your API easily.
// 	Popular documentation formats/tools:
// 	Swagger / OpenAPI Specification – Most common (auto-generates docs).
// 	Postman Collections – For testing and sharing APIs.
// 	API Blueprint – Markdown-based format.
// 	RAML – RESTful API Modeling Language.

// 	84	What is the typical structure of a REST API project in Node?
// 	Benefits:
// 	Clear separation of concerns
// 	Easier maintenance
// 	Scalable and professional structure