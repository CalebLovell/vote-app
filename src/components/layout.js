/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import SiteWrap from './SiteWrap';
import './layout.css';

const SiteWrapNoPaddingTop = styled(SiteWrap)`
	padding-top: 0;
`;

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);

	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
				<meta name='description' content={data.site.siteMetadata.description} />
			</Helmet>
			<Header siteTitle={data.site.siteMetadata.title} />
			<SiteWrapNoPaddingTop>
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.org'>Gatsby</a>
				</footer>
			</SiteWrapNoPaddingTop>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
