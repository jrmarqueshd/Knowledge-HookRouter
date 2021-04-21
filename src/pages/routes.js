import { useRoutes } from "hookrouter";
import Cookies from "js-cookie";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";
import NotFound from "./404";

import navigate from "../components/Navigate";
import Login from "./Login";

import Dashboard from "./Auth/Dashboard";
import Payments from "./Auth/Payments";
import Users from "./Auth/Users";

const publicRoutes = {
	"/": () => <Home />,
	"/auth": () => <Login />,
	"/sobre": () => <About />,
	"/posts": () => <Posts />,
	"/post/:slug": ({ slug }) => <Post slug={slug} />,
};

const authRoutes = {
	"/dashboard": () => <Dashboard />,
	"/users": () => <Users />,
	"/payments": () => <Payments />,
};

export default function Router() {
	const publicRouter = useRoutes(publicRoutes);
	const authRouter = useRoutes(authRoutes);

	if (authRouter) {
		if (!Cookies.get("hookrouter:token")) return navigate("/auth");
		return authRouter || <NotFound />;
	}

	return publicRouter || <NotFound />;
}
