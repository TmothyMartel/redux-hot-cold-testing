import React from "react";
import { shallow } from "enzyme";

import { GuessList } from "./guess-list";

describe("<GuessList />", () => {
	const seedGuesses = [];
	beforeAll(() => {
		for (let i = 0; i < 10; i++) {
			seedGuesses.push(i);
		}
	});

	it("Renders without crashing", () => {
		shallow(<GuessList guesses={seedGuesses} />);
	});

	it("renders a list of guesses", () => {
		const wrapper = shallow(<GuessList guesses={seedGuesses} />);
		const listOfGuesses = wrapper.find("li");
		expect(listOfGuesses.length).toEqual(seedGuesses.length);
	});
});
