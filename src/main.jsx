
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

      

// import all the pages that react will use
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


// Define the routes needed for the navbar to function
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <About />,
			},
			{
				// Are the / needed before the path?
				path: "contact",
				element: <Contact />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);