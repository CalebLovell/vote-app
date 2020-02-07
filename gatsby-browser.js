import React from 'react';
import AuthProvider from './src/context/AuthProvider';

export const wrapRootElement = ({ element }) => {
	return <AuthProvider>{element}</AuthProvider>;
};
