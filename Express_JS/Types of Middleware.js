// Express Framework - Types of Middleware
// 	43	What are the types of middleware in Express.js?

// 	In Express.js, middleware functions are of several types:
// 	Application-level middleware – bound to the app object using app.use() or app.METHOD().
// 	Router-level middleware – bound to an instance of express.Router().
// 	Error-handling middleware – handles errors; defined with four parameters (err, req, res, next).
// 	Built-in middleware – provided by Express itself (e.g., express.json(), express.static()).
// 	Third-party middleware – external packages installed via npm (e.g., morgan, cors, body-parser).

// 	44	What is the difference between application-level and router-level middleware?

// 	Application-level is global. examples: app.use(express.json())
// 	Router-level is modular and route-specific. examples: router.use(authMiddleware)

// 	45	What is error-handling middleware and how to implement it?

// 	Error-handling middleware is used to catch and manage application errors.
// 	It has four parameters: (err, req, res, next).

// 	46	If you have five middlewares, then in which middleware will you do the error handling?

// 	Error handling should always be done in the last middleware.
// 	This ensures all previous middlewares and routes are executed first, 
// 	and any error they generate can be caught and handled properly at the end.

// 	47	What is built-in middleware? How to serve static files from Express.js?

// 	Built-in middleware is included with Express — no extra installation needed.
// 	Common built-in middleware:
// 	express.json() – Parses incoming JSON requests.
// 	express.urlencoded() – Parses URL-encoded form data.
// 	express.static() – Serves static files.

// 	48	What are third-party middleware? Give some examples.

// 	Third-party middleware are external npm packages that extend Express functionality.
// 	Examples:
// 	morgan – HTTP request logging.
// 	cors – Enables Cross-Origin Resource Sharing.
// 	cookie-parser – Parses cookies.
// 	helmet – Secures HTTP headers.

// 	49	Can you summarize all the types of middleware?
// 	| Type              | Description                               | Example                 |
// 	| ----------------- | ----------------------------------------- | ----------------------- |
// 	| Application-level | Runs for every request or specific routes | `app.use(logger)`       |
// 	| Router-level      | Specific to router instance               | `router.use(auth)`      |
// 	| Error-handling    | Catches and handles errors                | `(err, req, res, next)` |
// 	| Built-in          | Comes with Express                        | `express.static()`      |
// 	| Third-party       | Installed via npm                         | `morgan`, `cors`        |

// 	50	What are the advantages of using middleware in Express.js?

// 	Code reusability – Write once and reuse for multiple routes.
// 	Modularity – Separate logic into layers for maintainability.
// 	Easy debugging and logging – Use middleware for logging or tracking requests.
// 	Security and validation – Handle authentication, authorization, and input validation.
// 	Error management – Centralized error handling improves reliability.