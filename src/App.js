import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';
import { books } from './Constans/books';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Community from './pages/Community';
import Environment from './pages/Environment';
import Safety from './pages/Safety';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ArticlePage from './pages/News/SubPages/ArticlePage';
import ScrollToTop from "./Components/ScrollToTop";
import LoadingGif from "./LoadingGif.jsx/LoadingGif";
import ErrorPage from "./pages/ErrorPage";



function App() {
	return (
		<>
			<LoadingGif />
			<ScrollToTop />
			<Routes>
				<Route path={books.start} element={<Layout />}>
					<Route path={books.home} element={<Home />} />
					<Route path={books.aboutUs} element={<AboutUs />} />
					<Route path={books.news} element={<News />} />
					<Route path={books.newsId} element={<ArticlePage />} />
					<Route path={books.community} element={<Community />} />
					<Route path={books.environment} element={<Environment />} />
					<Route path={books.safety} element={<Safety />} />
					<Route path={books.careers} element={<Careers />} />
					<Route path={books.contact} element={<Contact />} />
					<Route path={books.error} element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
