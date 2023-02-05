import React, { memo } from 'react';
import classes from '../style.module.scss';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';
import "swiper/css";
import "swiper/css/pagination";


const Intro = () => {
	return (
		<section className={classes.intro}>
			<Container className={classes.container}>
				<HeadingOne
					color={{ color: '#fff' }}
					childrenOne="SILKWAY"
					childrenTwo="PETROLE"
					className={classes.hero__title}
				/>
				<p data-aos="fade-up" className={classes.title}>
					Proudly South Shore
				</p>
				<p data-aos="fade-up" data-aos-delay="300" className={classes.subtitle}>
					Connecting Asian commodities to world markets from the South Shore for more than 30 years.
				</p>
			</Container>
		</section>
	);
};

export default memo(Intro);
