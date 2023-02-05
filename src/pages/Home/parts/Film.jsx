import React, { memo } from 'react';
import film from '../../../assets/media/silkway1var.mp4';
import classes from '../style.module.scss';

const Film = () => {
	return (
		<section className={classes.film}>
			<video
				width="100%"
				height="auto"
				controls="controls"
				controls preload="auto"
				autoPlay="autoplay" loop muted playsInline
			>
				<source src={film} type="video/mp4" />
			</video>
		</section>
	);
};

export default memo(Film);
