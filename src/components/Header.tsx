import Cookies from "js-cookie";

export default function Header() {
	return (
		<header>
			<a href="/">go to home</a>
			<br />
			{Cookies.get("hookrouter:token") && (
				<a href="/dashboard">go to dashboard</a>
			)}
		</header>
	);
}
