import React from "react";
import { shallow } from "enzyme";

import { restartGame, generateAuralUpdate } from "../actions";

import { TopNav } from "./top-nav";

describe("<TopNav />", () => {
	it("Renders without crashing", () => {
		shallow(<TopNav />);
	});

	// test event listeners
	it("should call restartGame when clicked", () => {
		let dispatch = jest.fn();
		let wrapper = shallow(<TopNav dispatch={dispatch} />);
		let newGame = wrapper.find(".new");
		newGame.simulate("click", {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});

	it("should call generateAuralUpdate when clicked", () => {
		let dispatch = jest.fn();
		let wrapper = shallow(<TopNav dispatch={dispatch} />);
		let link = wrapper.find(".status-link");
		link.simulate("click", {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});
});
