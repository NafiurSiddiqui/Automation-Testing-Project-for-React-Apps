import { render, screen } from '@testing-library/react';
import Async from './Async';

// describe('For async component', () => {
// 	//TEST FOR DIFFERENT SCENARIOS

// 	// test('Renders posts if the test succeed', () => {
// 	// 	// ARRANGE
// 	// 	render(<Async />);

// 	// 	//ASSERTION
// 	// 	//---we can check if the lists item were rendered, otherwise no list would have been rendered
// 	// 	const listItemEl = screen.getAllByRole('listitem'); //check out the ref.link in the note for more
// 	// 	//---now check if the returned array of item is empty, if so, then did not succeed.
// 	// 	expect(listItemEl).not.toHaveLength(0);

// 	// 	/**
// 	// 	 * With this code we will get error, because  with getALLByRole, we are immediately looking for result
// 	// 	 * SInce this is an asynce  task and also useEffect runs AFTER the first render cycle, lists are not there yet when this test run
// 	// 	 * any Find* queries returns a promise, hence ideal to use find here.
// 	// 	 */
// 	// });

// 	test('Renders posts if the test succeed', async () => {
// 		// ARRANGE
// 		render(<Async />);

// 		//ASSERTION
// 		//---we can check if the lists item were rendered, otherwise no list would have been rendered
// 		const listItemEl = await screen.findAllByRole('listitem'); //check out the ref.link in the note for more
// 		//---now check if the returned array of item is empty, if so, then did not succeed.
// 		expect(listItemEl).not.toHaveLength(0);
// 	});

// 	/**
// 	 * 👆 THis is STILL not ideal, because we do not wanna send http request when we are testing
// 	 */
// });

//--------------------------------------------------------------------------------------------------------------stage 2 (WORK WITH MOCKS)

describe('For async component', () => {
	//TEST FOR DIFFERENT SCENARIOS

	test('Renders posts if the test succeed', async () => {
		//1
		window.fetch = jest.fn();
		//2
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: 'p1', title: 'first post' }],
		});

		// ARRANGE
		render(<Async />);

		//ASSERTION
		//---we can check if the lists item were rendered, otherwise no list would have been rendered
		const listItemEl = await screen.findAllByRole('listitem'); //check out the ref.link in the note for more
		//---now check if the returned array of item is empty, if so, then did not succeed.
		expect(listItemEl).not.toHaveLength(0);
	});

	/**
	 * 👆 THis is STILL not ideal, because we do not wanna send http request when we are testing
	 * A - This will cause lot network traffice
	 * B - if you have some component that POST, the test may start sending data to the server. AVOID these mess!
	 * We do not wanna check for browser API like if fetch sends request, that is 100% yes.
	 * we can use a DUMMY function instead of fetch, this is also true for Browser API like LOCAL STORAGE
	 * JEST provide these mocks for us
	 * @Jest - object globally available, has this mock function
	 * -- with this we override fetch with our dummy fetch, only inside this test.
	 */
});
