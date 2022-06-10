import { useState } from 'react';

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};
	return (
		<div>
			<h2>Hello World</h2>
			{!changedText && <p>It's good to see you!</p>}
			{/* <p>It's good to see you!</p> */}
			{changedText && <p>CHANGED BRUH!!</p>}
			<button onClick={changeTextHandler}>Change text</button>
		</div>
	);
};

export default Greeting;
