import React from "react";
import { shallow, mount } from "enzyme";
import { MAKE_GUESS, makeGuess } from "../actions";

import { GuessForm } from "./guess-form";

describe("<GuessForm />", () => {
	it("renders without crashing", () => {
		shallow(<GuessForm />);
	});

	//test that on submit works

	it("should call makeGuess when submit", () => {
		let dispatch = jest.fn();
		let wrapper = mount(<GuessForm dispatch={dispatch} />);
		let guess = 45;
		wrapper.find(".text").instance().value = guess;
		wrapper.simulate("submit");
		expect(dispatch).toHaveBeenCalledWith(makeGuess(guess.toString()));
	});
});
