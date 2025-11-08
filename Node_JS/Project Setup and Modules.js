// Project Setup and Modules
// 	14	How to set up a Node project?
// 	15	What is npm? What is the role of the node_modules folder in your project?

// 	npm (Node Package Manager) is a tool to install, manage, and publish JavaScript packages.
// 	The node_modules folder contains all installed dependencies and their sub-dependencies used in your project.

// 	16	What are Node modules?

// 	Node modules are reusable blocks of code that perform
// 	specific tasks and can be imported using require() or import.

// 	17	What is the role of the package.json file in Node?

// 	Acts as the manifest of your project.
// 	Contains metadata like project name, version, scripts, and dependencies.
// 	Helps npm to manage project dependencies and versions.

// 	18	What are modules in Node? What is the difference between a function and a module?

// 	Module: A separate file or package that can export multiple values (functions, objects, variables).
// 	Function: A block of code that performs a single task within a module.

// 	19	How many ways are there to export a module?

// 	Using module.exports → export a single value
// 	Using exports object → export multiple values

// 	20	What will happen if you do not export the module?

// 	If a module is not exported, it cannot be accessed from other files.

// 	21	How to import single or multiple functions from a module?

// 	single export - const greet = require('./greet');
//     Multiple export- const { add, sub } = require('./math');

// 	22	What is the module wrapper function?

// 	Private scope for variables
// 	Access to require, module, and exports
// 	File and directory information

// 	23	What are the types of modules in Node?

// 	There are three types:
// 	1.Built-in Modules (Core Modules)
// 	Provided by Node.js itself — no installation needed.
// 	Examples: fs, http, path, os

// 	2.Local Modules
// 	Custom modules you create in your project.
// 	Example: require('./math')

// 	3.Third-party Modules
// 	Installed via npm.
// 	Example: express, mongoose, cors