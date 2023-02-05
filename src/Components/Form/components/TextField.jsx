import React, { memo, useEffect } from 'react';
import classes from "../style.module.scss";

const TextField = ({ addFile, description, className, placeholder, typeInput, errors, exrtaProps, input, textArea }) => {
	useEffect(() => {}, [exrtaProps]);
	return (
		<div>
			{
				input && (
					<div className={classes.socket}>
						<p className={classes.description}>
							{ description }
						</p>
						<input {...exrtaProps} className={className} type={typeInput} placeholder={placeholder} />
						<p style={{ color: 'red' }}>
							{ errors[exrtaProps.name] && errors[exrtaProps.name].message }
						</p>
					</div>
				)
			}
			{
				textArea && (
					<div className={classes.socket}>
						<p className={classes.description}>
							{ description }
						</p>
						<textarea {...exrtaProps} className={className} type={typeInput} placeholder={placeholder} />
						<p style={{ color: 'red' }}>
							{ errors[exrtaProps.name] && errors[exrtaProps.name].message }
						</p>
					</div>
				)
			}
			{
				addFile && (
					<div className={classes.className}>
						<p className={classes.description}>
							{ description }
						</p>
						<input {...exrtaProps} type={typeInput} id="file" placeholder={placeholder} />
						<label htmlFor="file">Upload CV</label>
						<p style={{ color: 'red' }}>
							{ errors[exrtaProps.name] && errors[exrtaProps.name].message }
						</p>
					</div>
				)
			}
		</div>
	);
};

export default memo(TextField);
