import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default memo(Layout);
