import { FETCH_ALL_POSTS, FETCH_POST } from "../actions/types";

export default function(state = null, action) {
	console.log(action);
	// console.log(state);
	switch (action.type) {
		case FETCH_ALL_POSTS:
			return action.payload || false;
		case FETCH_POST:
			return {
				...state,
				[action.payload._id]: action.payload
			};
		default:
			return state;
	}
}
