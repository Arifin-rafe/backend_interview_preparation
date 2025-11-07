// REST API - HTTP Methods and Status Codes

// 	72	What are HTTP verbs and HTTP methods?

// 	HTTP verbs (or methods) define the action a client wants to perform on a resource.
// 	Common verbs include GET, POST, PUT, PATCH, DELETE.
// 	They represent operations like read, create, update, and delete.
// 	They are the backbone of RESTful API communication.

// 	73	What are the GET, POST, PUT, and DELETE HTTP methods?

// 	GET: Retrieve data from the server (read-only).
// 	POST: Send data to create a new resource.
// 	PUT: Update or replace an existing resource.
// 	DELETE: Remove a resource from the server.

// 	74	What is the difference between the PUT and PATCH methods?

// 	PUT replaces the entire resource with new data.
// 	PATCH updates only specific fields of a resource.
// 	Example: PUT sends full user data; PATCH updates just the email.
// 	PUT is complete replacement, PATCH is partial update.

// 	75	Explain the concept of idempotent in RESTful API.

// 	An idempotent operation gives the same result no matter how many times it’s repeated.
// 	Example: calling DELETE /user/1 multiple times still results in the same state (user removed).
// 	Methods like GET, PUT, and DELETE are idempotent.
// 	This ensures reliability and consistency in APIs.

// 	76	What is the role of status codes in RESTful APIs?

// 	Status codes show the result of an HTTP request.
// 	They help the client understand success, failure, or errors.
// 	Examples: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.
// 	They make debugging and client-server communication clear.