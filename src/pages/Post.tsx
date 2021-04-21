interface ComponentPropsInterface {
	slug: String;
}

export default function Blog({ slug }: ComponentPropsInterface) {
	return (
		<div>
			<div>
				<a href="/posts">return to posts</a>
			</div>
			<h1>Post - slug = {slug}</h1>
		</div>
	);
}
