// Express Framework - Additional Routing Questions
// 	57	What are the router object and router methods, and how to implement them?

// 	The router object in Express is an isolated instance of middleware and routes. It works like
// 	a mini Express app that helps organize routes by functionality or resource type.
// 	We create it using express.Router().

// 	58	What are the types of router methods?

// 	Router methods correspond to HTTP request methods. Common ones are:
// 	router.get() – for fetching data
// 	router.post() – for creating new resources
// 	router.put() – for updating existing resources
// 	router.patch() – for partially updating resources
// 	router.delete() – for deleting resources
// 	router.use() – for applying middleware

// 	59	What is the difference between app.get and router.get methods?

// 	| **app.get()**                        | **router.get()**                                       |
// 	| ------------------------------------ | ------------------------------------------------------ |
// 	| Belongs to the main Express app.     | Belongs to an instance of `express.Router()`.          |
// 	| Used for global or top-level routes. | Used for modular, grouped, or feature-specific routes. |
// 	| Example: `app.get("/home", ...)`     | Example: `router.get("/movies", ...)`                  |

// 	In short:
// 	app.get() is for main application routes,
// 	router.get() is for modular route handlers.

// 	60	What is Express.Router in Express.js?

// 	Express.Router is a class that helps organize routes into separate files and modules.
// 	It acts as a mini Express application capable of performing middleware and routing functions.
// 	It improves scalability and maintainability of large applications.

// 	61	Share a real application use of routing.

// 	In a real-world application (like an e-commerce app), routing helps organize features:
// 	/users → user authentication and profiles
// 	/products → product listing and management
// 	/orders → order processing

// 	62	What is route chaining in Express?

// 	Route chaining allows handling multiple HTTP methods on the same route using a single chain of commands.

// 	63	What is route nesting in Express?

// 	Route nesting means using routers inside other routers to create a hierarchical routing structure.
// 	It helps structure complex APIs — for example, /users/:id/posts or /movies/:id/reviews.

// 	64	How to implement route nesting in Express? 

// 	// routes/postRoutes.js
// 	const postRouter = express.Router();
// 	postRouter.get("/", (req, res) => res.send("All posts for user"));
	
// 	// routes/userRoutes.js
// 	import postRouter from "./postRoutes.js";
// 	const userRouter = express.Router();
// 	userRouter.get("/", (req, res) => res.send("All users"));
// 	userRouter.use("/:userId/posts", postRouter); // nested route

// 	export default userRouter;

	