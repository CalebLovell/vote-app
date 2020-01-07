import React, { useState } from 'react';
import styled from 'styled-components';

const PollContainer = styled.div`
	width: 600px;
	height: 600px;
	background-color: lightgrey;
`;

const Poll = () => {
	// eslint-disable-next-line no-unused-vars
	const [pollType, setPollType] = useState(`single`);

	return (
		<PollContainer>
			<h1>Create a poll below</h1>
			<h2>New Poll</h2>
			<input placeholder='New Poll'></input>
			<h2>New Answers</h2>
			<input placeholder='New Poll'></input>
			<input placeholder='New Poll'></input>
			<input placeholder='New Poll'></input>
			<input placeholder='New Poll'></input>
			<button>Create Voteable</button>
		</PollContainer>
	);
};

export default Poll;
