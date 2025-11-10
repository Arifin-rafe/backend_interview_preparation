// REST API - Authentication and Authorization
// 	85	What are authentication and authorization?

// 	Authentication → Verifies who the user is (login process).
// 	Example: Checking email and password.
// 	Authorization → Decides what the user can access (permissions).
// 	Example: Admin can delete users, regular users cannot.

// 	86	What are the types of authentication in Node?

// 	Common types include:
// 	Basic Authentication (username & password in header)
// 	Token-based Authentication (JWT)
// 	Session-based Authentication (with cookies)
// 	OAuth2 (Google, Facebook login)
// 	API Key Authentication

// 	87	What is basic authentication?

// 	A simple method where the client sends a Base64 encoded username:password in the HTTP header.
// 	Example:
// 	Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

// 	88	What are the security risks associated with storing passwords as plain text in Node.js?

// 	If passwords are stored as plain text:
// 	Hackers can read all passwords if the database is compromised.
// 	Users who reuse passwords across sites become vulnerable.
// 	Violates security standards like OWASP and GDPR.

// 	89	What is the role of hashing and salt in securing passwords?

// 	Hashing → Converts a password into a fixed-length encrypted string (irreversible).
// 	Salt → Random data added to the password before hashing to make each hash unique (prevents rainbow table attacks).

// 	90	How can we create hash passwords in Node.js?

// 	const bcrypt = require("bcrypt");
// 	const saltRounds = 10;
// 	const password = "mypassword";
// 	const hashedPassword = await bcrypt.hash(password, saltRounds);
// 	console.log(hashedPassword);

// 	91	What is API key authentication?

// 	Each client gets a unique API key.
// 	The key is sent with each request (usually in headers or query string).
// 	The server verifies the key before processing the request.

// 	92	What is token-based authentication and JWT authentication?

// 	After a successful login, the server generates a token (JWT) and sends it to the client.
// 	The client includes this token in each subsequent request header for verification.

// 	93	What are the parts of the JWT token?

// 	Header → Token type & hashing algorithm (e.g., HS256)
// 	Payload → User data (e.g., id, role, email)
// 	Signature → Verifies that the token wasn’t tampered with

// 	94	Where does the JWT token reside in the request?

// 	Usually in the Authorization header:Authorization: Bearer <token>
// 	It can also be stored in:
// 	Cookies (for web apps)
// 	Local Storage (for frontends like React/Vue)
// 	Session Storage
// 	Best practice: Use HTTP-only cookies to prevent XSS attacks.