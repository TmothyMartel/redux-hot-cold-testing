import React from "react";
import { shallow } from "enzyme";

import { GuessCount } from "./guess-count";

describe("<GuessCount />", () => {
	it("Renders without crashing", () => {
		shallow(<GuessCount />);
	});

	it("should render the count", () => {
		let currentCount = 4;
		let wrapper = shallow(<GuessCount guessCount={currentCount} />);
		expect(wrapper.text()).toEqual(`You've made ${currentCount} guesses!`);
	});
});
