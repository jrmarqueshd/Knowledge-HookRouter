import Cookies from "js-cookie";

export default function Login() {
	return (
		<div>
			<br />
			<br />
			<br />
			<button
				onClick={() => {
					Cookies.set("hookrouter:token", "123456789");

					window.location.href = "/dashboard";
				}}
			>
				Login to application
			</button>
		</div>
	);
}
