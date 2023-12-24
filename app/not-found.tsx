import "./not-found.css"
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>The page you are looking for does not exist.</p>
		</div>
	);
};

export default NotFoundPage;
