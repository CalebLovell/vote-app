import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Poll from '../components/poll';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Poll />
		<Link to='/page-2/'>Go to page 2</Link>
	</Layout>
);

export default IndexPage;
