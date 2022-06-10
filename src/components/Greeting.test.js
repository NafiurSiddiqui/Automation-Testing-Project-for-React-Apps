import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

//--------------------------------------------------------------------------------------------------------------stage 1 (INTRO)

// test('Renders hello world text', () => {
// 	//ARRANGE
// 	render(<Greeting />);

// 	//ACT
// 	//--here nothing

// 	//ASSERT
// 	const helloWorldEl = screen.getByText('Hello World!', { exact: true });
// 	expect(helloWorldEl).toBeInTheDocument();
// });

/**
 * inside the function, you wanna typically do three things during writing the test with the "Three A". Refere to the notes in wps cloud.
 * @screen - gives us access to the virtaul screen
 * -- FIND - will return a promise
 * -- GET - will  throw an error if not found
 * -- query - wont throw error
 * @getByText - look for a string match, second arg is already true by default, false - casing won't matter and will match substrings. For true, we don't need the second arg.
 * -- will return something, typically error if not found.
 */

//--------------------------------------------------------------------------------------------------------------stage 2 (TEST SUITE)

describe('greeting component', () => {
	test('Renders hello world text', () => {
		//ARRANGE
		render(<Greeting />);

		//ACT
		//--here nothing

		//ASSERT
		const helloWorldEl = screen.getByText('Hello World', { exact: true });
		expect(helloWorldEl).toBeInTheDocument();
	});

	//TEST for user input

	test('Renders Good to see you if BUTTON was not clicked', () => {
		//ARRANGE
		render(<Greeting />);

		//ACT
		//..Nothing

		//ASSERT
		const greetingText = screen.getByText("It's good to see you!");

		expect(greetingText).toBeInTheDocument();
	});

	test('Renders CHANGED BRUH!! if BUTTON WAS clicked', () => {
		//ARRANGE
		render(<Greeting />);

		//ACT
		const buttonEl = screen.getByRole('button');
		userEvent.click(buttonEl);

		//ASSERT
		const changedText = screen.getByText('CHANGED BRUH!!');

		expect(changedText).toBeInTheDocument();
	});

	//TESTING our own error
	test('Good to see you was NOT rendered', () => {
		//ARRANGE
		render(<Greeting />);

		//ACT
		//..Nothing

		//ASSERT
		const greetingText = screen.getByText("It's good to see you!");

		expect(greetingText).not.toBeInTheDocument();
	});
});
