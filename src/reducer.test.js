import reducer from "./reducer";
import { generateAuralUpdate, restartGame, makeGuess } from "./actions";

describe("reducer", () => {
	it("Should set the initial state when nothing is passed in", () => {
		const state = reducer(undefined, { type: "_UNKNOWN" });
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual("Make your guess!");
		expect(state.auralStatus).toEqual("");
		expect(state.correctAnswer).toBeGreaterThan(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});
});

describe("restartGame", () => {
	it("should reset the state", () => {
		let state = {
			guesses: [23, 34, 67, 11],
			feedback: "not even close",
			correctAnswer: 90
		};

		const correctAnswer = 12;

		state = reducer(state, restartGame(correctAnswer));
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual("Make your guess!");
		expect(state.correctAnswer).toBeGreaterThan(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});
});

describe("makeGuess", () => {
	it("can make a guess", () => {
		let state = {
			guesses: [],
			feedback: "Make your Guess!",
			correctAnswer: 10
		};

		state = reducer(state, makeGuess(80));
		expect(state.guesses).toEqual([80]);
		expect(state.feedback).toEqual("You're Ice Cold...");

		state = reducer(state, makeGuess(7));
		expect(state.guesses).toEqual([80, 7]);
		expect(state.feedback).toEqual("You're Hot!");

		state = reducer(state, makeGuess(10));
		expect(state.guesses).toEqual([80, 7, 10]);
		expect(state.feedback).toEqual("You got it!");
	});
});

describe("generateAuralUpdate", () => {
	it("generates the aural update", () => {
		let state = {
			guesses: [24, 56, 78],
			feedback: "almost got it",
			correctAnswer: 79,
			auralStatus: ""
		};
		let update = `Here's the status of the game right now: ${
			state.feedback
		} You've made ${state.guesses.length} guesses.`;

		state = reducer(state, generateAuralUpdate(update));
	});
});
