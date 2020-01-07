import React, { useReducer, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Firebase from '../services/firebase';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initialState = {
	user: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case `EMAIL`: {
			return {
				...state,
				user: {},
			};
		}
		case `ANON`:
			return Firebase.auth
				.signInAnonymously()
				.catch(error => {
					// eslint-disable-next-line no-console
					console.error(error);
					// TODO: notify the user of the error
					return error;
				});

		default: {
			const reason = `Bad Action Type`;
			console.error(reason);
			return Promise.reject(reason);
		}
	}
};

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	// useEffect(console.log(Firebase.auth), []);
	return (
		<AuthStateContext.Provider value={state}>
			<AuthDispatchContext.Provider>{children}</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};

export default AuthProvider;

// AuthProvider.propTypes = {
// 	children: PropTypes.func.isRequired,
// };
