import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<SiteWrap>
			<Heading1>
				<StyledLink to='/'>{siteTitle}</StyledLink>
			</Heading1>
		</SiteWrap>
	</HeaderContainer>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
