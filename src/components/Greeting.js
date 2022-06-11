import { useState } from 'react';
import Output from './Output';

//--------------------------------------------------------------------------------------------------------------stage 2 (TESTING SUITE)

// const Greeting = () => {
// 	const [changedText, setChangedText] = useState(false);

// 	const changeTextHandler = () => {
// 		setChangedText(true);
// 	};
// 	return (
// 		<div>
// 			<h2>Hello World</h2>
// 			{!changedText && <p>It's good to see you!</p>}
// 			{/* <p>It's good to see you!</p> */}
// 			{changedText && <p>CHANGED BRUH!!</p>}
// 			<button onClick={changeTextHandler}>Change text</button>
// 		</div>
// 	);
// };

// export default Greeting;

//--------------------------------------------------------------------------------------------------------------stage 3 (TESING MULTIPLE COMPONENTS)

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};
	return (
		<div>
			<h2>Hello World</h2>
			{!changedText && <Output>It's good to see you!</Output>}
			{/* <p>It's good to see you!</p> */}
			{changedText && <Output>CHANGED BRUH!!</Output>}
			<button onClick={changeTextHandler}>Change text</button>
		</div>
	);
};

export default Greeting;
