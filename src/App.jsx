// import './App.css';
// import MainNav from "./components/Nav.jsx";
// import { Outlet } from 'react-router-dom';

// function App() {
 

//   return (
//     <>
//       <h1 class="header">Hello world
//         how are you
//       </h1>
//     </>
//   )
// }



// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<MainNav />
//     <Outlet />
// 	</React.StrictMode>
// );


// export default App
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import MainNav from './components/Nav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default App;