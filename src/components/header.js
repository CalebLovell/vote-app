import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AuthStateContext, AuthDispatchContext } from '../context/AuthProvider';

import SiteWrap from './siteWrap';

const HeaderContainer = styled.header`
	background: rebeccapurple;
	margin-bottom: 1.45rem;
`;

const Heading1 = styled.h1`
	margin: 0;
`;

const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

const Header = ({ siteTitle }) => {
	const dispatch = useContext(AuthDispatchContext);
	const state = useContext(AuthStateContext);
	return (
		<HeaderContainer>
			<SiteWrap>
				<Heading1>
					Hello {state.user.name}, you are {state.user.status}
					<button
						type='button'
						onClick={() => {
							dispatch({ type: `LOG_IN` });
						}}
					>
						Login
					</button>
					<button
						type='button'
						onClick={() => {
							dispatch({ type: `LOG_OUT` });
						}}
					>
						Log Out
					</button>
					<StyledLink to='/'>{siteTitle}</StyledLink>
				</Heading1>
			</SiteWrap>
		</HeaderContainer>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
