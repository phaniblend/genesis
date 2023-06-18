import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

function App() {
  const [imageData, setImageData] = useState(null);
  
  const mean_exercises =[
    {
      "exercise_number": 1,
      "title": "Setting Up a Basic Express Server",
      "objective": "To understand the fundamentals of setting up a basic server using Express.js.",
      "practical_application": "Almost every web application requires a server. This exercise will guide you on how to create a basic Express.js server, which is the foundational step towards building a full-fledged MEAN stack application.",
      "step_by_step_solution": [
        {
          "step": "Install the necessary package - express.",
          "code": "npm install express"
        },
        {
          "step": "Set up a basic server.",
          "code": `const express = require('express');
                   const app = express();
                   const port = 3000;
  
                   app.get('/', (req, res) => res.send('Hello World!'));
  
                   app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));`
        }
      ]
    },
    {
      "exercise_number": 2,
      "title": "Connecting Express Server to MongoDB",
      "objective": "To understand how to connect an Express.js server to a MongoDB database using Mongoose.",
      "practical_application": "A vital part of many web applications is the ability to store and retrieve data. This exercise will demonstrate how to connect your Express server to a MongoDB database, allowing data to be stored and retrieved.",
      "step_by_step_solution": [
        {
          "step": "Install the necessary packages - mongoose and dotenv.",
          "code": "npm install mongoose dotenv"
        },
        {
          "step": "Set up a MongoDB connection using Mongoose.",
          "code": `require('dotenv').config();
                   const mongoose = require('mongoose');
  
                   mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
                   const db = mongoose.connection;
  
                   db.on('error', (error) => console.error(error));
                   db.once('open', () => console.log('Connected to Database'));`
        }
      ]
    },
    {
      "exercise_number": 3,
      "title": "Creating a Model in MongoDB",
      "objective": "To learn how to create a model in MongoDB for storing data.",
      "practical_application": "Models are a crucial part of MongoDB as they define the structure of the data documents stored in a collection. This exercise will teach you how to create a model for a MongoDB collection.",
      "step_by_step_solution": [
        {
          "step": "Create a new model schema for a user.",
          "code": `const mongoose = require('mongoose');
  
                   const userSchema = new mongoose.Schema({
                     name: {
                       type: String,
                       required: true,
                     },
                     email: {
                       type: String,
                       required: true,
                       unique: true,
                     },
                     password: {
                       type: String,
                       required: true,
                     }
                   });
  
                   module.exports = mongoose.model('User', userSchema);`
        }
      ]
    },
    {
      "exercise_number": 4,
      "title": "Creating a Basic Angular Application",
      "objective": "To understand how to create a new Angular application.",
      "practical_application": "Angular is a powerful front-end framework that helps you build dynamic, single-page applications. This exercise will guide you on how to create a basic Angular application.",
      "step_by_step_solution": [
        {
          "step": "Install Angular CLI globally.",
          "code": "npm install -g @angular/cli"},
          {
            "step": "Create a new Angular application.",
            "code": "ng new my-app"
          },
          {
            "step": "Serve the application.",
            "code": "cd my-app\nng serve"
          }
        ]
      }, {
        "exercise_number": 5,
        "title": "Implementing CRUD Operations in MEAN Stack",
        "objective": "To understand how to implement basic CRUD (Create, Read, Update, Delete) operations in a MEAN stack application.",
        "practical_application": "CRUD operations form the backbone of many web applications. This exercise will guide you on how to implement these operations using MongoDB for data storage, Express.js for server-side logic, Angular for the frontend, and Node.js as the runtime.",
        "step_by_step_solution": [
          {
            "step": "Create a POST route in Express.js to add a new document to MongoDB.",
            "code": `app.post('/users', async (req, res) => {
              const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
              });
    
              try {
                const newUser = await user.save();
                res.status(201).json(newUser);
              } catch (err) {
                res.status(400).json({ message: err.message });
              }
            });`
          },
          {
            "step": "In the Angular application, create a form to get user data and make a POST request to the server.",
            "code": `this.http.post('/users', userData).subscribe((response) => {
              console.log(response);
            });`
          },
          {
            "step": "Create GET, PUT, and DELETE routes in Express.js and call them from the Angular application.",
            "code": "..."
          }
        ]
      },
      {
        "exercise_number": 6,
        "title": "Creating Routes and Controllers in Express",
        "objective": "To create and understand the usage of routes and controllers in Express.js within the MEAN stack.",
        "practical_application": "In an Express application, routes define the endpoints that respond to client requests, and controllers hold the logic for these responses. By the end of this exercise, you should be able to create modular and maintainable server-side logic.",
        "step_by_step_solution": [
          {
            "step": "Create a new file for the user routes (routes/users.js).",
            "code": ""
          },
          {
            "step": "Define GET and POST routes for '/users' in this file.",
            "code": `router.get('/', usersController.getAll);
    router.post('/', usersController.create);`
          },
          {
            "step": "Create a new file for the users controller (controllers/users.js).",
            "code": ""
          },
          {
            "step": "Define the 'getAll' and 'create' functions in the users controller. The 'getAll' function should retrieve all users from the MongoDB collection, and the 'create' function should add a new user to the collection.",
            "code": `exports.getAll = async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
    
    exports.create = async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
    
      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    };`
          }
        ]
      },
      {
        "exercise_number": 7,
        "title": "Building Angular Components",
        "objective": "To create Angular components and understand their role in a MEAN stack application.",
        "practical_application": "Components are the fundamental building blocks of Angular applications. They control a portion of the view through their associated template and provide functionality via a class. By the end of this exercise, you should be able to create basic components and understand how they contribute to your application's architecture.",
        "step_by_step_solution": [
          {
            "step": "Use the Angular CLI to generate a new component named 'users'.",
            "code": "ng generate component users"
          },
          {
            "step": "Open the newly created 'users.component.ts' file and add a 'users' property, which is an array of any.",
            "code": "users: any[] = [];"
          },
          {
            "step": "Create a method named 'getUsers' that will populate the 'users' array with data retrieved from the '/users' endpoint.",
            "code": `getUsers() {
        this.http.get('/users').subscribe((data: any[]) => {
          this.users = data;
        });
      }`
          },
          {
            "step": "Call the 'getUsers' method in the 'ngOnInit' lifecycle hook.",
            "code": `ngOnInit() {
        this.getUsers();
      }`
          },
          {
            "step": "Open the 'users.component.html' file and use the Angular ngFor directive to display each user in the 'users' array.",
            "code": `<div *ngFor="let user of users">
        <p>{{user.name}}</p>
        <p>{{user.email}}</p>
      </div>`
          }
        ]
      }, 
      {
        "exercise_number": 8,
        "title": "Angular Services and Dependency Injection",
        "objective": "To understand and apply the concept of services and dependency injection in Angular as part of a MEAN stack application.",
        "practical_application": "In larger applications, components should be lean and focused on presenting data and delegating data access to a service. Services are a great way to share information among classes that don't know each other.",
        "step_by_step_solution": [
          {
            "step": "Generate a new service using the Angular CLI, name it 'userService'.",
            "code": "ng generate service user"
          },
          {
            "step": "In the 'user.service.ts' file, import HttpClient and inject it into the constructor of the service.",
            "code": `import { HttpClient } from '@angular/common/http';\n\nconstructor(private http: HttpClient) { }`
          },
          {
            "step": "Create a 'getUsers' method in the service that returns the Observable from the http.get method.",
            "code": `getUsers() {
        return this.http.get('/users');
      }`
          },
          {
            "step": "Inject the 'UserService' into 'users.component.ts' and modify the 'getUsers' method to use the service.",
            "code": `constructor(private userService: UserService) { }\n\ngetUsers() {
        this.userService.getUsers().subscribe((data: any[]) => {
          this.users = data;
        });
      }`
          },
          {
            "step": "Check that the users are still being displayed as expected.",
            "code": "ng serve"
          }
        ]
      },   
      {
        "exercise_number": 9,
        "title": "Creating Routes with Express",
        "objective": "To create an Express server with API endpoints that can handle CRUD operations. This will lay the foundation for connecting Angular with Node.js and Express.js in your MEAN stack application.",
        "practical_application": "Being able to define and manage routes is an essential skill for backend development. These routes act as the interface between the frontend of your application and the server-side logic.",
        "step_by_step_solution": [
          {
            "step": "Create a new file 'routes.js' in the root of your Node.js project.",
            "code": "touch routes.js"
          },
          {
            "step": "In the 'routes.js' file, require Express and initialize a router object.",
            "code": "const express = require('express');\nconst router = express.Router();"
          },
          {
            "step": "Define a route for getting all users, it will respond with a simple message for now.",
            "code": "router.get('/users', (req, res) => {\n  res.send('Retrieving all users');\n});"
          },
          {
            "step": "Export the router object from 'routes.js', and import it into your server file, then use it with app.use().",
            "code": [
              "module.exports = router;", 
              "const routes = require('./routes');\napp.use('/api', routes);"
            ]
          },
          {
            "step": "Test the new route by sending a request to 'http://localhost:3000/api/users' from Postman or a similar tool.",
            "code": "GET http://localhost:3000/api/users"
          }
        ]
      },
      {
        "exercise_number": 10,
        "title": "Connect Node.js to MongoDB",
        "objective": "To connect your Node.js application to MongoDB. This will enable you to store and retrieve data which is crucial in most applications.",
        "practical_application": "In a MEAN stack application, MongoDB is typically used as the database system. Being able to connect to and interact with a MongoDB database is a key skill when developing with the MEAN stack.",
        "step_by_step_solution": [
          {
            "step": "Install mongoose, an elegant MongoDB object modeling for Node.js.",
            "code": "npm install mongoose"
          },
          {
            "step": "In your server file, import mongoose and establish a connection to your MongoDB database.",
            "code": "const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/your-db', { useNewUrlParser: true, useUnifiedTopology: true });"
          },
          {
            "step": "Set up a connection event to handle connection errors and open a connection.",
            "code": [
              "const db = mongoose.connection;\n\n",
              "db.on('error', console.error.bind(console, 'connection error:'));\n\n",
              "db.once('open', function() {\n  console.log('We're connected to the database');\n});"
            ]
          }
        ]
      },
      {
        "exercise_number": 11,
        "title": "Creating a MongoDB schema and model",
        "objective": "To understand how to create a MongoDB schema and model, allowing you to structure the data in your database.",
        "practical_application": "In an application where you want to manage user data, you would first define a User schema and model in your Node.js backend.",
        "step_by_step_solution": [
          {
            "step": "Define a Schema for a collection called 'User'.",
            "code": "const mongoose = require('mongoose');\n\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String\n});"
          },
          {
            "step": "Create a model based on the schema.",
            "code": "const User = mongoose.model('User', UserSchema);"
          },
          {
            "step": "Export the model so that it can be used in other parts of your application.",
            "code": "module.exports = User;"
          }
        ]
      },
      {
        "exercise_number": 11,
        "title": "Creating a MongoDB schema and model",
        "objective": "To understand how to create a MongoDB schema and model, allowing you to structure the data in your database.",
        "practical_application": "In an application where you want to manage user data, you would first define a User schema and model in your Node.js backend.",
        "step_by_step_solution": [
          {
            "step": "Define a Schema for a collection called 'User'.",
            "code": "const mongoose = require('mongoose');\n\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String\n});"
          },
          {
            "step": "Create a model based on the schema.",
            "code": "const User = mongoose.model('User', UserSchema);"
          },
          {
            "step": "Export the model so that it can be used in other parts of your application.",
            "code": "module.exports = User;"
          }
        ]
      },
      {
        "exercise_number": 12,
        "title": "Performing CRUD operations using Mongoose Model",
        "objective": "To utilize the Mongoose model and perform Create, Read, Update and Delete (CRUD) operations in a MongoDB collection.",
        "practical_application": "In a web application, managing user data involves a series of CRUD operations. This exercise helps you implement these operations on the User model that was created in the previous exercise.",
        "step_by_step_solution": [
          {
            "step": "Create and save a new user.",
            "code": "const newUser = new User({\n  name: 'John Doe',\n  email: 'john@doe.com',\n  password: '123456'\n});\n\nnewUser.save(err => {\n  if (err) return console.error(err);\n  console.log('User saved successfully!');\n});"
          },
          {
            "step": "Find a user by name.",
            "code": "User.findOne({ name: 'John Doe' }, (err, user) => {\n  if (err) return console.error(err);\n  console.log('User found:', user);\n});"
          },
          {
            "step": "Update a user's email.",
            "code": "User.findOneAndUpdate({ name: 'John Doe' }, { email: 'john.doe@newemail.com' }, (err, user) => {\n  if (err) return console.error(err);\n  console.log('User updated:', user);\n});"
          },
          {
            "step": "Delete a user by name.",
            "code": "User.findOneAndRemove({ name: 'John Doe' }, (err) => {\n  if (err) return console.error(err);\n  console.log('User deleted');\n});"
          }
        ]
      },
      {
        "exercise_number": 13,
        "title": "Building an Express.js API Endpoints",
        "objective": "To learn how to design and build RESTful API endpoints using Express.js.",
        "practical_application": "In a MEAN stack application, Express.js is responsible for handling HTTP requests and responses. This exercise helps you get comfortable with creating API endpoints that perform various actions based on the HTTP verb and route.",
        "step_by_step_solution": [
          {
            "step": "Create a new Express.js application.",
            "code": "const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server started on port 3000'));"
          },
          {
            "step": "Build a GET endpoint for '/users' to fetch all users from the MongoDB collection.",
            "code": "const User = require('./models/user');\napp.get('/users', (req, res) => {\n  User.find((err, users) => {\n    if (err) return res.status(500).send(err);\n    res.status(200).send(users);\n  });\n});"
          },
          {
            "step": "Build a POST endpoint for '/users' to add a new user to the MongoDB collection.",
            "code": "app.post('/users', (req, res) => {\n  const newUser = new User(req.body);\n  newUser.save((err, user) => {\n    if (err) return res.status(500).send(err);\n    res.status(201).send(user);\n  });\n});"
          },
          {
            "step": "Build a PUT endpoint for '/users/:id' to update a user in the MongoDB collection.",
            "code": "app.put('/users/:id', (req, res) => {\n  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {\n    if (err) return res.status(500).send(err);\n    res.status(200).send(user);\n  });\n});"
          },
          {
            "step": "Build a DELETE endpoint for '/users/:id' to delete a user from the MongoDB collection.",
            "code": "app.delete('/users/:id', (req, res) => {\n  User.findByIdAndRemove(req.params.id, (err) => {\n    if (err) return res.status(500).send(err);\n    res.status(200).send('User has been deleted');\n  });\n});"
          }
        ]
      },
      {
        "exercise_number": 14,
        "title": "Integrating Express.js with MongoDB",
        "objective": "To learn how to integrate an Express.js application with MongoDB using Mongoose.",
        "practical_application": "For data persistence in a MEAN stack application, we typically use MongoDB, a NoSQL database. This exercise will help you get hands-on experience integrating an Express.js application with MongoDB via Mongoose, an Object Data Modeling (ODM) library.",
        "step_by_step_solution": [
          {
            "step": "Install Mongoose.",
            "code": "npm install mongoose"
          },
          {
            "step": "Connect to MongoDB in your Express.js application.",
            "code": "const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});"
          },
          {
            "step": "Define a Mongoose schema and model for a 'User' collection.",
            "code": "const userSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String\n});\nconst User = mongoose.model('User', userSchema);"
          },
          {
            "step": "Modify the '/users' GET endpoint from the previous exercise to fetch all users from the 'User' collection.",
            "code": "app.get('/users', (req, res) => {\n  User.find((err, users) => {\n    if (err) return res.status(500).send(err);\n    res.status(200).send(users);\n  });\n});"
          },
          {
            "step": "Modify the '/users' POST endpoint from the previous exercise to add a new user to the 'User' collection.",
            "code": "app.post('/users', (req, res) => {\n  const newUser = new User(req.body);\n  newUser.save((err, user) => {\n    if (err) return res.status(500).send(err);\n    res.status(201).send(user);\n  });\n});"
          }
        ]
      },
      {
        "exercise_number": 15,
        "title": "Implementing CRUD Operations with MongoDB",
        "objective": "To learn how to perform CRUD operations (Create, Read, Update, Delete) on MongoDB using Mongoose in a MEAN stack application.",
        "practical_application": "CRUD operations are fundamental in database interactions. In this exercise, you will implement the CRUD operations for a specific data entity in your MEAN stack application using MongoDB and Mongoose.",
        "step_by_step_solution": [
          {
            "step": "Implement the 'create' operation to add a new document to the MongoDB collection.",
            "code": "app.post('/books', (req, res) => {\n  const newBook = new Book(req.body);\n  newBook.save((err, book) => {\n    if (err) return res.status(500).send(err);\n    res.status(201).send(book);\n  });\n});"
          },
          {
            "step": "Implement the 'read' operation to fetch a specific document from the MongoDB collection based on a given ID.",
            "code": "app.get('/books/:id', (req, res) => {\n  Book.findById(req.params.id, (err, book) => {\n    if (err) return res.status(500).send(err);\n    if (!book) return res.status(404).send('Book not found');\n    res.status(200).send(book);\n  });\n});"
          },
          {
            "step": "Implement the 'update' operation to modify a specific document in the MongoDB collection based on a given ID.",
            "code": "app.put('/books/:id', (req, res) => {\n  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {\n    if (err) return res.status(500).send(err);\n    if (!book) return res.status(404).send('Book not found');\n    res.status(200).send(book);\n  });\n});"
          },
          {
            "step": "Implement the 'delete' operation to remove a specific document from the MongoDB collection based on a given ID.",
            "code": "app.delete('/books/:id', (req, res) => {\n  Book.findByIdAndDelete(req.params.id, (err, book) => {\n    if (err) return res.status(500).send(err);\n    if (!book) return res.status(404).send('Book not found');\n    res.status(200).send('Book deleted successfully');\n  });\n});"
          }
        ]
      },{
        "exercise_number": 16,
        "title": "Authentication and Authorization with Passport.js",
        "objective": "To learn how to implement authentication and authorization using Passport.js in a MEAN stack application.",
        "practical_application": "Authentication and authorization are critical components of many web applications. In this exercise, you will integrate Passport.js into your MEAN stack application to handle user authentication and authorization.",
        "step_by_step_solution": [
          {
            "step": "Install the required dependencies for Passport.js, including 'passport', 'passport-local', 'express-session', and 'bcryptjs'.",
            "code": "npm install passport passport-local express-session bcryptjs"
          },
          {
            "step": "Configure Passport.js in your Express application and set up the local strategy for authentication.",
            "code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\n// Configure passport middleware\napp.use(passport.initialize());\napp.use(passport.session());\n\n// Set up local strategy\npassport.use(new LocalStrategy(\n  (username, password, done) => {\n    // Implement authentication logic here\n  }\n));"
          },
          {
            "step": "Implement the authentication logic within the local strategy's callback function.",
            "code": "passport.use(new LocalStrategy(\n  (username, password, done) => {\n    User.findOne({ username: username }, (err, user) => {\n      if (err) return done(err);\n      if (!user) return done(null, false);\n\n      bcrypt.compare(password, user.password, (err, isMatch) => {\n        if (err) return done(err);\n        if (!isMatch) return done(null, false);\n\n        return done(null, user);\n      });\n    });\n  }\n));"
          },
          {
            "step": "Serialize and deserialize user objects to maintain user sessions.",
            "code": "passport.serializeUser((user, done) => {\n  done(null, user.id);\n});\n\npassport.deserializeUser((id, done) => {\n  User.findById(id, (err, user) => {\n    done(err, user);\n  });\n});"
          },
          {
            "step": "Implement routes for user registration, login, and logout.",
            "code": "app.post('/register', (req, res) => {\n  // Handle user registration\n});\n\napp.post('/login', (req, res) => {\n  // Handle user login\n});\n\napp.get('/logout', (req, res) => {\n  req.logout();\n  res.redirect('/');\n});"
          }
        ]
      },
      {
        "exercise_number": 17,
        "title": "File Uploads with Multer",
        "objective": "To learn how to handle file uploads in a MEAN stack application using Multer middleware.",
        "practical_application": "File uploads are a common requirement in web applications, such as image or document uploads. In this exercise, you will integrate Multer middleware into your MEAN stack application to handle file uploads from the client-side.",
        "step_by_step_solution": [
          {
            "step": "Install the 'multer' package as a dependency in your project.",
            "code": "npm install multer"
          },
          {
            "step": "Configure Multer in your Express application to specify the destination and filename of uploaded files.",
            "code": "const multer = require('multer');\n\n// Configure Multer\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());\n  }\n});\n\nconst upload = multer({ storage: storage });"
          },
          {
            "step": "Create a route in your Express application to handle the file upload.",
            "code": "app.post('/upload', upload.single('file'), (req, res) => {\n  // Handle file upload\n});"
          },
          {
            "step": "Access the uploaded file in the route handler and perform necessary operations, such as saving the file or processing its data.",
            "code": "app.post('/upload', upload.single('file'), (req, res) => {\n  const file = req.file;\n  // Access file properties (e.g., file.path, file.filename, file.mimetype)\n  // Perform operations with the file\n});"
          },
          {
            "step": "Update your Angular client-side code to include a file input field and handle the file upload.",
            "code": "<form (ngSubmit)=\"onSubmit()\">\n  <input type=\"file\" (change)=\"onFileSelected($event)\" />\n  <button type=\"submit\">Upload</button>\n</form>\n\nonFileSelected(event) {\n  this.selectedFile = event.target.files[0];\n}\n\nonSubmit() {\n  const formData = new FormData();\n  formData.append('file', this.selectedFile);\n  // Send the formData to the server\n}"
          }
        ]
      },
      {
        "exercise_number": 18,
        "title": "User Authentication with Passport",
        "objective": "To learn how to implement user authentication in a MEAN stack application using Passport.",
        "practical_application": "User authentication is a critical feature in many web applications. In this exercise, you will integrate Passport authentication middleware into your MEAN stack application to provide user authentication functionality.",
        "step_by_step_solution": [
          {
            "step": "Install the required Passport packages as dependencies in your project.",
            "code": "npm install passport passport-local express-session"
          },
          {
            "step": "Configure Passport in your Express application to initialize and maintain user authentication sessions.",
            "code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\n// Configure Passport\npassport.use(new LocalStrategy(\n  (username, password, done) => {\n    // Authenticate the user\n  }\n));\n\napp.use(passport.initialize());\napp.use(passport.session());"
          },
          {
            "step": "Implement the user authentication route handlers to handle login and registration.",
            "code": "app.post('/login', passport.authenticate('local'), (req, res) => {\n  // Handle successful login\n});\n\napp.post('/register', (req, res) => {\n  // Handle user registration\n});"
          },
          {
            "step": "Create the user model and define the user schema for storing user information in the MongoDB database.",
            "code": "const mongoose = require('mongoose');\n\n// Define user schema\nconst userSchema = new mongoose.Schema({\n  username: String,\n  password: String\n});\n\nconst User = mongoose.model('User', userSchema);"
          },
          {
            "step": "Hash and store user passwords securely using a password hashing library, such as bcrypt.",
            "code": "const bcrypt = require('bcrypt');\n\n// Hash user password\nbcrypt.hash(password, 10, (err, hash) => {\n  // Store the hash in the database\n});"
          }
        ]
      },
      {
        "exercise_number": 19,
        "title": "File Uploads with Multer",
        "objective": "To learn how to handle file uploads in a MEAN stack application using Multer.",
        "practical_application": "File uploads are a common requirement in web applications, such as uploading profile pictures or attachments. In this exercise, you will integrate Multer middleware into your MEAN stack application to handle file uploads.",
        "step_by_step_solution": [
          {
            "step": "Install the Multer package as a dependency in your project.",
            "code": "npm install multer"
          },
          {
            "step": "Configure Multer in your Express application to handle file uploads.",
            "code": "const multer = require('multer');\n\n// Configure Multer\nconst storage = multer.diskStorage({\n  destination: 'uploads/',\n  filename: (req, file, cb) => {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix);\n  }\n});\n\nconst upload = multer({ storage: storage });\n\napp.use('/uploads', express.static('uploads'));\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle file upload\n});"
          },
          {
            "step": "Create an HTML form in your Angular application to allow users to select and upload files.",
            "code": "<form (submit)=\"uploadFile()\">\n  <input type=\"file\" (change)=\"onFileSelected($event)\" />\n  <button type=\"submit\">Upload</button>\n</form>"
          },
          {
            "step": "Implement the file upload functionality in your Angular component.",
            "code": "import { HttpClient } from '@angular/common/http';\n\nexport class UploadComponent {\n  selectedFile: File;\n\n  constructor(private http: HttpClient) {}\n\n  onFileSelected(event) {\n    this.selectedFile = event.target.files[0];\n  }\n\n  uploadFile() {\n    const uploadData = new FormData();\n    uploadData.append('file', this.selectedFile, this.selectedFile.name);\n    this.http.post('/upload', uploadData).subscribe(response => {\n      // Handle upload response\n    });\n  }\n}"
          }
        ]
      },{
        "exercise_number": 20,
        "title": "Authentication with Passport",
        "objective": "To learn how to implement user authentication in a MEAN stack application using Passport.",
        "practical_application": "User authentication is a crucial aspect of web applications to protect sensitive data and restrict access to authorized users. In this exercise, you will integrate Passport middleware into your MEAN stack application to implement user authentication.",
        "step_by_step_solution": [
          {
            "step": "Install the required Passport packages as dependencies in your project.",
            "code": "npm install passport passport-local"
          },
          {
            "step": "Configure Passport in your Express application to handle authentication.",
            "code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\n// Configure Passport\npassport.use(new LocalStrategy(\n  (username, password, done) => {\n    // Implement your authentication logic\n  }\n));\n\napp.use(passport.initialize());\napp.use(passport.session());"
          },
          {
            "step": "Implement the authentication logic in your Express application.",
            "code": "app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login' }));\n\napp.get('/logout', (req, res) => {\n  req.logout();\n  res.redirect('/login');\n});"
          },
          {
            "step": "Create login and registration forms in your Angular application.",
            "code": "<form (submit)=\"login()\">\n  <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n  <button type=\"submit\">Login</button>\n</form>\n\n<form (submit)=\"register()\">\n  <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n  <button type=\"submit\">Register</button>\n</form>"
          },
          {
            "step": "Implement the login and registration functionality in your Angular component.",
            "code": "import { AuthService } from './auth.service';\n\nexport class LoginComponent {\n  username: string;\n  password: string;\n\n  constructor(private authService: AuthService) {}\n\n  login() {\n    this.authService.login(this.username, this.password).subscribe(response => {\n      // Handle login response\n    });\n  }\n\n  register() {\n    this.authService.register(this.username, this.password).subscribe(response => {\n      // Handle registration response\n    });\n  }\n}"
          }
        ]
      },{
        "exercise_number": 21,
        "title": "Authorization with Role-Based Access Control",
        "objective": "To learn how to implement role-based access control (RBAC) for authorization in a MEAN stack application.",
        "practical_application": "In many applications, different users have different levels of access and permissions. Implementing role-based access control (RBAC) allows you to manage user roles and restrict access to certain resources or functionalities. In this exercise, you will enhance the authentication system by implementing RBAC for authorization in your MEAN stack application.",
        "step_by_step_solution": [
          {
            "step": "Define roles and permissions for different user types in your application.",
            "code": "// Define user roles\nconst ROLES = {\n  ADMIN: 'admin',\n  USER: 'user'\n};\n\n// Define role-based permissions\nconst PERMISSIONS = {\n  ADMIN: ['create', 'read', 'update', 'delete'],\n  USER: ['read']\n};"
          },
          {
            "step": "Modify your user model to include a 'role' field.",
            "code": "const UserSchema = new Schema({\n  username: String,\n  password: String,\n  role: String\n});"
          },
          {
            "step": "Implement middleware to check user roles and permissions.",
            "code": "const checkPermission = (permission) => (req, res, next) => {\n  // Check user role and permission\n  if (req.user.role && PERMISSIONS[req.user.role].includes(permission)) {\n    next();\n  } else {\n    res.status(403).json({ message: 'Access denied' });\n  }\n};\n\n// Usage: Protect routes based on permissions\napp.get('/admin', checkPermission('read'), (req, res) => {\n  // Handle request\n});"
          },
          {
            "step": "Update your Angular components to handle authorization.",
            "code": "export class AdminComponent implements OnInit {\n  isAdmin: boolean;\n\n  constructor(private authService: AuthService) {}\n\n  ngOnInit() {\n    this.authService.getCurrentUser().subscribe(user => {\n      this.isAdmin = user.role === 'admin';\n    });\n  }\n}"
          }
        ]
      },{
        "exercise_number": 22,
        "title": "File Uploads with Multer",
        "objective": "To learn how to handle file uploads in a MEAN stack application using Multer middleware.",
        "practical_application": "In many applications, there is a need to handle file uploads, such as user avatars, images, or document attachments. Multer is a popular middleware for handling file uploads in Node.js applications. In this exercise, you will integrate Multer into your MEAN stack application to enable file uploads.",
        "step_by_step_solution": [
          {
            "step": "Install the Multer package using npm or yarn.",
            "code": "npm install multer"
          },
          {
            "step": "Configure Multer in your Express app to specify the upload destination and file limits.",
            "code": "const multer = require('multer');\n\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + '-' + file.originalname);\n  }\n});\n\nconst upload = multer({ storage: storage });\n\n// Usage: Handle file uploads\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Access uploaded file using req.file\n});"
          },
          {
            "step": "Create an Angular component to handle file uploads.",
            "code": "import { Component } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Component({\n  selector: 'app-upload',\n  templateUrl: './upload.component.html'\n})\nexport class UploadComponent {\n  file: File;\n\n  constructor(private http: HttpClient) {}\n\n  onFileSelected(event: any) {\n    this.file = event.target.files[0];\n  }\n\n  onUpload() {\n    const formData = new FormData();\n    formData.append('file', this.file);\n\n    this.http.post('/upload', formData).subscribe(response => {\n      console.log(response);\n    });\n  }\n}"
          }
        ]
      },{
        "exercise_number": 23,
        "title": "User Authentication with Passport.js",
        "objective": "To learn how to implement user authentication in a MEAN stack application using Passport.js.",
        "practical_application": "User authentication is a crucial aspect of many applications to ensure secure access and protect user data. Passport.js is a popular authentication middleware for Node.js applications. In this exercise, you will integrate Passport.js into your MEAN stack application to implement user authentication.",
        "step_by_step_solution": [
          {
            "step": "Install the necessary packages for Passport.js using npm or yarn.",
            "code": "npm install passport passport-local express-session"
          },
          {
            "step": "Configure Passport.js in your Express app to use the desired authentication strategy, such as local username and password.",
            "code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\npassport.use(new LocalStrategy(\n  (username, password, done) => {\n    // Find user by username and validate password\n  }\n));\n\napp.use(passport.initialize());\napp.use(passport.session());"
          },
          {
            "step": "Implement the necessary routes and middleware for user authentication.",
            "code": "// Login\napp.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));\n\n// Logout\napp.get('/logout', (req, res) => {\n  req.logout();\n  res.redirect('/login');\n});\n\n// Protect routes\napp.get('/protected', ensureAuthenticated, (req, res) => {\n  res.render('protected');\n});\n\nfunction ensureAuthenticated(req, res, next) {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n\n  res.redirect('/login');\n}"
          },
          {
            "step": "Create an Angular authentication service to handle user login and logout on the client-side.",
            "code": "import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  constructor(private http: HttpClient) {}\n\n  login(username: string, password: string) {\n    return this.http.post('/login', { username, password });\n  }\n\n  logout() {\n    return this.http.get('/logout');\n  }\n}"
          }
        ]
      },
      {
        "exercise_number": 24,
        "title": "File Upload with Multer",
        "objective": "To learn how to implement file upload functionality in a MEAN stack application using Multer.",
        "practical_application": "File upload is a common requirement in many applications, such as image uploads or document attachments. Multer is a middleware for handling multipart/form-data, which is typically used for file uploads in Node.js applications. In this exercise, you will integrate Multer into your MEAN stack application to enable file upload functionality.",
        "step_by_step_solution": [
          {
            "step": "Install Multer package using npm or yarn.",
            "code": "npm install multer"
          },
          {
            "step": "Configure Multer in your Express app to define the upload destination and file handling options.",
            "code": "const multer = require('multer');\n\nconst storage = multer.diskStorage({\n  destination: 'uploads/',\n  filename: (req, file, cb) => {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix);\n  }\n});\n\nconst upload = multer({ storage });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle file upload\n});"
          },
          {
            "step": "Create an Angular file upload component to allow users to select and upload files from the client-side.",
            "code": "import { Component } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Component({\n  selector: 'app-file-upload',\n  template: `<!-- File upload form -->`\n})\nexport class FileUploadComponent {\n  constructor(private http: HttpClient) {}\n\n  onFileChange(event: any) {\n    const file = event.target.files[0];\n    const formData = new FormData();\n    formData.append('file', file);\n    this.http.post('/upload', formData).subscribe((response) => {\n      // Handle file upload response\n    });\n  }\n}"
          }
        ]
      },
      {
        "exercise_number": 25,
        "title": "Authentication with Passport.js",
        "objective": "To learn how to implement authentication in a MEAN stack application using Passport.js.",
        "practical_application": "Authentication is a crucial aspect of many applications, allowing users to securely access their accounts and protect sensitive information. Passport.js is a popular authentication middleware for Node.js applications. In this exercise, you will integrate Passport.js into your MEAN stack application to implement user authentication.",
        "step_by_step_solution": [
          {
            "step": "Install required packages: passport, passport-local, bcrypt, and express-session.",
            "code": "npm install passport passport-local bcrypt express-session"
          },
          {
            "step": "Configure Passport.js in your Express app to define the authentication strategy and session management.",
            "code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\nconst bcrypt = require('bcrypt');\n\n// Define user model\nconst User = require('./models/user');\n\n// Configure local strategy\npassport.use(new LocalStrategy({\n  usernameField: 'email',\n  passwordField: 'password'\n},\nasync (email, password, done) => {\n  try {\n    // Find user by email\n    const user = await User.findOne({ email });\n\n    // User not found\n    if (!user) {\n      return done(null, false, { message: 'Invalid email or password' });\n    }\n\n    // Compare passwords\n    const match = await bcrypt.compare(password, user.password);\n\n    // Passwords do not match\n    if (!match) {\n      return done(null, false, { message: 'Invalid email or password' });\n    }\n\n    // Authentication successful\n    return done(null, user);\n  } catch (error) {\n    return done(error);\n  }\n}));\n\n// Configure session management\npassport.serializeUser((user, done) => {\n  done(null, user.id);\n});\n\npassport.deserializeUser(async (id, done) => {\n  try {\n    const user = await User.findById(id);\n    done(null, user);\n  } catch (error) {\n    done(error);\n  }\n});\n\n// Initialize passport middleware\napp.use(passport.initialize());\napp.use(passport.session());"
          },
          {
            "step": "Create user authentication routes in your Express app to handle registration, login, and logout.",
            "code": "app.post('/register', (req, res) => {\n  // Handle user registration\n});\n\napp.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));\n\napp.get('/logout', (req, res) => {\n  req.logout();\n  res.redirect('/');\n});"
          },
          {
            "step": "Create Angular components and templates for user registration, login, and logout.",
            "code": "// Registration component\n\n// Login component\n\n// Logout component"
          }
        ]
      },
      {
        "exercise_number": 26,
        "title": "Authorization with Role-based Access Control",
        "objective": "To learn how to implement role-based access control (RBAC) for authorization in a MEAN stack application.",
        "practical_application": "Role-based access control (RBAC) is a common approach to manage user permissions and access control in applications. In this exercise, you will implement RBAC in your MEAN stack application to control user access to different parts of the system based on their assigned roles.",
        "step_by_step_solution": [
          {
            "step": "Define roles and permissions for your application, such as 'admin', 'user', and 'guest'.",
            "code": "// Define roles\nconst roles = ['admin', 'user', 'guest'];\n\n// Define permissions\nconst permissions = {\n  admin: ['create', 'read', 'update', 'delete'],\n  user: ['read', 'update'],\n  guest: ['read']\n};"
          },
          {
            "step": "Add a 'role' field to your user model to store the assigned role for each user.",
            "code": "const userSchema = new mongoose.Schema({\n  // Other user fields\n  role: {\n    type: String,\n    enum: roles,\n    default: 'guest'\n  }\n});"
          },
          {
            "step": "Implement middleware in your Express app to check user roles and permissions for each request.",
            "code": "// Role-based authorization middleware\nconst authorize = (allowedRoles) => {\n  return (req, res, next) => {\n    const { user } = req;\n\n    // Check if user has the required role\n    if (user && allowedRoles.includes(user.role)) {\n      next();\n    } else {\n      res.status(403).json({ message: 'Unauthorized' });\n    }\n  };\n};\n\n// Example usage: restrict access to admin-only routes\napp.get('/admin', authorize(['admin']), (req, res) => {\n  // Handle admin route\n});"
          },
          {
            "step": "Update your Angular components and templates to show/hide functionality based on user roles.",
            "code": "<div *ngIf=\"user.role === 'admin'\">\n  <!-- Admin-specific functionality -->\n</div>\n\n<div *ngIf=\"user.role === 'user'\">\n  <!-- User-specific functionality -->\n</div>\n\n<div *ngIf=\"user.role === 'guest'\">\n  <!-- Guest-specific functionality -->\n</div>"
          }
        ]
      },
      {
        "exercise_number": 27,
        "title": "File Upload with Multer",
        "objective": "To learn how to implement file upload functionality in a MEAN stack application using Multer middleware.",
        "practical_application": "File upload functionality is a common requirement in many applications. In this exercise, you will learn how to implement file upload functionality in your MEAN stack application using the Multer middleware. This will allow users to upload files, such as images or documents, and store them on the server.",
        "step_by_step_solution": [
          {
            "step": "Install the Multer package using npm or yarn.",
            "code": "npm install multer"
          },
          {
            "step": "Configure Multer in your Express app to handle file uploads.",
            "code": "const multer = require('multer');\n\n// Define storage configuration\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + '-' + file.originalname);\n  }\n});\n\n// Create multer instance\nconst upload = multer({ storage: storage });"
          },
          {
            "step": "Add a file upload route to your Express app.",
            "code": "app.post('/upload', upload.single('file'), (req, res) => {\n  // File upload logic\n});"
          },
          {
            "step": "Update your Angular components and templates to include a file upload form.",
            "code": "<form (submit)=\"onFileUpload()\">\n  <input type=\"file\" (change)=\"onFileSelected($event)\" />\n  <button type=\"submit\">Upload</button>\n</form>"
          },
          {
            "step": "Handle the file upload on the server-side and store the file on the server.",
            "code": "const onFileUpload = (req, res) => {\n  const file = req.file;\n  // File upload logic\n};"
          }
        ]
      },{
        "exercise_number": 28,
        "title": "Pagination with ngx-pagination",
        "objective": "To learn how to implement pagination in an Angular application using the ngx-pagination library.",
        "practical_application": "Pagination is commonly used in applications to divide large data sets into smaller, more manageable chunks. In this exercise, you will learn how to implement pagination in your Angular application using the ngx-pagination library. This will allow you to display data in a paginated manner, improving user experience and performance.",
        "step_by_step_solution": [
          {
            "step": "Install the ngx-pagination library using npm or yarn.",
            "code": "npm install ngx-pagination"
          },
          {
            "step": "Import the PaginationModule from ngx-pagination in your Angular module.",
            "code": "import { PaginationModule } from 'ngx-pagination';\n\n@NgModule({\n  imports: [\n    PaginationModule\n  ]\n})\nexport class AppModule { }"
          },
          {
            "step": "Update your component to include pagination functionality.",
            "code": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-data-list',\n  template: `\n    <ul>\n      <li *ngFor=\"let item of items | paginate: { itemsPerPage: 10, currentPage: p }\">{{ item }}</li>\n    </ul>\n\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  `\n})\nexport class DataListComponent {\n  items = [...];\n  p = 1;\n}"
          },
          {
            "step": "Display the paginated data in your Angular template.",
            "code": "<app-data-list></app-data-list>"
          }
        ]
      },
      {
        "exercise_number": 29,
        "title": "Handling Form Validation with Reactive Forms",
        "objective": "To learn how to handle form validation using reactive forms in Angular.",
        "practical_application": "Form validation is a crucial aspect of web applications to ensure that user inputs are valid and meet certain criteria. In this exercise, you will learn how to handle form validation using reactive forms in Angular. This will allow you to validate user inputs, display error messages, and control the form submission.",
        "step_by_step_solution": [
          {
            "step": "Create a reactive form in your Angular component.",
            "code": "import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'app-my-form',\n  template: `\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\n      <input type=\"text\" formControlName=\"name\" />\n      <div *ngIf=\"myForm.controls.name.invalid && (myForm.controls.name.dirty || myForm.controls.name.touched)\">\n        <div *ngIf=\"myForm.controls.name.errors.required\">Name is required</div>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  `\n})\nexport class MyFormComponent {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {\n    this.myForm = this.formBuilder.group({\n      name: ['', Validators.required]\n    });\n  }\n\n  submitForm() {\n    if (this.myForm.valid) {\n      // Form submission logic\n    }\n  }\n}"
          },
          {
            "step": "Implement form validation rules using Angular's Validators.",
            "code": "this.myForm = this.formBuilder.group({\n  name: ['', Validators.required]\n});"
          },
          {
            "step": "Display error messages based on form validation.",
            "code": "<div *ngIf=\"myForm.controls.name.invalid && (myForm.controls.name.dirty || myForm.controls.name.touched)\">\n  <div *ngIf=\"myForm.controls.name.errors.required\">Name is required</div>\n</div>"
          },
          {
            "step": "Handle form submission based on form validity.",
            "code": "submitForm() {\n  if (this.myForm.valid) {\n    // Form submission logic\n  }\n}"
          }
        ]
      },{
        "exercise_number": 30,
        "title": "Custom Form Validation",
        "objective": "To learn how to implement custom form validation in Angular.",
        "practical_application": "In certain cases, you may need to implement custom form validation logic that goes beyond the built-in validators provided by Angular. This exercise will guide you through the process of creating and applying custom form validators in Angular.",
        "step_by_step_solution": [
          {
            "step": "Create a custom validator function.",
            "code": "import { AbstractControl, ValidatorFn } from '@angular/forms';\n\nexport function customValidator(): ValidatorFn {\n  return (control: AbstractControl) => {\n    const value = control.value;\n    // Implement custom validation logic\n    if (/* validation condition */) {\n      return { customError: true };\n    }\n    return null;\n  };\n}"
          },
          {
            "step": "Apply the custom validator to a form control.",
            "code": "this.myForm = this.formBuilder.group({\n  name: ['', customValidator()]\n});"
          },
          {
            "step": "Display the custom error message.",
            "code": "<div *ngIf=\"myForm.controls.name.errors?.customError\">Custom error message</div>"
          }
        ]
      },{
        "exercise_number": 31,
        "title": "User Authentication with JWT",
        "objective": "To learn how to implement user authentication with JSON Web Tokens (JWT) in the MEAN stack.",
        "practical_application": "User authentication is a fundamental requirement for many web applications. Implementing JWT-based authentication provides a secure and scalable approach to authenticate and authorize users in the MEAN stack.",
        "step_by_step_solution": [
          {
            "step": "Install the necessary dependencies.",
            "code": "// Node.js\nnpm install jsonwebtoken\n\n// Angular\nnpm install @auth0/angular-jwt"
          },
          {
            "step": "Implement user registration and password hashing.",
            "code": "// Node.js\n// Implement user registration API\n\n// Express route handler\napp.post('/register', async (req, res) => {\n  const { username, password } = req.body;\n  // Hash the password\n  const hashedPassword = await bcrypt.hash(password, saltRounds);\n  // Save the user to the database\n  const user = await User.create({ username, password: hashedPassword });\n  res.status(201).json({ message: 'User registered successfully' });\n});"
          },
          {
            "step": "Implement user login and JWT generation.",
            "code": "// Node.js\n// Implement user login API\n\n// Express route handler\napp.post('/login', async (req, res) => {\n  const { username, password } = req.body;\n  // Find the user\n  const user = await User.findOne({ username });\n  if (!user) {\n    return res.status(401).json({ message: 'Invalid username or password' });\n  }\n  // Verify the password\n  const isPasswordValid = await bcrypt.compare(password, user.password);\n  if (!isPasswordValid) {\n    return res.status(401).json({ message: 'Invalid username or password' });\n  }\n  // Generate JWT\n  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });\n  res.json({ token });\n});"
          },
          {
            "step": "Protect routes with authentication middleware.",
            "code": "// Node.js\n// Implement authentication middleware\n\n// Express middleware\nfunction authenticate(req, res, next) {\n  const token = req.headers.authorization;\n  if (!token) {\n    return res.status(401).json({ message: 'Missing authorization token' });\n  }\n  // Verify and decode the token\n  try {\n    const decodedToken = jwt.verify(token, secretKey);\n    req.userId = decodedToken.userId;\n    next();\n  } catch (err) {\n    res.status(401).json({ message: 'Invalid token' });\n  }\n}\n\n// Protect a route\napp.get('/protected', authenticate, (req, res) => {\n  res.json({ message: 'Protected route accessed successfully' });\n});"
          },
          {
            "step": "Implement JWT decoding in the Angular client.",
            "code": "// Angular\n// Implement JWT decoding\n\n// Angular service\nimport { JwtHelperService } from '@auth0/angular-jwt';\n\n@Injectable()\nexport class AuthService {\n  constructor(private jwtHelper: JwtHelperService) {}\n\n  isAuthenticated(): boolean {\n    const token = localStorage.getItem('token');\n    return !this.jwtHelper.isTokenExpired(token);\n  }\n\n  getToken(): string {\n    return localStorage.getItem('token');\n  }\n\n  decodeToken(): any {\n    const token = this.getToken();\n    return this.jwtHelper.decodeToken(token);\n  }\n\n  getUserId(): string {\n    const decodedToken = this.decodeToken();\n    return decodedToken ? decodedToken.userId : null;\n  }\n}"
          }          
        ]
        },
        {
          "exercise_number": 32,
          "title": "Role-based Authorization",
          "objective": "To learn how to implement role-based authorization in the MEAN stack.",
          "practical_application": "Role-based authorization allows you to control access to specific resources based on user roles. Implementing role-based authorization enhances the security and control over the application.",
          "step_by_step_solution": [
            {
              "step": "Define roles and permissions.",
              "code": "// Node.js\n// Define roles and permissions in your application\n\nconst roles = {\n  ADMIN: 'admin',\n  USER: 'user',\n};\n\nconst permissions = {\n  CREATE: 'create',\n  READ: 'read',\n  UPDATE: 'update',\n  DELETE: 'delete',\n};"
            },
            {
              "step": "Implement role check middleware.",
              "code": "// Node.js\n// Implement role check middleware\n\nfunction checkRole(role) {\n  return (req, res, next) => {\n    const userRole = req.user.role;\n    if (userRole !== role) {\n      return res.status(403).json({ message: 'Access denied' });\n    }\n    next();\n  };\n}\n\n// Protect a route based on role\napp.get('/admin/dashboard', checkRole(roles.ADMIN), (req, res) => {\n  res.json({ message: 'Admin dashboard accessed successfully' });\n});"
            },
            {
              "step": "Assign roles to users.",
              "code": "// Node.js\n// Assign roles to users\n\n// Express route handler\napp.post('/admin/users/:userId/role', checkRole(roles.ADMIN), async (req, res) => {\n  const { userId } = req.params;\n  const { role } = req.body;\n  const user = await User.findById(userId);\n\n  if (!user) {\n    return res.status(404).json({ message: 'User not found' });\n  }\n\n  user.role = role;\n  await user.save();\n\n  res.json({ message: 'User role updated successfully' });\n});"
            },
            {
              "step": "Implement role-based authorization in the Angular client.",
              "code": "// Angular\n// Implement role-based authorization\n\n// Angular service\n@Injectable()\nexport class AuthService {\n  constructor(private http: HttpClient) {}\n\n  hasPermission(permission: string): boolean {\n    const user = this.getCurrentUser();\n    return user && user.permissions.includes(permission);\n  }\n\n  isAdmin(): boolean {\n    const user = this.getCurrentUser();\n    return user && user.role === 'admin';\n  }\n\n  getCurrentUser(): User | null {\n    // Implement code to retrieve the current user from the server or local storage\n    return null;\n  }\n}"
            }
          ]
        },{
          "exercise_number": 33,
          "title": "File Upload and Storage",
          "objective": "To learn how to implement file upload and storage in the MEAN stack.",
          "practical_application": "File upload and storage are common requirements in many applications. Implementing this functionality allows users to upload files and store them securely for future retrieval.",
          "step_by_step_solution": [
            {
              "step": "Configure file upload settings.",
              "code": "// Node.js\n// Configure file upload settings\n\nconst multer = require('multer');\n\n// Storage configuration\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    // Specify the destination folder for file uploads\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    // Generate a unique filename for the uploaded file\n    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, uniqueName + '-' + file.originalname);\n  }\n});\n\n// File upload middleware\nconst upload = multer({ storage: storage });"
            },
            {
              "step": "Handle file upload in an Express route.",
              "code": "// Node.js\n// Handle file upload in an Express route\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  const file = req.file;\n  if (!file) {\n    return res.status(400).json({ message: 'No file uploaded' });\n  }\n\n  // Process the uploaded file\n  // Save file details in the database\n\n  res.json({ message: 'File uploaded successfully' });\n});"
            },
            {
              "step": "Implement file storage and retrieval.",
              "code": "// Node.js\n// Implement file storage and retrieval\n\napp.get('/files/:filename', (req, res) => {\n  const filename = req.params.filename;\n  const filePath = path.join(__dirname, 'uploads', filename);\n\n  fs.access(filePath, fs.constants.R_OK, (err) => {\n    if (err) {\n      return res.status(404).json({ message: 'File not found' });\n    }\n\n    // Stream the file to the client\n    const fileStream = fs.createReadStream(filePath);\n    fileStream.pipe(res);\n  });\n});"
            },
            {
              "step": "Upload and display files in the Angular client.",
              "code": "// Angular\n// Upload and display files in the client\n\n// Angular component\n@Component({\n  selector: 'app-file-upload',\n  templateUrl: './file-upload.component.html',\n  styleUrls: ['./file-upload.component.css']\n})\nexport class FileUploadComponent {\n  selectedFile: File;\n\n  onFileSelected(event: any) {\n    this.selectedFile = event.target.files[0];\n  }\n\n  onUpload() {\n    // Implement code to upload the selected file to the server\n  }\n}"
            }
          ]
        },{
          "exercise_number": 34,
          "title": "Authentication with Passport",
          "objective": "To learn how to implement authentication using Passport in the MEAN stack.",
          "practical_application": "Authentication is a crucial aspect of many applications. Implementing authentication using Passport allows users to securely sign up, log in, and protect certain routes in the application.",
          "step_by_step_solution": [
            {
              "step": "Install the required dependencies.",
              "code": "// Node.js\n// Install Passport and related packages\n\nnpm install passport passport-local passport-jwt bcrypt"
            },
            {
              "step": "Configure Passport for authentication strategies.",
              "code": "// Node.js\n// Configure Passport for authentication strategies\n\nconst passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\nconst JwtStrategy = require('passport-jwt').Strategy;\nconst ExtractJwt = require('passport-jwt').ExtractJwt;\n\n// Configure local strategy for username/password authentication\npassport.use(new LocalStrategy({\n  usernameField: 'email',\n  passwordField: 'password'\n}, (email, password, done) => {\n  // Implement code to verify user credentials\n}));\n\n// Configure JWT strategy for token-based authentication\nconst jwtOptions = {\n  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: 'your-secret-key'\n};\n\npassport.use(new JwtStrategy(jwtOptions, (payload, done) => {\n  // Implement code to verify the JWT token\n}));"
            },
            {
              "step": "Create routes for user authentication.",
              "code": "// Node.js\n// Create routes for user authentication\n\napp.post('/signup', (req, res) => {\n  // Implement code to create a new user\n});\n\napp.post('/login', (req, res) => {\n  // Implement code to authenticate the user\n});"
            },
            {
              "step": "Protect routes using Passport authentication middleware.",
              "code": "// Node.js\n// Protect routes using Passport authentication middleware\n\napp.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {\n  // This route is protected and can only be accessed by authenticated users\n});"
            },
            {
              "step": "Implement user authentication in the Angular client.",
              "code": "// Angular\n// Implement user authentication in the client\n\n// Angular component\n@Component({\n  selector: 'app-login',\n  templateUrl: './login.component.html',\n  styleUrls: ['./login.component.css']\n})\nexport class LoginComponent {\n  email: string;\n  password: string;\n\n  onLogin() {\n    // Implement code to send login request to the server\n  }\n}"
            }
          ]
        },{
          "exercise_number": 35,
          "title": "Authorization with Roles",
          "objective": "To learn how to implement role-based authorization in the MEAN stack.",
          "practical_application": "Role-based authorization allows controlling access to certain resources or actions based on user roles. Implementing authorization with roles adds an extra layer of security and control to the application.",
          "step_by_step_solution": [
            {
              "step": "Define user roles and their corresponding permissions.",
              "code": "// Node.js\n// Define user roles and permissions\n\nconst roles = {\n  ADMIN: 'admin',\n  USER: 'user'\n};\n\nconst permissions = {\n  VIEW_USERS: 'view_users',\n  EDIT_USERS: 'edit_users'\n};"
            },
            {
              "step": "Associate roles and permissions with user accounts.",
              "code": "// Node.js\n// Associate roles and permissions with user accounts\n\n// User model\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String,\n  role: String\n});\n\n// Assign roles and permissions during user registration or account update\nconst user = new User({\n  name: 'John Doe',\n  email: 'john@example.com',\n  password: 'password',\n  role: roles.USER\n});"
            },
            {
              "step": "Implement role-based authorization middleware.",
              "code": "// Node.js\n// Implement role-based authorization middleware\n\nconst authorize = (requiredRoles) => {\n  return (req, res, next) => {\n    const userRole = req.user.role;\n    if (!requiredRoles.includes(userRole)) {\n      return res.status(403).json({ error: 'Unauthorized' });\n    }\n    next();\n  };\n};\n\n// Usage example in route definition\napp.get('/admin/users', passport.authenticate('jwt', { session: false }), authorize([roles.ADMIN]), (req, res) => {\n  // This route is accessible only to users with the 'admin' role\n});"
            },
            {
              "step": "Check user roles in the Angular client for UI rendering and access control.",
              "code": "// Angular\n// Check user roles in the client for UI rendering and access control\n\n// Angular component\n@Component({\n  selector: 'app-dashboard',\n  templateUrl: './dashboard.component.html',\n  styleUrls: ['./dashboard.component.css']\n})\nexport class DashboardComponent implements OnInit {\n  isAdmin: boolean;\n\n  ngOnInit() {\n    // Implement code to check user role from server response\n  }\n}"
            }
          ]
        },{
          "exercise_number": 36,
          "title": "File Upload with Multer",
          "objective": "To learn how to handle file uploads in the MEAN stack using Multer middleware.",
          "practical_application": "File upload functionality is commonly required in web applications for tasks such as uploading profile pictures, attaching documents, or uploading media files. Understanding how to handle file uploads using Multer middleware is essential for building file upload features in the MEAN stack.",
          "step_by_step_solution": [
            {
              "step": "Install the Multer middleware package.",
              "code": "// Node.js\n// Install Multer package\n\n$ npm install multer"
            },
            {
              "step": "Configure Multer for handling file uploads.",
              "code": "// Node.js\n// Configure Multer for handling file uploads\n\nconst multer = require('multer');\n\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    // Define destination directory\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    // Define filename\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix);\n  }\n});\n\nconst upload = multer({ storage });"
            },
            {
              "step": "Add a file upload route to handle the uploaded file.",
              "code": "// Node.js\n// Add a file upload route\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle uploaded file\n  const file = req.file;\n  // Process file data\n});"
            },
            {
              "step": "Create an Angular file upload form.",
              "code": "// Angular\n// Create a file upload form\n\n<form (ngSubmit)=\"onSubmit()\">\n  <input type=\"file\" (change)=\"onFileSelected($event)\" />\n  <button type=\"submit\">Upload</button>\n</form>\n\n// Angular component\nexport class FileUploadComponent {\n  selectedFile: File;\n\n  onFileSelected(event) {\n    this.selectedFile = event.target.files[0];\n  }\n\n  onSubmit() {\n    // Implement code to upload file\n  }\n}"
            }
          ]
        },{
          "exercise_number": 37,
          "title": "Pagination",
          "objective": "To learn how to implement pagination in the MEAN stack.",
          "practical_application": "Pagination is commonly used in web applications to display a large amount of data in smaller, manageable chunks. Implementing pagination in the MEAN stack allows users to navigate through different pages of data efficiently.",
          "step_by_step_solution": [
            {
              "step": "Implement server-side pagination in the Node.js and Express API.",
              "code": "// Node.js and Express\n// Implement server-side pagination\n\napp.get('/products', (req, res) => {\n  const { page, limit } = req.query;\n  const startIndex = (page - 1) * limit;\n  const endIndex = page * limit;\n\n  const results = data.slice(startIndex, endIndex);\n\n  res.json({\n    total: data.length,\n    page,\n    limit,\n    results\n  });\n});"
            },
            {
              "step": "Create an Angular component to display paginated data.",
              "code": "// Angular\n// Create a component to display paginated data\n\nexport class ProductListComponent implements OnInit {\n  products: Product[];\n\n  constructor(private productService: ProductService) {}\n\n  ngOnInit() {\n    this.getProducts();\n  }\n\n  getProducts() {\n    // Implement code to fetch paginated data from API\n  }\n}"
            },
            {
              "step": "Implement client-side pagination in the Angular component.",
              "code": "// Angular\n// Implement client-side pagination\n\nexport class ProductListComponent implements OnInit {\n  products: Product[];\n  currentPage: number = 1;\n  pageSize: number = 10;\n\n  constructor(private productService: ProductService) {}\n\n  ngOnInit() {\n    this.getProducts();\n  }\n\n  getProducts() {\n    this.productService.getProducts(this.currentPage, this.pageSize)\n      .subscribe((response) => {\n        this.products = response.results;\n      });\n  }\n\n  onPageChange(page: number) {\n    this.currentPage = page;\n    this.getProducts();\n  }\n}"
            },
            {
              "step": "Add pagination controls to the Angular template.",
              "code": "<div *ngFor=\"let product of products\">\n  <!-- Display product details -->\n</div>\n\n<!-- Pagination controls -->\n<pagination [totalItems]=\"totalItems\" [pageSize]=\"pageSize\" (pageChange)=\"onPageChange($event)\"></pagination>"
            }
          ]
        },{
          "exercise_number": 38,
          "title": "File Upload",
          "objective": "To learn how to implement file upload functionality in the MEAN stack.",
          "practical_application": "File upload is a common requirement in web applications, and implementing it in the MEAN stack allows users to upload files such as images, documents, or multimedia content.",
          "step_by_step_solution": [
            {
              "step": "Configure server-side file upload handling in the Node.js and Express API.",
              "code": "// Node.js and Express\n// Configure server-side file upload handling\n\nconst multer = require('multer');\n\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/');\n  },\n  filename: (req, file, cb) => {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix);\n  }\n});\n\nconst upload = multer({ storage });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle file upload\n});"
            },
            {
              "step": "Create an Angular component to handle file upload from the client side.",
              "code": "// Angular\n// Create a component to handle file upload\n\nexport class FileUploadComponent implements OnInit {\n  file: File;\n\n  constructor(private fileUploadService: FileUploadService) {}\n\n  ngOnInit() {}\n\n  handleFileInput(files: FileList) {\n    this.file = files.item(0);\n  }\n\n  uploadFile() {\n    this.fileUploadService.uploadFile(this.file).subscribe((response) => {\n      // Handle file upload response\n    });\n  }\n}"
            },
            {
              "step": "Implement the file upload functionality in the Angular service.",
              "code": "// Angular\n// Implement the file upload functionality in the service\n\nexport class FileUploadService {\n  uploadFile(file: File): Observable<any> {\n    const formData = new FormData();\n    formData.append('file', file);\n\n    return this.http.post('/upload', formData);\n  }\n}"
            },
            {
              "step": "Add file upload controls to the Angular template.",
              "code": "<input type=\"file\" (change)=\"handleFileInput($event.target.files)\" />\n<button (click)=\"uploadFile()\">Upload</button>"
            }
          ]
        },{
          "exercise_number": 39,
          "title": "Authentication with Passport.js",
          "objective": "To learn how to implement authentication in the MEAN stack using Passport.js.",
          "practical_application": "Authentication is a critical component of many web applications. Implementing authentication using Passport.js in the MEAN stack allows users to securely register, log in, and access protected routes.",
          "step_by_step_solution": [
            {
              "step": "Install the required dependencies for Passport.js authentication.",
              "code": "// Node.js and Express\n// Install dependencies for Passport.js authentication\n\nnpm install passport passport-local passport-jwt bcryptjs jsonwebtoken"
            },
            {
              "step": "Configure Passport.js authentication strategies in the Node.js and Express API.",
              "code": "// Node.js and Express\n// Configure Passport.js authentication strategies\n\nconst passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\nconst JwtStrategy = require('passport-jwt').Strategy;\nconst ExtractJwt = require('passport-jwt').ExtractJwt;\nconst bcrypt = require('bcryptjs');\nconst User = require('../models/user');\n\n// Local strategy for username and password authentication\npassport.use(new LocalStrategy(\n  { usernameField: 'email' },\n  (email, password, done) => {\n    User.findOne({ email })\n      .then(user => {\n        if (!user) {\n          return done(null, false, { message: 'Invalid email or password' });\n        }\n\n        bcrypt.compare(password, user.password, (err, isMatch) => {\n          if (err) throw err;\n          if (isMatch) {\n            return done(null, user);\n          } else {\n            return done(null, false, { message: 'Invalid email or password' });\n          }\n        });\n      })\n      .catch(err => done(err));\n  }\n));\n\n// JWT strategy for token authentication\nconst jwtOptions = {\n  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: 'your-secret-key'\n};\n\npassport.use(new JwtStrategy(jwtOptions, (payload, done) => {\n  User.findById(payload.sub)\n    .then(user => {\n      if (user) {\n        done(null, user);\n      } else {\n        done(null, false);\n      }\n    })\n    .catch(err => done(err));\n}));"
            },
            {
              "step": "Create the routes for user registration, login, and protected routes in the Node.js and Express API.",
              "code": "// Node.js and Express\n// Create routes for user registration, login, and protected routes\n\nconst jwt = require('jsonwebtoken');\n\napp.post('/register', (req, res) => {\n  // Handle user registration\n});\n\napp.post('/login', (req, res) => {\n  // Handle user login\n});\n\napp.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {\n  // Handle protected route\n});"
            },
            {
                "step": "Implement user registration and login functionality in the Node.js and Express API.",
                "code": "// Node.js and Express\n// Implement user registration and login functionality\n\napp.post('/register', (req, res) => {\n  const { name, email, password } = req.body;\n\n  // Handle user registration\n});\n\napp.post('/login', (req, res) => {\n  const { email, password } = req.body;\n\n  // Handle user login\n});"
              }
              ]
            },
            {
              "exercise_number": 40,
              "title": "CRUD Operations with MongoDB",
              "objective": "To learn how to perform CRUD (Create, Read, Update, Delete) operations with MongoDB in the MEAN stack.",
              "practical_application": "CRUD operations are fundamental to working with databases. In the MEAN stack, MongoDB is used as the database, and understanding how to perform CRUD operations allows you to store, retrieve, update, and delete data effectively.",
              "step_by_step_solution": [
                {
                  "step": "Connect to the MongoDB database in the Node.js and Express API.",
                  "code": "// Node.js and Express\n// Connect to the MongoDB database\n\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })\n  .then(() => console.log('Connected to MongoDB'))\n  .catch(err => console.error('Error connecting to MongoDB:', err));"
                },
                {
                  "step": "Define a Mongoose schema for the data model.",
                  "code": "// Node.js and Express\n// Define a Mongoose schema\n\nconst mongoose = require('mongoose');\n\nconst schema = new mongoose.Schema({\n  // Define the schema fields\n});\n\nconst Model = mongoose.model('Model', schema);\n\nmodule.exports = Model;"
                },
                {
                  "step": "Perform CRUD operations using Mongoose in the Node.js and Express API.",
                  "code": "// Node.js and Express\n// Perform CRUD operations using Mongoose\n\n// Create a new document\nconst model = new Model({ /* data */ });\nmodel.save()\n  .then(savedModel => /* handle saved model */)\n  .catch(err => /* handle error */);\n\n// Read documents\nModel.find()\n  .then(models => /* handle models */)\n  .catch(err => /* handle error */);\n\nModel.findById(id)\n  .then(model => /* handle model */)\n  .catch(err => /* handle error */);\n\n// Update a document\nModel.findByIdAndUpdate(id, { /* updated data */ }, { new: true })\n  .then(updatedModel => /* handle updated model */)\n  .catch(err => /* handle error */);\n\n// Delete a document\nModel.findByIdAndDelete(id)\n  .then(deletedModel => /* handle deleted model */)\n  .catch(err => /* handle error */);"
                }
              ]
            },
            {
              "exercise_number": 41,
              "title": "User Authentication with Passport.js",
              "objective": "To learn how to implement user authentication using Passport.js in the MEAN stack.",
              "practical_application": "User authentication is a crucial part of many web applications. With Passport.js, you can easily implement authentication strategies, such as local authentication, social authentication, and more, in your MEAN stack application.",
              "step_by_step_solution": [
                {
                  "step": "Install the required dependencies for Passport.js.",
                  "code": "// Node.js and Express\n// Install the required dependencies for Passport.js\n\nnpm install passport passport-local passport-google-oauth20"
                },
                {
                  "step": "Configure Passport.js in your Node.js and Express application.",
                  "code": "// Node.js and Express\n// Configure Passport.js\n\nconst passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\nconst GoogleStrategy = require('passport-google-oauth20').Strategy;\n\n// Configure the LocalStrategy for local authentication\npassport.use(new LocalStrategy(/* configuration */));\n\n// Configure the GoogleStrategy for Google authentication\npassport.use(new GoogleStrategy(/* configuration */));"
                },
                {
                  "step": "Implement the authentication routes and handlers in your Node.js and Express application.",
                  "code": "// Node.js and Express\n// Implement authentication routes and handlers\n\n// Login route\napp.post('/login', passport.authenticate('local', { /* options */ }), (req, res) => /* handle successful authentication */);\n\n// Google authentication routes\napp.get('/auth/google', passport.authenticate('google', { /* options */ }));\napp.get('/auth/google/callback', passport.authenticate('google', { /* options */ }), (req, res) => /* handle successful authentication */);"
                },
                {
                  "step": "Protect routes that require authentication using Passport.js middleware.",
                  "code": "// Node.js and Express\n// Protect routes using Passport.js middleware\n\n// Example: Protect a route that requires authentication\napp.get('/protected', passport.authenticate('local', { /* options */ }), (req, res) => /* handle protected route */);"
                }
              ]
            },{
              "exercise_number": 42,
              "title": "Role-Based Access Control",
              "objective": "To learn how to implement role-based access control (RBAC) in the MEAN stack.",
              "practical_application": "RBAC allows you to control access to certain features or resources based on user roles. Implementing RBAC in your MEAN stack application adds an additional layer of security and enhances user management.",
              "step_by_step_solution": [
                {
                  "step": "Define user roles in your application.",
                  "code": "// Node.js and MongoDB\n// Define user roles\n\nconst roles = ['user', 'admin'];\n\n// Assign roles to users in the database"
                },
                {
                  "step": "Implement middleware to check user roles and restrict access to certain routes or features.",
                  "code": "// Node.js and Express\n// Implement middleware for role-based access control\n\nconst checkRole = (requiredRole) => (req, res, next) => {\n  // Check if user has the required role\n  if (req.user.role === requiredRole) {\n    // User has the required role, proceed to the next middleware or route handler\n    next();\n  } else {\n    // User does not have the required role, deny access\n    res.status(403).json({ error: 'Access denied.' });\n  }\n};\n\n// Example: Protect a route for admins only\napp.get('/admin', checkRole('admin'), (req, res) => /* handle admin route */);"
                },
                {
                  "step": "Apply the role-based access control middleware to relevant routes in your application.",
                  "code": "// Node.js and Express\n// Apply role-based access control middleware to routes\n\n// Example: Apply middleware to protect a route for admins only\napp.get('/admin', checkRole('admin'), (req, res) => /* handle admin route */);"
                }
              ]
            },
            {
              "exercise_number": 43,
              "title": "Real-time Communication with Socket.IO",
              "objective": "To learn how to implement real-time communication in the MEAN stack using Socket.IO.",
              "practical_application": "Socket.IO allows you to establish a bidirectional, real-time communication channel between the server and client. Implementing Socket.IO in your MEAN stack application enables real-time updates and messaging.",
              "step_by_step_solution": [
                {
                  "step": "Install Socket.IO in your Node.js server.",
                  "code": "npm install socket.io"
                },
                {
                  "step": "Initialize Socket.IO in your server code and handle client connections.",
                  "code": "// Node.js and Socket.IO\n// Initialize Socket.IO\n\nconst server = require('http').createServer(app);\nconst io = require('socket.io')(server);\n\n// Handle client connections\nio.on('connection', (socket) => {\n  // Handle events and emit data\n  socket.on('event', (data) => {\n    // Handle event data\n  });\n});"
                },
                {
                  "step": "Integrate Socket.IO in your Angular client code.",
                  "code": "// Angular and Socket.IO\n// Integrate Socket.IO in your Angular code\n\nimport { io } from 'socket.io-client';\n\n// Connect to the Socket.IO server\nconst socket = io('http://localhost:3000');\n\n// Handle events and emit data\nsocket.on('event', (data) => {\n  // Handle event data\n});\n\n// Emit events\nsocket.emit('event', data);"
                }
              ]
            },
            {
              "exercise_number": 44,
              "title": "Authentication with Passport.js",
              "objective": "To learn how to implement authentication in the MEAN stack using Passport.js.",
              "practical_application": "Passport.js is a popular authentication middleware that provides a simple and flexible way to implement authentication strategies in your MEAN stack application.",
              "step_by_step_solution": [
                {
                  "step": "Install Passport.js and the required authentication strategies.",
                  "code": "npm install passport passport-local"
                },
                {
                  "step": "Configure Passport.js in your Node.js server.",
                  "code": "// Node.js and Passport.js\n// Configure Passport.js\n\nconst passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\n// Configure the LocalStrategy\npassport.use(new LocalStrategy(/* configuration options */));\n\n// Initialize Passport.js\napp.use(passport.initialize());\napp.use(passport.session());"
                },
                {
                  "step": "Implement user authentication endpoints for login and registration.",
                  "code": "// Node.js and Express\n// Implement user authentication endpoints\n\n// Login\napp.post('/login', passport.authenticate('local'), (req, res) => /* handle login */);\n\n// Registration\napp.post('/register', (req, res) => /* handle registration */);"
                },
                {
                  "step": "Protect routes with authentication using Passport.js middleware.",
                  "code": "// Node.js and Express\n// Protect routes with authentication middleware\n\n// Example: Protect a route with authentication\napp.get('/protected', passport.authenticate('local'), (req, res) => /* handle protected route */);"
                }
              ]
            },
            {
              "exercise_number": 45,
              "title": "Error Handling and Logging",
              "objective": "To learn how to implement error handling and logging in the MEAN stack.",
              "practical_application": "Proper error handling and logging are essential for identifying and resolving issues in your MEAN stack application. Implementing error handling and logging mechanisms improves the application's stability and helps in debugging.",
              "step_by_step_solution": [
                {
                  "step": "Implement custom error handling middleware in your Node.js server.",
                  "code": "// Node.js and Express\n// Implement custom error handling middleware\n\napp.use((err, req, res, next) => {\n  // Handle and log the error\n  console.error(err);\n  // Respond with an error message\n  res.status(500).json({ error: 'Internal Server Error' });\n});"
                },
                {
                  "step": "Integrate a logging library, such as Winston, in your Node.js server.",
                  "code": "// Node.js and Winston\n// Integrate Winston logging library\n\nconst winston = require('winston');\n\n// Create a logger\nconst logger = winston.createLogger({ /* configuration options */ });\n\n// Use the logger\nlogger.error('An error occurred.');"
                },
                {
                  "step": "Implement client-side error handling and display error messages in your Angular application.",
                  "code": "// Angular\n// Implement client-side error handling\n\n// Example: Handle HTTP error responses\nthis.http.get('/api/data').subscribe(\n  (response) => {\n    // Handle success\n  },\n  (error) => {\n    // Handle error\n    console.error(error);\n    // Display error message to the user\n    this.errorMessage = 'An error occurred.';\n  }\n);"
                }
              ]
            },
            {
              "exercise_number": 46,
              "title": "File Upload and Storage",
              "objective": "To learn how to implement file upload and storage in the MEAN stack.",
              "practical_application": "File upload and storage are common requirements in many applications. Implementing file upload functionality in the MEAN stack allows users to upload files, store them on the server, and retrieve or manipulate them as needed.",
              "step_by_step_solution": [
                {
                  "step": "Configure file upload middleware, such as Multer, in your Node.js server.",
                  "code": "// Node.js and Multer\n// Configure Multer file upload middleware\n\nconst multer = require('multer');\n\n// Configure storage\nconst storage = multer.diskStorage({ /* configuration options */ });\n\n// Configure file upload\nconst upload = multer({ storage });"
                },
                {
                  "step": "Implement file upload endpoint in your Node.js server.",
                  "code": "// Node.js and Express\n// Implement file upload endpoint\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle uploaded file\n});"
                },
                {
                  "step": "Integrate file upload functionality in your Angular client application.",
                  "code": "// Angular\n// Integrate file upload functionality\n\n// Example: Handle file selection\nonFileSelected(event) {\n  const file = event.target.files[0];\n  // Perform file upload\n}"
                }
              ]
            },
            {
              "exercise_number": 47,
              "title": "Caching and Performance Optimization",
              "objective": "To learn how to implement caching and performance optimization techniques in the MEAN stack.",
              "practical_application": "Caching and performance optimization are crucial for improving the speed and responsiveness of your MEAN stack application. Implementing caching mechanisms and performance optimization techniques can significantly enhance the user experience and reduce server load.",
              "step_by_step_solution": [
                {
                  "step": "Implement server-side caching using a caching library, such as Redis, in your Node.js server.",
                  "code": "// Node.js and Redis\n// Implement server-side caching with Redis\n\nconst redis = require('redis');\n\n// Create a Redis client\nconst client = redis.createClient({ /* configuration options */ });\n\n// Store data in Redis cache\nclient.set('key', 'value');\n\n// Retrieve data from Redis cache\nclient.get('key', (err, value) => { /* handle retrieved data */ });"
                },
                {
                  "step": "Apply client-side caching techniques in your Angular application.",
                  "code": "// Angular\n// Apply client-side caching\n\n// Example: Cache HTTP responses\nthis.http.get('/api/data', { observe: 'response', cache: true }).subscribe(\n  (response) => {\n    // Handle success\n  },\n  (error) => {\n    // Handle error\n  }\n);"
                }
              ]
            },
            {
              "exercise_number": 48,
              "title": "Testing and Test Automation",
              "objective": "To learn how to implement testing and test automation in the MEAN stack.",
              "practical_application": "Testing is essential for ensuring the quality and reliability of your MEAN stack application. Implementing testing methodologies and test automation helps identify bugs and issues early in the development process and facilitates efficient regression testing.",
              "step_by_step_solution": [
                {
                  "step": "Set up testing frameworks, such as Mocha and Chai, in your Node.js server.",
                  "code": "// Node.js and Mocha\n// Set up Mocha testing framework\n\nconst mocha = require('mocha');\n\n// Define test suites and test cases\nconst suite = mocha.describe('My Test Suite');\n\nsuite.it('should pass this test', () => {\n  // Perform test assertions\n});"
                },
                {
                  "step": "Write unit tests for your Node.js server-side code.",
                  "code": "// Node.js and Chai\n// Write unit tests using Chai assertion library\n\nconst chai = require('chai');\n\n// Perform assertions\nchai.assert.strictEqual(actual, expected, 'Assertion Error Message');"
                },
                {
                  "step": "Implement automated tests for your Angular client-side code.",
                  "code": "// Angular\n// Implement automated tests using Angular testing utilities\n\nimport { TestBed } from '@angular/core/testing';\n\n// Perform tests\nTestBed.configureTestingModule({ /* test module configuration */ });\n\n// Example: Perform test assertions\nexpect(component.someValue).toBe(expectedValue);"
                }
              ]
            },
            {
              "exercise_number": 49,
              "title": "Deployment and Continuous Integration",
              "objective": "To learn how to deploy and implement continuous integration in the MEAN stack.",
              "practical_application": "Deployment and continuous integration are crucial for efficiently deploying your MEAN stack application and ensuring a smooth and automated development workflow. Implementing deployment strategies and continuous integration tools streamlines the development process and helps maintain the application's stability and quality.",
              "step_by_step_solution": [
                {
                  "step": "Choose a deployment platform, such as Heroku or AWS, for hosting your MEAN stack application.",
                  "code": "// Example: Heroku Deployment\n// Set up Heroku deployment\n\n// Create a Heroku app\nheroku create\n\n// Deploy to Heroku\ngit push heroku main"
                },
                {
                  "step": "Set up a CI/CD pipeline using a tool like Jenkins or Travis CI.",
                  "code": "// Example: Travis CI Configuration\n// Set up Travis CI pipeline\n\n// Create a .travis.yml configuration file\n\nlanguage: node_js\nnode_js:\n  - '14'\n\nscript:\n  - npm install\n  - npm test\n\ndeploy:\n  provider: heroku\n  api_key: $HEROKU_API_KEY\n  app: your-app-name"
                }
              ]
            },
            {
              "exercise_number": 50,
              "title": "Performance Monitoring and Optimization",
              "objective": "To learn how to monitor and optimize the performance of the MEAN stack application.",
              "practical_application": "Monitoring and optimizing the performance of your MEAN stack application ensures optimal user experience and efficient resource utilization. Implementing performance monitoring tools and optimization techniques helps identify and address performance bottlenecks.",
              "step_by_step_solution": [
                {
                  "step": "Set up performance monitoring tools, such as New Relic or Google Analytics, to track and analyze application performance.",
                  "code": "// Example: Google Analytics\n// Set up Google Analytics for performance monitoring\n\n// Add the Google Analytics tracking code to your application\n<script async src='https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID'></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'GA_TRACKING_ID');\n</script>"
                },
                {
                  "step": "Optimize database queries and improve server-side performance using techniques like indexing and caching.",
                  "code": "// Example: Database Query Optimization\n// Optimize database queries using indexing\n\n// Add an index to improve query performance\ndb.collection.createIndex({ field: 1 });"
                },
                {
                  "step": "Optimize client-side performance by minimizing file sizes, leveraging browser caching, and implementing lazy loading.",
                  "code": "// Example: Client-side Performance Optimization\n// Minimize file sizes and leverage browser caching\n\n// Configure caching headers in your server response\nres.setHeader('Cache-Control', 'public, max-age=3600');\n\n// Implement lazy loading for images and resources\n<img src='placeholder.jpg' data-src='image.jpg' loading='lazy'>"
                }
              ]
            }
            ]
            
const mean_objectives = [
  // Objectives for exercise 1
  "Understand the basic concepts of the MEAN stack",
  "Set up a development environment for MEAN stack development",
  // Objectives for exercise 2
  "Create a MongoDB database and collection",
  "Perform basic CRUD operations on MongoDB using Node.js",
  // Objectives for exercise 3
  "Build a RESTful API using Express.js",
  "Implement endpoints for CRUD operations in the API",
  // Objectives for exercise 4
  "Create a front-end application using Angular",
  "Implement data binding in Angular components",
  // Objectives for exercise 5
  "Connect the front-end application with the back-end API",
  "Retrieve and display data from the API in the front-end",
  // Objectives for exercise 6
  "Implement user authentication and authorization",
  "Secure the API endpoints using authentication and authorization",
  // Objectives for exercise 7
  "Implement real-time communication using Socket.io",
  "Enable real-time updates in the front-end application",
  // Objectives for exercise 8
  "Optimize the performance of the MEAN stack application",
  "Improve the application's scalability and efficiency",
  // Objectives for exercise 9
  "Implement file upload functionality in the MEAN stack application",
  "Handle file uploads and storage in the application",
  // Objectives for exercise 10
  "Implement data validation and error handling in the application",
  "Handle and display validation errors and application errors",
  // Objectives for exercise 11
  "Implement pagination and sorting in the application",
  "Manage large datasets and provide efficient data retrieval",
  // Objectives for exercise 12
  "Implement search functionality in the application",
  "Enable users to search and filter data in the application",
  // Objectives for exercise 13
  "Implement data caching in the MEAN stack application",
  "Improve performance and reduce database queries using caching",
  // Objectives for exercise 14
  "Implement internationalization and localization in the application",
  "Provide multi-language support for users",
  // Objectives for exercise 15
  "Implement unit tests for the MEAN stack application",
  "Write and execute unit tests to ensure code quality and functionality",
  // Objectives for exercise 16
  "Implement end-to-end tests for the MEAN stack application",
  "Test the application's functionality and user flows",
  // Objectives for exercise 17
  "Implement deployment and hosting of the MEAN stack application",
  "Deploy the application to a hosting platform and make it live",
  // Objectives for exercise 18
  "Implement data analytics and tracking in the application",
  "Collect and analyze user data for insights and improvements",
  // Objectives for exercise 19
  "Implement server-side rendering in the MEAN stack application",
  "Improve performance and SEO by rendering pages on the server",
  // Objectives for exercise 20
  "Implement user feedback and rating features in the application",
  "Allow users to provide feedback and rate content",
  // Objectives for exercise 21
  "Implement social media integration in the MEAN stack application",
  "Enable sharing and interaction with social media platforms",
  // Objectives for exercise 22
  "Implement data migration and database versioning in the application",
  "Manage database changes and updates across different versions",
  // Objectives for exercise 23
  "Implement scheduled tasks and background jobs in the application",
  "Automate tasks and processes that run in the background for improved efficiency",
  // Objectives for exercise 24
  "Implement user notifications and messaging features in the application",
  "Enable communication and updates between users",
  // Objectives for exercise 25
  "Implement role-based access control in the MEAN stack application",
  "Manage user roles and permissions for different application features",
  // Objectives for exercise 26
  "Implement data encryption and security measures in the application",
  "Protect sensitive data and ensure secure communication",
  // Objectives for exercise 27
  "Implement data visualization and charting in the MEAN stack application",
  "Present data in a visual and interactive format",
  // Objectives for exercise 28
  "Implement integration with third-party APIs and services",
  "Connect and interact with external APIs and services",
  // Objectives for exercise 29
  "Implement data backups and disaster recovery measures",
  "Ensure data integrity and recoverability in case of failures",
  // Objectives for exercise 30
  "Implement performance monitoring and analytics for the application",
  "Monitor and analyze application performance for optimization",
  // Objectives for exercise 31
  "Implement user-generated content features in the MEAN stack application",
  "Allow users to create and manage their own content",
  // Objectives for exercise 32
  "Implement data synchronization and offline support in the application",
  "Enable users to work offline and synchronize data when online",
  // Objectives for exercise 33
  "Implement multi-tenancy and multi-user support in the MEAN stack application",
  "Support multiple tenants and users with separate data and configurations",
  // Objectives for exercise 34
  "Implement data validation and sanitization to ensure data integrity",
  "Prevent security vulnerabilities and maintain data quality",
  // Objectives for exercise 35
  "Implement performance optimization techniques for database queries",
  "Optimize query performance for improved application speed",
  // Objectives for exercise 36
  "Implement geolocation and mapping features in the MEAN stack application",
  "Utilize geolocation data and integrate with mapping services",
  // Objectives for exercise 37
  "Implement data archiving and retrieval in the application",
  "Archive and retrieve historical data for compliance or analysis",
  // Objectives for exercise 38
  "Implement email notifications and communication features",
  "Send automated emails and facilitate email communication",
  // Objectives for exercise 39
  "Implement data import and export functionality in the application",
  "Allow users to import and export data in different formats",
  // Objectives for exercise 40
  "Implement session management and authentication",
  "Manage user sessions and ensure secure authentication",
  // Objectives for exercise 41
  "Implement transactional operations and concurrency control",
  "Ensure data consistency and integrity in concurrent operations",
  // Objectives for exercise 42
  "Implement data clustering and sharding for scalability",
  "Distribute data across multiple nodes for increased performance",
  // Objectives for exercise 43
  "Implement data analytics and machine learning integration",
  "Utilize data analytics and machine learning algorithms in the application",
  // Objectives for exercise 44
  "Implement real-time monitoring and logging for the application",
  "Monitor application events and logs in real-time for troubleshooting",
  // Objectives for exercise 45
  "Implement sentiment analysis and natural language processing features",
  "Analyze and process textual data for sentiment and meaning",
  // Objectives for exercise 46
  "Implement performance testing and load testing for the application",
  "Test application performance and scalability under heavy loads",
  // Objectives for exercise 47
  "Implement data validation and integrity checks in the application",
  // Objectives for exercise 48
  "Implement data aggregation and reporting features in the application",
  "Generate reports and insights from collected data",
  // Objectives for exercise 49
  "Implement data synchronization between multiple instances of the application",
  "Ensure consistent data across multiple instances and environments",
  // Objectives for exercise 50
  "Implement AI and chatbot integration in the MEAN stack application",
  "Integrate AI-powered chatbots for automated interactions with users"
  ];
              
  const captureComponent = async () => {
    try {
      const appElement = document.getElementById('app');
      const canvas = await html2canvas(appElement);
      console.log(canvas); // Check the captured canvas object
      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error('Error capturing component:', error);
    }
  };
  

  const exportToPDF = async () => {
    try {
      const capturedImageData = await captureComponent();
      if (capturedImageData) {
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(capturedImageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('exported_component.pdf');
      }
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  };

  useEffect(() => {
    if (imageData) {
      exportToPDF();
    }
  }, [imageData]);

  return (
    <div id="app" className="App">
      {angular_exercises.map((exercise) => (
        <Exercise key={exercise.exercise_number} exercise={exercise} objectives={angular_objectives} />
      ))}
      <button onClick={exportToPDF}>Export to PDF</button>
    </div>
  );
}

export default App;