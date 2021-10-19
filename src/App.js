import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/sections/Footer/Footer";
import Header from "./components/sections/Header/Header";
import SingleService from "./components/pages/SingleService/SingleService";
import Login from "./components/pages/Login/Login/Login";
import Contact from "./components/pages/Contact/Contact";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
				<PrivateRoute path="/about">
					<About></About>
				</PrivateRoute>
				<PrivateRoute path="/contact">
					<Contact></Contact>
				</PrivateRoute>
				<PrivateRoute path="/service/:serviceKey">
					<SingleService></SingleService>
				</PrivateRoute>
				<Route path="/login">
					<Login></Login>
				</Route>
				<Route path="*">
					<NotFound></NotFound>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	</AuthProvider>
  );
}

export default App;
