import React, { useReducer } from 'react';

export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();

const initialState = {
	user: { name: `Anonymous`, status: `Not Logged In` },
};

const reducer = (state, action) => {
	switch (action.type) {
		case `LOG_IN`: {
			return {
				...state,
				user: { name: `Caleb`, status: `Logged In` },
			};
		}
		case `LOG_OUT`: {
			return {
				...state,
				user: { name: `Anonymous`, status: `Logged Out` },
			};
		}
		default:
			throw new Error(`Bad Action Type`);
	}
};

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthStateContext.Provider value={state}>
			<AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};

export default AuthProvider;
