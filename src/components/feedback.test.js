import React from "react";
import { shallow } from "enzyme";

import { Feedback } from "./feedback";

describe("<Feedback />", () => {
	it("Renders without crashing", () => {
		shallow(<Feedback />);
	});

	it("renders feedback to the user", () => {
		let newFeedback = "You are doing great!";
		let wrapper = shallow(<Feedback feedback={newFeedback} />);
		expect(wrapper.contains(newFeedback)).toEqual(true);
	});
});
