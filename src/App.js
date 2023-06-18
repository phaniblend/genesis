import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

function App() {
  const [imageData, setImageData] = useState(null);
  

const react_exercises = [
{
"exercise_number": 1,
"title": "Introduction to React",
"objective": "To understand the basic concepts of React.",
"practical_application": "Imagine you are building a web application that requires dynamic user interfaces and real-time data updates. You want to use React to simplify your development process.",
"step_by_step_solution": [
{
"step": "Install React using npm or yarn.",
"code": "npm install react\n\nyarn add react"
},
{
"step": "Create a new React project using Create React App.",
"code": "npx create-react-app my-app"
},
{
"step": "Start the development server to view your application in a web browser.",
"code": "cd my-app\nnpm start\n\nyarn start"
},
{
"step": "Write your first React component.",
"code": "import React from 'react';\n\nfunction MyComponent() {\n  return <h1>Hello, world!</h1>;\n}\n\nexport default MyComponent;"
}
]
},
{
"exercise_number": 2,
"title": "JSX",
"objective": "To understand how to use JSX to write React components.",
"practical_application": "Imagine you are building a web application that requires complex user interfaces. You want to use JSX to simplify the process of writing and rendering HTML in your React components.",
"step_by_step_solution": [
{
"step": "Write a simple JSX expression.",
"code": "<h1>Hello, world!</h1>"
},
{
"step": "Render a component that uses JSX.",
"code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction MyComponent() {\n  return <h1>Hello, world!</h1>;\n}\n\nReactDOM.render(<MyComponent />, document.getElementById('root'));"
},
{
"step": "Use expressions in JSX.",
"code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction MyComponent() {\n  const name = 'John';\n  return <h1>Hello, {name}!</h1>;\n}\n\nReactDOM.render(<MyComponent />, document.getElementById('root'));"
},
{
"step": "Use JavaScript statements in JSX.",
"code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction MyComponent() {\n  const name = 'John';\n  const isLogged = true;\n\n  let greeting;\n  if (isLogged) {\n    greeting = <p>Welcome back, {name}!</p>;\n  } else {\n    greeting = <p>Please log in.</p>;\n  }\n\n  return <div>{greeting}</div>;\n}\n\nReactDOM.render(<MyComponent />, document.getElementById('root'));"
}
]
},
{
"exercise_number": 3,
"title": "Creating a React Component",
"objective": "To learn how to create a React component.",
"practical_application": "Imagine you are building a web application that requires a component to display a list of items. You want to create a reusable component for this purpose.",
"step_by_step_solution": [
{
"step": "Create a new file for your component.",
"code": "import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <h1>My Component</h1>\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n      </ul>\n    </div>\n  );\n};\n\nexport default MyComponent;"
},
{
"step": "Import your component into your application and use it as desired.",
"code": "import React from 'react';\nimport MyComponent from './MyComponent';\n\nconst App = () => {\n  return (\n    <div>\n      <h1>My App</h1>\n      <MyComponent />\n    </div>\n  );\n};\n\nexport default App;"
}
]
},
{
"exercise_number": 4,
"title": "Props in React",
"objective": "To understand how to use props in React components.",
"practical_application": "Imagine you are building a web application that requires a component to display a user's name. You want to make this component reusable by passing the user's name as a prop.",
"step_by_step_solution": [
{
"step": "Add a prop to your component.",
"code": "import React from 'react';\n\nconst MyComponent = (props) => {\n  return <h1>Hello, {props.name}!</h1>;\n};\n\nexport default MyComponent;"
},
{
"step": "Pass a value for the prop when using the component.",
"code": "import React from 'react';\nimport MyComponent from './MyComponent';\n\nconst App = () => {\n  return (\n    <div>\n      <MyComponent name='John' />\n    </div>\n  );\n};\n\nexport default App;"
}
]
},
{
"exercise_number":5,
"title":"React Props",
"objective":"To understand how to use props to pass data and functionality between React components.",
"practical_application":"Imagine you are building a React application that displays a list of products. You want to create a component that displays each product's name, price, and a button to add it to the user's cart.",
"step_by_step_solution":[
{
"step":"Create a new React component that accepts props.",
"code":"function Product(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>${props.price}</p>\n      <button>Add to cart</button>\n    </div>\n  );\n}"
},
{
"step":"Render the component and pass in the necessary props.",
"code":"<Product name='Shirt' price='20.00' />"
}
]
},
{
"exercise_number":6,
"title":"React State",
"objective":"To understand how to use state to manage data and re-render React components.",
"practical_application":"Imagine you are building a React application that allows users to create and edit notes. You want to create a component that displays a note's title and content, and allows the user to edit the note's content.",
"step_by_step_solution":[
{
"step":"Create a new React component that uses state to manage data.",
"code":"class Note extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      content: props.content,\n      isEditing: false\n    };\n  }\n\n  render() {\n    if (this.state.isEditing) {\n      return (\n        <div>\n          <input type='text' value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />\n          <button onClick={() => this.setState({ isEditing: false })}>Save</button>\n        </div>\n      );\n    }\n\n    return (\n      <div>\n        <h2>{this.props.title}</h2>\n        <p>{this.state.content}</p>\n        <button onClick={() => this.setState({ isEditing: true })}>Edit</button>\n      </div>\n    );\n  }\n}"
},
{
"step":"Render the component and pass in the necessary props.",
"code":"<Note title='My Note' content='This is the content of my note.' />"
}
]
},
{
"exercise_number":7,
"title":"React State and Props",
"objective":"To understand how to use state and props in a React component.",
"practical_application":"Imagine you are building a form in a React application. You want to capture user input and use that input to update the state of your component.",
"step_by_step_solution":[
{
"step":"Define your component's initial state.",
"code":"class MyForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: ''\n    };\n  }\n\n  render() {\n    // Render form here\n  }\n}"
},
{
"step":"Update the state of your component when user input changes.",
"code":"handleChange = (event) => {\n  const { name, value } = event.target;\n\n  this.setState({\n    [name]: value\n  });\n}"
},
{
"step":"Pass state and any necessary functions as props to child components.",
"code":"render() {\n  return (\n    <form onSubmit={this.handleSubmit}>\n      <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />\n      <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />\n      <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />\n      <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />\n      <button type='submit'>Submit</button>\n    </form>\n  );\n}"
}
]
},
{
"exercise_number":8,
"title":"React Events",
"objective":"To understand how to handle events in a React component.",
"practical_application":"Imagine you are building a form in a React application. You want to handle form submissions and display a success message to the user when the form is successfully submitted.",
"step_by_step_solution":[
{
"step":"Create a handleSubmit function that handles the form submission event.",
"code":"handleSubmit = (event) => {\n  event.preventDefault();\n\n  // Handle form submission here\n}"
},
{
"step":"Bind the handleSubmit function to the component's context.",
"code":"constructor(props) {\n  super(props);\n\n  this.state = {\n    // Initial state here\n  };\n\n  this.handleSubmit = this.handleSubmit.bind(this);\n}"
},
{
"step":"Add an onSubmit event listener to your form.",
"code":"render() {\n  return (\n    <form onSubmit={this.handleSubmit}>\n      // Form fields here\n      <button type='submit'>Submit</button>\n    </form>\n  );\n}"
},
{
"step":"Display a success message to the user when the form is submitted.",
"code":"render() {\n  return (\n    <div>\n      {this.state.formSubmitted && <div>Form submitted successfully!</div>}\n      <form onSubmit={this.handleSubmit}>\n        // Form fields here\n        <button type='submit'>Submit</button>\n      </form>\n    </div>\n  );\n}"
}
]
},
{
"exercise_number": 9,
"title": "React Hooks",
"objective": "To learn how to use React Hooks to manage state and side effects in a functional React component.",
"practical_application": "Imagine you are building a React component that needs to fetch data from an API and display it on the page. You want to use React Hooks to manage the component's state and side effects.",
"step_by_step_solution": [
{
"step": "Import the useState and useEffect hooks from the React library.",
"code": "import React, { useState, useEffect } from 'react';"
},
{
"step": "Declare state variables using the useState hook.",
"code": "const [data, setData] = useState(null);\nconst [isLoading, setIsLoading] = useState(true);\nconst [error, setError] = useState(null);"
},
{
"step": "Fetch data from an API using the useEffect hook.",
"code": "useEffect(() => {\n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => {\n      setData(data);\n      setIsLoading(false);\n    })\n    .catch(error => {\n      setError(error);\n      setIsLoading(false);\n    });\n}, []);"
},
{
"step": "Render the fetched data in the component.",
"code": "{isLoading ? (\n  <div>Loading...</div>\n) : error ? (\n  <div>Error: {error.message}</div>\n) : (\n  <div>{data}</div>\n)}"
}
]
},{
"exercise_number": 10,
"title": "React Props",
"objective": "To understand how to pass data between components using React props.",
"practical_application": "Imagine you are building a simple blog using React. You want to display a list of blog posts on the homepage.",
"step_by_step_solution": [
{
"step": "Create a new component that renders a single blog post.",
"code": "function BlogPost(props) {\n  return (\n    <div>\n      <h2>{props.title}</h2>\n      <p>{props.content}</p>\n    </div>\n  );\n}"
},
{
"step": "Create a new component that renders a list of blog posts.",
"code": "function BlogList(props) {\n  const posts = props.posts.map(post => {\n    return (\n      <BlogPost title={post.title} content={post.content} />\n    );\n  });\n\n  return (\n    <div>\n      {posts}\n    </div>\n  );\n}"
},
{
"step": "Pass data to the BlogList component using props.",
"code": "const posts = [\n  {\n    title: 'My First Blog Post',\n    content: 'Lorem ipsum dolor sit amet...'\n  },\n  {\n    title: 'My Second Blog Post',\n    content: 'Lorem ipsum dolor sit amet...'\n  },\n  {\n    title: 'My Third Blog Post',\n    content: 'Lorem ipsum dolor sit amet...'\n  }\n];\n\n<BlogList posts={posts} />"
}
]
},
{
"exercise_number": 11,
"title": "React Lifecycle Methods",
"objective": "To learn the various lifecycle methods available in React and how to use them.",
"practical_application": "Imagine you are building a dashboard in React that displays real-time data. You want to use lifecycle methods to fetch the data and update the dashboard as necessary.",
"step_by_step_solution": [
{
"step": "Use the componentDidMount() method to fetch data from an external source.",
"code": "componentDidMount() {\n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => this.setState({ data }))\n    .catch(error => console.error(error));\n}"
},
{
"step": "Use the componentDidUpdate() method to update the component when its props or state changes.",
"code": "componentDidUpdate(prevProps, prevState) {\n  if (this.props.data !== prevProps.data) {\n    // Data has changed, do something\n  }\n}"
},
{
"step": "Use the componentWillUnmount() method to clean up any resources used by the component.",
"code": "componentWillUnmount() {\n  // Clean up resources here\n}"
}
]
},
{
"exercise_number": 12,
"title": "React Context",
"objective": "To learn how to use React Context to share data between components without passing props down the component tree.",
"practical_application": "Imagine you are building a large application in React with multiple components that need access to the same data. You want to use React Context to make the data available to all components without passing props down the component tree.",
"step_by_step_solution": [
{
"step": "Create a new context using the createContext() method.",
"code": "const MyContext = React.createContext();"
},
{
"step": "Wrap the component tree in a Provider component to make the context available to all child components.",
"code": "<MyContext.Provider value={/* data goes here */}>\n  <App />\n</MyContext.Provider>"
},
{
"step": "Access the context data in child components using the useContext() hook.",
"code": "const data = useContext(MyContext);"
}
]
},
{
"exercise_number": 13,
"title": "React Router",
"objective": "To learn how to use React Router to implement client-side routing in a React application.",
"practical_application": "Imagine you are building a large single-page application in React with multiple pages. You want to use React Router to implement client-side routing.",
"step_by_step_solution": [
{
"step": "Install React Router using npm or yarn.",
"code": "npm install react-router-dom"
},
{
"step": "Wrap your component tree in a Router component.",
"code": "<Router>\n  <App />\n</Router>"
},
{
"step": "Define your routes using Route components.",
"code": "<Route exact path='/' component={Home} />\n<Route path='/about' component={About} />"
},
{
"step": "Create links between pages using the Link component.",
"code": "<Link to='/about'>About</Link>"
}
]
},
{
"exercise_number":14,
"title":"Higher-Order Components",
"objective":"To understand how to use higher-order components (HOCs) in React.",
"practical_application":"Imagine you have a React application that requires authentication to access certain components. You want to use an HOC to handle authentication in a reusable way.",
"step_by_step_solution":[
{
"step":"Create a higher-order component that handles authentication.",
"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nfunction withAuth(ComponentToProtect) {\n  return class extends Component {\n    static propTypes = {\n      history: PropTypes.object.isRequired\n    }\n    constructor() {\n      super();\n\n      this.state = {\n        loading: true,\n        redirect: false,\n      };\n    }\n    componentDidMount() {\n      fetch('/checkToken')\n        .then(res => {\n          if (res.status === 200) {\n            this.setState({ loading: false });\n          } else {\n            const error = new Error(res.error);\n            throw error;\n          }\n        })\n        .catch(err => {\n          console.error(err);\n          this.setState({ loading: false, redirect: true });\n        });\n    }\n    render() {\n      const { loading, redirect } = this.state;\n      if (loading) {\n        return null;\n      }\n      if (redirect) {\n        return <Redirect to='/login' />;\n      }\n      return <ComponentToProtect {...this.props} />;\n    }\n  }\n}\n\nexport default withAuth;"
},
{
"step":"Wrap your components that require authentication in the HOC.",
"code":"import withAuth from './withAuth';\nimport MyComponent from './MyComponent';\n\nconst MyProtectedComponent = withAuth(MyComponent);\n\nexport default MyProtectedComponent;"
}
]
},
{
"exercise_number": 15,
"title": "React PropTypes",
"objective": "To understand how to use PropTypes to define the expected data type of each prop in a React component.",
"practical_application": "Imagine you are building a component that receives several props from its parent component. You want to ensure that the parent is passing the correct data type to the child component.",
"step_by_step_solution": [
{
"step": "Import PropTypes from the prop-types library.",
"code": "import PropTypes from 'prop-types';"
},
{
"step": "Define the expected data type for each prop in your component using PropTypes.",
"code": "MyComponent.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number.isRequired,\n  isMarried: PropTypes.bool.isRequired\n};"
},
{
"step": "Add default values for your props using defaultProps.",
"code": "MyComponent.defaultProps = {\n  name: 'John Doe',\n  age: 25,\n  isMarried: false\n};"
}
]
},
{
"exercise_number": 16,
"title": "React Higher-Order Components",
"objective": "To understand how to use Higher-Order Components (HOCs) to add additional functionality to a React component.",
"practical_application": "Imagine you have a component that needs to perform a specific action every time it is rendered. You want to extract this functionality into a separate HOC to make it reusable across other components.",
"step_by_step_solution": [
{
"step": "Create a new Higher-Order Component that wraps your existing component.",
"code": "function withAction(Component) {\n  return class extends React.Component {\n    componentDidMount() {\n      console.log('Component was rendered.');\n    }\n\n    render() {\n      return <Component {...this.props} />;\n    }\n  };\n}"
},
{
"step": "Wrap your existing component in the HOC to add the additional functionality.",
"code": "const EnhancedComponent = withAction(MyComponent);"
},
{
"step": "Render the new EnhancedComponent instead of the original MyComponent.",
"code": "<EnhancedComponent name='John Doe' />"
}
]
},
{
"exercise_number": 17,
"title": "React Component Lifecycle Methods",
"objective": "To understand how React component lifecycle methods work and how to use them in your components.",
"practical_application": "Imagine you have a React component that needs to perform some initialization when it is first rendered, and then clean up when it is removed from the DOM. You want to use lifecycle methods to handle these tasks.",
"step_by_step_solution": [
{
"step": "Add the componentDidMount() lifecycle method to your component.",
"code": "componentDidMount() {\n  console.log('Component has mounted.');\n}"
},
{
"step": "Add the componentWillUnmount() lifecycle method to your component.",
"code": "componentWillUnmount() {\n  console.log('Component is about to be unmounted.');\n}"
}
]
},
{
"exercise_number": 18,
"title": "React Router",
"objective": "To learn how to use React Router to handle client-side routing in a React application.",
"practical_application": "Imagine you have a React application that needs to handle routing between different pages without refreshing the entire page. You want to use React Router to handle client-side routing.",
"step_by_step_solution": [
{
"step": "Install React Router and any necessary dependencies.",
"code": "npm install react-router-dom"
},
{
"step": "Wrap your application's components with the BrowserRouter component.",
"code": "import { BrowserRouter } from 'react-router-dom';\n\nReactDOM.render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>,\n  document.getElementById('root')\n);"
},
{
"step": "Create Route components that match the URLs for each of your application's pages.",
"code": "import { Route } from 'react-router-dom';\n\n<Route exact path='/' component={HomePage} />\n<Route path='/about' component={AboutPage} />\n<Route path='/contact' component={ContactPage} />"
}
]
},
{
"exercise_number": 19,
"title": "React Lifecycle Methods",
"objective": "To learn how to use the lifecycle methods in React to handle component creation, updates, and deletion.",
"practical_application": "Imagine you are building a messaging application in React. You want to update the user interface whenever a new message is received or when a message is deleted.",
"step_by_step_solution": [
{
"step": "Use the componentDidMount() method to update the user interface when the component is first created.",
"code": "componentDidMount() {\n  // Fetch data or perform other side effects here\n}"
},
{
"step": "Use the componentDidUpdate() method to update the user interface when the component is updated.",
"code": "componentDidUpdate(prevProps, prevState) {\n  // Check if the props or state have changed and update the UI accordingly\n}"
},
{
"step": "Use the componentWillUnmount() method to clean up any resources used by the component before it is deleted.",
"code": "componentWillUnmount() {\n  // Clean up resources such as event listeners, timers, or network requests\n}"
}
]
},
{
"exercise_number": 20,
"title": "React Router",
"objective": "To learn how to use React Router to create client-side routes in a React application.",
"practical_application": "Imagine you are building a single-page application in React that needs to display different content based on the current URL.",
"step_by_step_solution": [
{
"step": "Install React Router and its dependencies.",
"code": "npm install react-router-dom"
},
{
"step": "Wrap your app with the Router component.",
"code": "import { BrowserRouter as Router } from 'react-router-dom';\n\nconst App = () => {\n  return (\n    <Router>\n      {/* Your app components here */}\n    </Router>\n  );\n};"
},
{
"step": "Define your routes using the Route component.",
"code": "import { Route } from 'react-router-dom';\n\nconst App = () => {\n  return (\n    <Router>\n      <Route exact path='/' component={Home} />\n      <Route path='/about' component={About} />\n      <Route path='/contact' component={Contact} />\n    </Router>\n  );\n};"
}
]
},
{
"exercise_number": 21,
"title": "React Lifecycle Methods",
"objective": "To learn how to use React lifecycle methods to perform actions at specific points in a component's lifecycle.",
"practical_application": "Imagine you are building a news website that displays a list of articles. You want to load the list of articles from an external API when the component mounts.",
"step_by_step_solution": [
{
"step": "Use the componentDidMount method to load data from an external API.",
"code": "class ArticleList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      articles: [],\n    };\n  }\n\n  async componentDidMount() {\n    const response = await fetch('https://api.example.com/articles');\n    const articles = await response.json();\n    this.setState({ articles });\n  }\n\n  render() {\n    return (\n      <ul>\n        {this.state.articles.map(article => (\n          <li key={article.id}>{article.title}</li>\n        ))}\n      </ul>\n    );\n  }\n}"
}
]
},
{
"exercise_number": 22,
"title": "React Lifecycle Methods",
"objective": "To learn how to use React lifecycle methods to handle updates to a component's state or props.",
"practical_application": "Imagine you are building a weather application that displays the temperature and humidity for a given location. You want to update the display when the user enters a new location.",
"step_by_step_solution": [
{
"step": "Use the componentDidUpdate method to update the component when the user enters a new location.",
"code": "class WeatherDisplay extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      temperature: null,\n      humidity: null,\n    };\n  }\n\n  async componentDidUpdate(prevProps) {\n    if (this.props.location !== prevProps.location) {\n      const response = await fetch(`https://api.example.com/weather?location=${this.props.location}`);\n      const { temperature, humidity } = await response.json();\n      this.setState({ temperature, humidity });\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Temperature: {this.state.temperature}</p>\n        <p>Humidity: {this.state.humidity}</p>\n      </div>\n    );\n  }\n}"
}
]
},
{
"exercise_number":23,
"title":"React Router",
"objective":"To learn how to use React Router to create client-side routing in a React application.",
"practical_application":"Imagine you are building a React application that has multiple views or pages. You want to use client-side routing to navigate between these pages without reloading the entire application.",
"step_by_step_solution":[
{
"step":"Install React Router and any additional dependencies you may need.",
"code":"npm install react-router-dom"
},
{
"step":"Create a router component that defines the different routes in your application.",
"code":"import React from 'react';\nimport { BrowserRouter as Router, Switch, Route } from 'react-router-dom';\nimport HomePage from './pages/HomePage';\nimport AboutPage from './pages/AboutPage';\n\nconst AppRouter = () => {\n  return (\n    <Router>\n      <Switch>\n        <Route exact path='/' component={HomePage} />\n        <Route exact path='/about' component={AboutPage} />\n      </Switch>\n    </Router>\n  );\n};\n\nexport default AppRouter;"
},
{
"step":"Create page components that correspond to the routes in your router.",
"code":"import React from 'react';\n\nconst HomePage = () => {\n  return <h1>Welcome to my website!</h1>;\n};\n\nexport default HomePage;"
},
{
"step":"Add links to your pages in your application's navigation.",
"code":"import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Navigation = () => {\n  return (\n    <nav>\n      <ul>\n        <li><Link to='/'>Home</Link></li>\n        <li><Link to='/about'>About</Link></li>\n      </ul>\n    </nav>\n  );\n};\n\nexport default Navigation;"
}
]
},
{
"exercise_number":24,
"title":"React Redux",
"objective":"To learn how to use React Redux to manage state in a React application.",
"practical_application":"Imagine you have a React application that uses a lot of shared state between components. You want to improve the performance of your application by managing the state in a single location.",
"step_by_step_solution":[
{
"step":"Install React Redux and any additional dependencies you may need.",
"code":"npm install react-redux"
},
{
"step":"Create a Redux store using the createStore function from the redux package.",
"code":"import { createStore } from 'redux';\n\nconst store = createStore(reducer);"
},
{
"step":"Create a reducer function that specifies how the application's state should change in response to actions.",
"code":"const reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { count: state.count + 1 };\n    case 'DECREMENT':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n};"
},
{
"step":"Wrap your application in a Provider component from React Redux to give your components access to the Redux store.",
"code":"import { Provider } from 'react-redux';\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <MyComponent />\n    </Provider>\n  );\n};"
},
{
"step":"Use the useSelector hook to access the Redux store's state in your components.",
"code":"import { useSelector } from 'react-redux';\n\nconst MyComponent = () => {\n  const count = useSelector(state => state.count);\n\n  return (\n    <div>\n      <h1>Count: {count}</h1>\n    </div>\n  );\n};"
},
{
"step":"Use the useDispatch hook to dispatch actions to the Redux store from your components.",
"code":"import { useDispatch } from 'react-redux';\n\nconst MyComponent = () => {\n  const dispatch = useDispatch();\n\n  const handleIncrement = () => {\n    dispatch({ type: 'INCREMENT' });\n  };\n\n  const handleDecrement = () => {\n    dispatch({ type: 'DECREMENT' });\n  };\n\n  return (\n    <div>\n      <button onClick={handleIncrement}>+</button>\n      <button onClick={handleDecrement}>-</button>\n    </div>\n  );\n};"
}
]
},  {
"exercise_number": 25,
"title": "React Hooks",
"objective": "To understand how to use React Hooks to manage state and perform other functions in function components.",
"practical_application": "Imagine you are building a form in a React application and need to manage user input as state. You want to use function components for your form components because they are simpler than class components.",
"step_by_step_solution": [
{
"step": "Import the useState hook from the React library in your function component.",
"code": "import React, { useState } from 'react';"
},
{
"step": "Call the useState hook in your function component to create a state variable and a function to update it.",
"code": "const [inputValue, setInputValue] = useState('');"
},
{
"step": "Use the state variable in your component to render the current value of the input element.",
"code": "<input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />"
}
]
},
{
"exercise_number": 26,
"title": "React Hooks",
"objective": "To understand how to use the useEffect hook to perform side effects in function components.",
"practical_application": "Imagine you are building a news application that needs to make API requests to fetch the latest news articles. You want to use a function component to render the news articles and the useEffect hook to fetch the articles from the API.",
"step_by_step_solution": [
{
"step": "Import the useEffect hook from the React library in your function component.",
"code": "import React, { useState, useEffect } from 'react';"
},
{
"step": "Call the useState hook in your function component to create a state variable to hold the news articles.",
"code": "const [articles, setArticles] = useState([]);"
},
{
"step": "Call the useEffect hook in your function component to fetch the news articles from the API.",
"code": "useEffect(() => {\n  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')\n    .then(response => response.json())\n    .then(data => setArticles(data.articles));\n}, []);"
},
{
"step": "Render the news articles in your component.",
"code": "{articles.map(article => (\n  <div key={article.url}>\n    <h2>{article.title}</h2>\n    <p>{article.description}</p>\n  </div>\n))}"
}
]
},{
"exercise_number": 27,
"title": "React Hooks",
"objective": "To understand how to use the useContext hook to pass data between components in a React application.",
"practical_application": "Imagine you are building a shopping cart application that needs to keep track of the items added to the cart. You want to use the useContext hook to pass the cart data between the different components of your application.",
"step_by_step_solution": [
{
"step": "Create a new context object using the createContext function from the React library.",
"code": "const CartContext = React.createContext();"
},
{
"step": "Wrap your application with the CartContext.Provider component, passing the cart data to the value prop.",
"code": "<CartContext.Provider value={cartData}>\n <App />\n</CartContext.Provider>"
},
{
"step": "Use the useContext hook to access the cart data in your components.",
"code": "const cartData = useContext(CartContext);"
}
]
},
{
"exercise_number": 28,
"title": "React Hooks",
"objective": "To learn how to use the useReducer hook to manage state in a React application.",
"practical_application": "Imagine you are building a calculator application that needs to keep track of the current value and the operation being performed. You want to use the useReducer hook to manage the state of your application.",
"step_by_step_solution": [
{
"step": "Create a reducer function that takes the current state and an action object, and returns the new state based on the action type.",
"code": "function calculatorReducer(state, action) {\n switch (action.type) {\n case 'ADD':\n return { value: state.value + action.payload };\n case 'SUBTRACT':\n return { value: state.value - action.payload };\n case 'CLEAR':\n return { value: 0 };\n default:\n return state;\n }\n}"
},
{
"step": "Call the useReducer hook in your component, passing the reducer function and the initial state.",
"code": "const [state, dispatch] = useReducer(calculatorReducer, { value: 0 });"
},
{
"step": "Dispatch actions to the reducer to update the state of your application.",
"code": "dispatch({ type: 'ADD', payload: 10 });"
}
]
},
{
"exercise_number": 29,
"title": "React Router",
"objective": "To understand how to use React Router to implement client-side routing in a React application.",
"practical_application": "Imagine you are building a single-page application that needs to have different views based on the URL. You want to use React Router to implement client-side routing and render the appropriate component based on the URL.",
"step_by_step_solution": [
{
"step": "Install React Router and any necessary dependencies using npm or yarn.",
"code": "npm install react-router-dom"
},
{
"step": "Import the necessary components from React Router.",
"code": "import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';"
},
{
"step": "Wrap your entire application in a Router component.",
"code": "<Router>\n <App />\n</Router>"
},
{
"step": "Add a Switch component to your application to define the routes and their corresponding components.",
"code": "<Switch>\n <Route exact path='/' component={Home} />\n <Route path='/about' component={About} />\n <Route path='/contact' component={Contact} />\n</Switch>"
},
{
"step": "Create a navigation bar with links to the different routes using the Link component.",
"code": "<nav>\n <ul>\n <li>\n <Link to='/'>Home</Link>\n </li>\n <li>\n <Link to='/about'>About</Link>\n </li>\n <li>\n <Link to='/contact'>Contact</Link>\n </li>\n </ul>\n</nav>"
},
{
"step": "Create the components that correspond to each route.",
"code": "const Home = () => {\n return <h1>Home Page</h1>;\n};\n\nconst About = () => {\n return <h1>About Page</h1>;\n};\n\nconst Contact = () => {\n return <h1>Contact Page</h1>;\n};"
}
]
},
{
"exercise_number": 30,
"title": "React Router",
"objective": "To learn how to use React Router to handle routing in a React application.",
"practical_application": "Imagine you are building a multi-page React application that requires client-side routing. You want to use React Router to handle the routing.",
"step_by_step_solution": [
{
"step": "Install React Router using npm or yarn.",
"code": "npm install react-router-dom"
},
{
"step": "Wrap your application with a Router component.",
"code": "import { BrowserRouter as Router } from 'react-router-dom';\n\nconst App = () => {\n  return (\n    <Router>\n      <div>\n        ...\n      </div>\n    </Router>\n  );\n};"
},
{
"step": "Define your routes using Route components.",
"code": "import { Route } from 'react-router-dom';\n\nconst App = () => {\n  return (\n    <Router>\n      <div>\n        <Route path='/' exact component={Home} />\n        <Route path='/about' component={About} />\n        <Route path='/contact' component={Contact} />\n      </div>\n    </Router>\n  );\n};"
},
{
"step": "Define your page components that will be rendered for each route.",
"code": "const Home = () => {\n  return (\n    <div>\n      <h1>Home Page</h1>\n      <p>Welcome to the home page.</p>\n    </div>\n  );\n};\n\nconst About = () => {\n  return (\n    <div>\n      <h1>About Page</h1>\n      <p>Welcome to the about page.</p>\n    </div>\n  );\n};\n\nconst Contact = () => {\n  return (\n    <div>\n      <h1>Contact Page</h1>\n      <p>Welcome to the contact page.</p>\n    </div>\n  );\n};"
}
]
},
{
"exercise_number": 31,
"title": "React Router",
"objective": "To understand how to use React Router to add client-side routing to a React application.",
"practical_application": "Imagine you are building a multi-page web application using React. You want to add client-side routing to your application to improve the user experience and make it feel more like a traditional website.",
"step_by_step_solution": [
{
"step": "Install React Router and its dependencies.",
"code": "npm install react-router-dom"
},
{
"step": "Wrap your app with a Router component.",
"code": "import { BrowserRouter as Router } from 'react-router-dom';\n\n<Router>\n  <App />\n</Router>"
},
{
"step": "Add Route components to your application to define the routes for your pages.",
"code": "import { Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <div>\n      <Route exact path='/' component={Home} />\n      <Route path='/about' component={About} />\n      <Route path='/contact' component={Contact} />\n    </div>\n  );\n}"
},
{
"step": "Add links to your pages using the Link component from React Router.",
"code": "import { Link } from 'react-router-dom';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <ul>\n        <li><Link to='/'>Home</Link></li>\n        <li><Link to='/about'>About</Link></li>\n        <li><Link to='/contact'>Contact</Link></li>\n      </ul>\n    </nav>\n  );\n}"
}
]
},
{
"exercise_number": 32,
"title": "React Native Styling",
"objective": "To understand how to use the StyleSheet API to style React Native components.",
"practical_application": "Imagine you are building a mobile application in React Native. You want to style your components using the StyleSheet API to ensure a consistent look and feel across the app.",
"step_by_step_solution": [
{
"step": "Import the StyleSheet API from the React Native library.",
"code": "import { StyleSheet } from 'react-native';"
},
{
"step": "Define a stylesheet object to hold your styles.",
"code": "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n  },\n  text: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10,\n  },\n});"
},
{
"step": "Apply styles to your components using the style prop.",
"code": "<View style={styles.container}>\n  <Text style={styles.text}>Hello, world!</Text>\n</View>"
}
]
},{
"exercise_number": 33,
"title": "React Context",
"objective": "To understand how to use React Context to share data between components without prop drilling.",
"practical_application": "Imagine you have a global theme in your React application that needs to be used across many different components. You want to use React Context to pass the theme data down to child components without prop drilling.",
"step_by_step_solution": [
{
"step": "Create a new context using the createContext method from the React library.",
"code": "import React from 'react';\n\nconst ThemeContext = React.createContext();"
},
{
"step": "Create a new state variable to hold the theme data in your top-level component.",
"code": "const [theme, setTheme] = useState('light');"
},
{
"step": "Wrap your application's components in the ThemeContext.Provider component and pass the theme data as a value prop.",
"code": "<ThemeContext.Provider value={theme}>\n  <App />\n</ThemeContext.Provider>"
},
{
"step": "In child components that need to access the theme data, use the useContext hook to access the data.",
"code": "import React, { useContext } from 'react';\nimport ThemeContext from './ThemeContext';\n\nconst MyComponent = () => {\n  const theme = useContext(ThemeContext);\n  return <div style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#000000' }}>Hello, World!</div>;\n};"
}
]
},
{
"exercise_number": 34,
"title": "React Portals",
"objective": "To learn how to use React portals to render a component outside of its parent DOM hierarchy.",
"practical_application": "Imagine you have a React component that needs to be rendered at the top-level of your application's DOM hierarchy, but you want to keep it as a child component of another component. You want to use React portals to render the component at the top-level without restructuring your component hierarchy.",
"step_by_step_solution": [
{
"step": "Create a new div at the top-level of your HTML document to serve as the mount point for your portal.",
"code": "<div id='portal-root'></div>"
},
{
"step": "Import the createPortal function from the React DOM library.",
"code": "import React from 'react';\nimport { createPortal } from 'react-dom';"
},
{
"step": "Create a new component to be rendered by the portal.",
"code": "const MyPortal = () => {\n  return <div>Portal Content</div>;\n};"
},
{
"step": "In the parent component, render the portal using the createPortal function and mount it to the portal-root div.",
"code": "import React from 'react';\nimport { createPortal } from 'react-dom';\n\nconst MyComponent = () => {\n  return createPortal(\n    <MyPortal />, // The component to be rendered in the portal\n    document.getElementById('portal-root') // The DOM element to mount the portal to\n  );\n};"
}
]
},
{
"exercise_number":35,
"title":"React Redux",
"objective":"To understand how to use React Redux to manage state in a React application.",
"practical_application":"Imagine you are building a shopping cart application that requires the ability to add and remove items from the cart. You want to use React Redux to manage the application's state.",
"step_by_step_solution":[
{
"step":"Install the necessary dependencies, including React Redux and Redux.",
"code":"npm install react-redux redux"
},
{
"step":"Create a Redux store to hold your application's state.",
"code":"import { createStore } from 'redux';\n\nconst store = createStore(reducer);"
},
{
"step":"Create a reducer function to handle updates to your application's state.",
"code":"const reducer = (state = { cartItems: [] }, action) => {\n switch (action.type) {\n case 'ADD_ITEM':\n return { ...state, cartItems: [...state.cartItems, action.payload] };\n case 'REMOVE_ITEM':\n return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };\n default:\n return state;\n }\n};"
},
{
"step":"Wrap your application in a Provider component from React Redux to provide the store to all child components.",
"code":"import { Provider } from 'react-redux';\n\nconst App = () => {\n return (\n <Provider store={store}>\n <ShoppingCart />\n </Provider>\n );\n};"
},
{
"step":"Use the useSelector hook from React Redux to access data from the store in your components.",
"code":"import { useSelector } from 'react-redux';\n\nconst ShoppingCart = () => {\n const cartItems = useSelector(state => state.cartItems);\n\n return (\n <div>\n {cartItems.map(item => (\n <div key={item.id}>\n <h2>{item.name}</h2>\n <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>Remove</button>\n </div>\n ))}\n </div>\n );\n};"
},
{
"step":"Use the useDispatch hook from React Redux to dispatch actions to the store from your components.",
"code":"import { useDispatch } from 'react-redux';\n\nconst ShoppingCart = () => {\n const dispatch = useDispatch();\n\n const handleAddItem = () => {\n dispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Item 1' } });\n };\n\n return (\n <div>\n <button onClick={handleAddItem}>Add Item</button>\n </div>\n );\n};"
}
]
},{
"exercise_number": 36,
"title": "React Higher-Order Components",
"objective": "To learn how to use higher-order components to share functionality between multiple React components.",
"practical_application": "Imagine you have several React components that require the same functionality, such as authentication or data fetching. You want to share this functionality between the components without duplicating code.",
"step_by_step_solution": [
{
"step": "Create a higher-order component that accepts a component as a parameter and returns a new component with the shared functionality.",
"code": "import React from 'react';\n\nconst withSharedFunctionality = (WrappedComponent) => {\n const NewComponent = (props) => {\n // Add shared functionality here\n return <WrappedComponent {...props} />;\n };\n return NewComponent;\n};"
},
{
"step": "Wrap each component that requires the shared functionality with the higher-order component.",
"code": "const ComponentWithSharedFunctionality = withSharedFunctionality(MyComponent);"
}
]
},{
"exercise_number":37,
"title":"React Context",
"objective":"To learn how to use React context to share data between components without passing props down the component tree.",
"practical_application":"Imagine you have a large React application with several nested components. You want to share data between these components without passing props down the component tree, as this can become unwieldy and difficult to manage.",
"step_by_step_solution":[
{
"step":"Create a new context using the createContext function.",
"code":"import React from 'react';\n\nconst MyContext = React.createContext(defaultValue);"
},
{
"step":"Wrap the components that need to access the context in a Context Provider component, passing in the data you want to share as a prop.",
"code":"const App = () => {\n return (\n <MyContext.Provider value={data}>\n <MyComponent />\n </MyContext.Provider>\n );\n};"
},
{
"step":"Access the context data in the child components using the useContext hook.",
"code":"import React, { useContext } from 'react';\n\nconst MyComponent = () => {\n const data = useContext(MyContext);\n return <div>{data}</div>;\n};"
}
]
},{
"exercise_number": 38,
"title": "React Context",
"objective": "To learn how to use React context to pass data down the component tree without using props.",
"practical_application": "Imagine you are building a multi-page website with a navigation bar that needs to update its state based on the current page. You want to use React context to pass the current page down to the navigation bar without passing it down as a prop through all of the intermediate components.",
"step_by_step_solution": [
{
"step": "Create a new context object using the createContext function from the React library.",
"code": "import React from 'react';\n\nconst PageContext = React.createContext('home');"
},
{
"step": "Wrap the top-level component of your application with the context provider component and set the value prop to the current page.",
"code": "<PageContext.Provider value='about'>\n <App />\n</PageContext.Provider>"
},
{
"step": "In any component that needs to access the current page, use the useContext hook to retrieve the value from the context.",
"code": "import React, { useContext } from 'react';\nimport PageContext from './PageContext';\n\nconst NavigationBar = () => {\n const currentPage = useContext(PageContext);\n // Render the navigation bar using the current page\n};"
}
]
},{
"exercise_number": 39,
"title": "React Server Components",
"objective": "To learn about React Server Components and how they can improve server-side rendering.",
"practical_application": "Imagine you have a large-scale React application that requires server-side rendering for performance and SEO purposes. You want to use React Server Components to optimize your application's server-side rendering performance.",
"step_by_step_solution": [
{
"step": "Install the experimental React Server Components package.",
"code": "npm install react-server-components@experimental"
},
{
"step": "Create a new server component that defines the data requirements for your application.",
"code": "import React from 'react';\nimport { createServerComponent } from 'react-server-components';\n\nconst ArticleList = createServerComponent(\n  async ({ page }) => {\n    const res = await fetch(`https://api.example.com/articles?page=${page}`);\n    const data = await res.json();\n    return { data };\n  },\n  ({ data }) => {\n    return (\n      <ul>\n        {data.map(article => (\n          <li key={article.id}>{article.title}</li>\n        )))}\n      </ul>\n    );\n  }\n);"
},
{
"step": "Use the server component in your application to perform server-side rendering of your data.",
"code": "<ArticleList page={1} />"
}
]
},
{
"exercise_number": 40,
"title": "React Native Animations",
"objective": "To learn how to use React Native's Animated API to create animations in a mobile application.",
"practical_application": "Imagine you are building a mobile application and want to add animations to enhance the user experience. You want to use React Native's Animated API to create and control your animations.",
"step_by_step_solution": [
{
"step": "Import the Animated API from the React Native library.",
"code": "import { Animated } from 'react-native';"
},
{
"step": "Create a new Animated.Value to hold the animated value for your animation.",
"code": "const animatedValue = new Animated.Value(0);"
},
{
"step": "Create a new Animated function to define the animation.",
"code": "const startAnimation = () => {\n  Animated.timing(animatedValue, {\n    toValue: 1,\n    duration: 1000\n  }).start();\n};"
},
{
"step": "Attach the Animated.Value to a component's style to animate it.",
"code": "<Animated.View style={{ opacity: animatedValue }}>"
}
]
},{
"exercise_number": 41,
"title": "React Context",
"objective": "To understand how to use React Context to share data between components without passing props.",
"practical_application": "Imagine you are building a shopping cart application in React. You want to share the cart data between components without passing it down as props through multiple levels of the component tree.",
"step_by_step_solution": [
{
"step": "Create a new context object using the createContext function from the React library.",
"code": "import React from 'react';\n\nconst CartContext = React.createContext();"
},
{
"step": "Wrap the components that need access to the cart data in a CartProvider component that provides the cart data using the context provider.",
"code": "const CartProvider = ({ children }) => {\n const [cart, setCart] = React.useState([]);\n\n const addToCart = (product) => {\n setCart([...cart, product]);\n };\n\n return (\n <CartContext.Provider value={{ cart, addToCart }}>\n {children}\n </CartContext.Provider>\n );\n};"
},
{
"step": "In the child components, access the cart data and any functions provided by the CartProvider using the useContext hook.",
"code": "import React from 'react';\nimport { CartContext } from './CartProvider';\n\nconst CartSummary = () => {\n const { cart } = React.useContext(CartContext);\n const itemCount = cart.reduce((count, item) => count + item.quantity, 0);\n\n return <div>{itemCount} items in cart</div>;\n};"
}
]
},
{
"exercise_number": 42,
"title": "React Error Boundaries",
"objective": "To understand how to use React error boundaries to handle errors in your component tree.",
"practical_application": "Imagine you are building a complex React application that has many components. You want to ensure that any errors in the component tree do not crash the entire application and can be handled gracefully.",
"step_by_step_solution": [
{
"step": "Create a new component to serve as your error boundary using the componentDidCatch lifecycle method.",
"code": "import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n constructor(props) {\n super(props);\n this.state = { hasError: false };\n }\n\n componentDidCatch(error, errorInfo) {\n // You can log the error to an error reporting service\n console.log(error, errorInfo);\n this.setState({ hasError: true });\n }\n\n render() {\n if (this.state.hasError) {\n return <h1>Something went wrong.</h1>;\n }\n return this.props.children;\n }\n}"
},
{
"step": "Wrap the components that you want to be protected by the error boundary with the ErrorBoundary component.",
"code": "<ErrorBoundary>\n <MyComponent />\n</ErrorBoundary>"
}
]
},
{
"exercise_number": 43,
"title": "React Context",
"objective": "To learn how to use React context to manage state in a React application.",
"practical_application": "Imagine you are building a shopping cart application in React. You want to use React context to manage the state of the shopping cart across multiple components.",
"step_by_step_solution": [
{
"step": "Create a new context object using the createContext function from the React library.",
"code": "import React from 'react';\n\nconst CartContext = React.createContext();"
},
{
"step": "Wrap the components that need access to the context in a CartContext.Provider component.",
"code": "<CartContext.Provider value={cart}>\n <App />\n</CartContext.Provider>"
},
{
"step": "In the child components that need access to the context, use the useContext hook to access the context.",
"code": "import React, { useContext } from 'react';\nimport CartContext from './CartContext';\n\nconst Cart = () => {\n const cart = useContext(CartContext);\n return (\n <div>\n <h2>Shopping Cart</h2>\n <ul>\n {cart.items.map(item => (\n <li key={item.id}>\n {item.name} - {item.price}\n </li>\n ))}\n </ul>\n </div>\n );\n};"
}
]
},{
"exercise_number":44,
"title":"React Context",
"objective":"To learn how to use React context to pass data between components without using props.",
"practical_application":"Imagine you have a large React application with many nested components that need to access shared data. You want to use React context to avoid passing data through each component with props.",
"step_by_step_solution":[
{
"step":"Create a new context object using the createContext function from the React library.",
"code":"import React from 'react';\n\nconst MyContext = React.createContext();"
},
{
"step":"Wrap your application or a subtree of your application in a Context.Provider component to provide the context to all child components.",
"code":"import React from 'react';\nimport MyComponent from './MyComponent';\nimport MyContext from './MyContext';\n\nconst App = () => {\n const myData = { foo: 'bar' };\n return (\n <MyContext.Provider value={myData}>\n <MyComponent />\n </MyContext.Provider>\n );\n};\n\nexport default App;"
},
{
"step":"Access the context data in your child components using the useContext hook.",
"code":"import React, { useContext } from 'react';\nimport MyContext from './MyContext';\n\nconst MyComponent = () => {\n const myData = useContext(MyContext);\n return <div>{myData.foo}</div>;\n};\n\nexport default MyComponent;"
}
]
},
{
"exercise_number":45,
"title":"React Performance Optimization",
"objective":"To learn how to optimize the performance of a React application.",
"practical_application":"Imagine you have a large React application that takes a long time to render and respond to user interactions. You want to optimize the performance of your application to improve the user experience.",
"step_by_step_solution":[
{
"step":"Use the React Developer Tools to identify the components that are causing the most performance issues.",
"code":"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
},
{
"step":"Memoize your components using the useMemo and useCallback hooks to prevent unnecessary re-renders.",
"code":"import React, { useMemo } from 'react';\n\nconst MyComponent = ({ data }) => {\n const memoizedData = useMemo(() => {\n return doExpensiveCalculation(data);\n }, [data]);\n return <div>{memoizedData}</div>;\n};"
},
{
"step":"Use the React.memo higher-order component to memoize functional components.",
"code":"import React, { memo } from 'react';\n\nconst MyComponent = memo(({ data }) => {\n return <div>{data}</div>;\n});\n\nexport default MyComponent;"
},
{
"step":"Use the shouldComponentUpdate lifecycle method to prevent unnecessary updates in class components.",
"code":"class MyComponent extends React.Component {\n shouldComponentUpdate(nextProps, nextState) {\n return nextProps.data !== this.props.data;\n }\n render() {\n return <div>{this.props.data}</div>;\n }\n}"
}
]
},{
"exercise_number": 46,
"title": "React Native Navigation",
"objective": "To learn how to use React Native Navigation to navigate between screens in a mobile application.",
"practical_application": "Imagine you are building a mobile application with multiple screens that need to be navigated. You want to use React Native Navigation to handle screen navigation and transitions.",
"step_by_step_solution": [
{
  "step": "Install React Native Navigation using npm or yarn.",
  "code": "npm install @react-navigation/native\nnpm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view"
},
{
  "step": "Install the necessary dependencies for the navigation type you want to use, such as Stack or Tab navigation.",
  "code": "npm install @react-navigation/stack"
},
{
  "step": "Import the necessary functions and components from the React Native Navigation library in your application.",
  "code": "import { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';"
},
{
  "step": "Create a new Stack Navigator using the createStackNavigator function from the React Native Navigation library.",
  "code": "const Stack = createStackNavigator();"
},
{
  "step": "Define the screens to be included in the Stack Navigator as components.",
  "code": "const HomeScreen = ({ navigation }) => {\n  return (\n    <View>\n      <Text>Welcome to the Home Screen!</Text>\n      <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />\n    </View>\n  );\n};\n\nconst DetailsScreen = ({ navigation }) => {\n  return (\n    <View>\n      <Text>Welcome to the Details Screen!</Text>\n      <Button title='Go Back' onPress={() => navigation.goBack()} />\n    </View>\n  );\n};"
},
{
  "step": "Add the screens to the Stack Navigator using the Stack.Navigator component and the Stack.Screen component for each screen.",
  "code": "<Stack.Navigator>\n  <Stack.Screen name='Home' component={HomeScreen} />\n  <Stack.Screen name='Details' component={DetailsScreen} />\n</Stack.Navigator>"
}
]
},
{
"exercise_number": 47,
"title": "React Testing",
"objective": "To learn how to use the React Testing Library to test React components.",
"practical_application": "Imagine you are building a form in a React application that requires real-time validation of user input. You want to ensure that your form's components are properly tested to catch any errors that may occur during development.",
"step_by_step_solution": [
{
  "step": "Install the React Testing Library and any additional dependencies you may need.",
  "code": "npm install --save-dev @testing-library/react @testing-library/jest-dom"
},
{
  "step": "Create a new test file for the component you want to test.",
  "code": "import React from 'react';\nimport { render } from '@testing-library/react';\nimport ComponentToTest from './ComponentToTest';\n\ndescribe('ComponentToTest', () => {\n  it('renders correctly', () => {\n    const { getByText } = render(<ComponentToTest />);\n    expect(getByText('Hello, World!')).toBeInTheDocument();\n  });\n});"
},
{
  "step": "Run the tests using the command-line interface.",
  "code": "npm test"
}
]
},
{
"exercise_number": 48,
"title": "React Native",
"objective": "To understand how to use React Native to build mobile applications.",
"practical_application": "Imagine you are building a mobile application for iOS and Android. You want to use React to build the application because you are already familiar with it.",
"step_by_step_solution": [
{
  "step": "Install the React Native CLI using npm or yarn.",
  "code": "npm install -g react-native-cli"
},
{
  "step": "Create a new React Native project using the CLI.",
  "code": "react-native init MyApp"
},
{
  "step": "Run the React Native app on your device or emulator.",
  "code": "react-native run-ios\nreact-native run-android"
},
{
  "step": "Build your React Native app using JavaScript and native components.",
  "code": "<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n  <Text>Hello, World!</Text>\n</View>"
}
]
},{
"exercise_number":49,
"title":"Server-Side Rendering with React",
"objective":"To learn how to use server-side rendering to improve the performance and SEO of a React application.",
"practical_application":"Imagine you have a large React application that takes a long time to load, especially on slower networks. You want to improve the performance of your application by using server-side rendering.",
"step_by_step_solution":[
{
"step":"Install the necessary dependencies, including React, React DOM, and Express.",
"code":"npm install react react-dom express"
},
{
"step":"Create a server-side rendering function that renders your React component to HTML.",
"code": "copy this later from the errata" },
{
"step":"Create an Express server that listens for incoming requests and renders your React component to HTML using the server-side rendering function.",
"code":"const app = express();\n\napp.get('/', (req, res) => {\n const html = renderToString(<App />);\n res.send(html);\n});\n\napp.listen(3000, () => {\n console.log('Server listening on port 3000');\n});"
},
{
"step":"Create a client-side JavaScript bundle that hydrates your server-rendered HTML with JavaScript event handlers and data.",
"code":"ReactDOM.hydrate(<App />, document.getElementById('root'));"
}
]
},{
"exercise_number":50,
"title":"React Native",
"objective":"To learn how to use React Native to build mobile applications for iOS and Android.",
"practical_application":"Imagine you want to build a mobile application for your business that is available on both iOS and Android devices. You want to use a single codebase to minimize development time and cost.",
"step_by_step_solution":[
{
"step":"Install the necessary dependencies, including React Native CLI and the Android and iOS development tools.",
"code":"npm install -g react-native-cli\nbrew install node\nbrew install watchman\nnpx react-native init MyApp"
},
{
"step":"Create a new React Native component that renders your application's user interface.",
"code":"import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst App = () => {\n return (\n <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n <Text>Hello, world!</Text>\n </View>\n );\n};\n\nexport default App;"
},
{
"step":"Add any necessary native components to your application, such as native modules or third-party libraries.",
"code":"npm install --save react-native-maps"
},
{
"step":"Run your application on a mobile device or emulator to test its functionality and user interface.",
"code":"npx react-native run-android\nnpx react-native run-ios"
}
]
}];

const react_objectives = [
  "To build an application that displays user data fetched from a public API and apply techniques to manage asynchronous data fetching.",
  "To develop a React application that uses hooks for state management, applying the useState and useEffect hooks for better code organization and flexibility.",
  "To create a form in a React application that collects user input and apply form validation techniques to ensure data quality.",
  "To construct a multi-step form in a React application that collects user information, organizing the form into separate components for improved user experience.",
  "To apply the concept of React component composition to create a reusable set of components for a user interface.",
  "To build a responsive navigation menu in a React application, applying CSS techniques to enhance the user experience across different devices.",
  "To implement a search feature in a React application that filters a list of items based on user input.",
  "To design a dynamic, paginated data table in a React application that enables users to navigate through large datasets with ease.",
  "To build an application that uses React Router to manage navigation and display different components based on the current URL.",
  "To create a to-do list application using React, applying local storage to persist user data across browser sessions.",
  "To develop a simple e-commerce application that showcases the use of React context to manage and share application state.",
  "To build an image gallery application in React that allows users to upload, manage, and display images.",
  "To design a chat application using Socket.IO and React, applying real-time communication techniques for enhanced user interaction.",
  "To implement a custom authentication system in a React application, applying secure techniques to manage user authentication and authorization.",
  "To create a weather application in React that fetches and displays weather data from an API based on user input.",
  "To build a note-taking application using React, applying rich text editing techniques to enhance user experience.",
  "To design a movie search application in React that fetches and displays movie data from an API based on user input.",
  "To implement a user authentication system in a React application using Firebase, applying secure techniques for user management.",
  "To develop a project management application using React and Redux, applying advanced state management techniques for improved application performance.",
  "To create a blog application in React, applying server-side rendering techniques for improved performance and SEO.",
  "To design an application that showcases the use of GraphQL with React, applying efficient data-fetching techniques to reduce data over-fetching.",
  "To implement a custom hook in a React application to encapsulate and reuse logic for handling common tasks.",
  "To build a dashboard application in React that displays dynamic data and applies data visualization techniques for improved user experience.",
  "To create a music player application in React, applying audio manipulation techniques for a seamless user experience.",
  "To design a real-time voting application in React, applying techniques for updating and displaying data as users interact with the application.",
  "To develop a currency converter application in React that fetches and displays exchange rates from an API.",
  "To implement a drag-and-drop feature in a React application, applying techniques for handling user interactions and data manipulation.",
  "To build a responsive grid layout in a React application, applying CSS techniques to create a fluid user interface.",
  "To design a shopping cart application in React that utilizes context and custom hooks for managing and sharing application state.",
  "To create a task management application in React, applying local storage techniques to persist user data across browser sessions.",
  "To build an interactive map application in React, applying mapping libraries to display geographical data and user interactions.",
  "To develop a recipe application in React that fetches and displays recipes from an API based on user input.",
  "To implement a calendar application in React, applying date manipulation techniques to display and manage events.",
  "To design a social media application in React, applying user authentication and real-time communication techniques for an engaging user experience.",
  "To create a file-upload feature in a React application, applying secure techniques to handle user-uploaded files and store them on a server.",
  "To develop a quiz application in React, applying state management techniques to manage user interactions and display results.",
  "To build an e-learning platform in React, applying techniques for managing and displaying course content, user progress, and assessments.",
  "To implement a travel booking application in React that fetches and displays travel data from an API based on user input.",
  "To design a workout tracking application in React, applying techniques for managing and displaying user exercise data.",
  "To create an expense tracker application in React, applying techniques for managing and visualizing user financial data.",
  "To develop a job search application in React that fetches and displays job listings from an API based on user input.",
  "To implement a car rental application in React, applying techniques for managing and displaying vehicle inventory and user bookings.",
  "To design a restaurant reservation application in React, applying techniques for managing and displaying restaurant availability and user reservations.",
  "To create a news aggregator application in React that fetches and displays news articles from an API based on user preferences.",
  "To build a gaming leaderboard application in React, applying techniques for managing and displaying user rankings and achievements.",
  "To implement a real-time collaboration tool in React, applying techniques for enabling users to collaborate on documents and projects in real-time.",
  "To design an appointment scheduling application in React, applying techniques for managing and displaying user appointments and availability.",
  "To create a customer support application in React that enables users to submit support tickets and receive real-time assistance from support agents.",
  "To develop a language learning application in React, applying techniques for managing and displaying learning content, quizzes, and progress tracking.",
  "To build a portfolio website in React, applying techniques for showcasing user projects, skills, and experiences in a visually appealing and interactive manner."
];
                  

const captureComponent = async () => {
  try {
    const appElement = document.getElementById('app');
    const canvas = await html2canvas(appElement);
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