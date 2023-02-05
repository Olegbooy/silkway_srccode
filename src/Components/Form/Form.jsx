// import React, { memo } from 'react';
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import classes from './style.module.scss';
// import TextField from "./components/TextField";
// import { schema } from "./components/schema";
//
//
// const Form = () => {
// 	const { register, handleSubmit, formState: { errors } } = useForm({
// 		resolver: yupResolver(schema)
// 	});
// 	const onSubmit = (data) => console.log(data);
// 	console.log(errors);
// 	return (
// 		<form
// 			className={classes.form}
// 			onSubmit={handleSubmit(onSubmit)}
// 		>
// 			<TextField
// 				input
// 				className={classes.input}
// 				placeholder="mail@example.com"
// 				description="Your email"
// 				typeInput="email"
// 				errors={errors}
// 				exrtaProps={register('email')}
// 			/>
// 			<TextField
// 				input
// 				className={classes.input}
// 				placeholder="John Smith"
// 				description="Your Name"
// 				typeInput="text"
// 				errors={errors}
// 				exrtaProps={register('name')}
// 			/>
// 			<TextField
// 				textArea
// 				className={classes.input}
// 				placeholder="Your comments"
// 				description="Text"
// 				typeInput="text"
// 				errors={errors}
// 				exrtaProps={register('message')}
// 			/>
// 			<button type="submit">
// 				Send
// 			</button>
// 		</form>
// 	);
// };
//
// export default memo(Form);

import React, { memo, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import classes from './style.module.scss';
import TextField from "./components/TextField";
import { schema } from "./components/schema";

const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
	<input type="file" name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
));


const Form = () => {
	const [asd, setAsd] = useState(null);
	const { register, handleSubmit, control, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	console.log(asd);
	return (
		<form
			className={classes.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				input
				className={classes.input}
				placeholder="mail@example.com"
				description="Your email"
				// typeInput="email"
				errors={errors}
				exrtaProps={register('email')}
			/>
			<TextField
				input
				className={classes.input}
				placeholder="John Smith"
				description="Your Name"
				// typeInput="text"
				errors={errors}
				exrtaProps={register('name')}
			/>
			<TextField
				textArea
				className={classes.input}
				placeholder="Your comments"
				description="Text"
				typeInput="text"
				errors={errors}
				exrtaProps={register('message', {
					onChange: (e) => setAsd(e.target.value)
				})}
			/>
			<Controller
				control={control}
				name="cv1"
				render={({ field, fieldState
				}) => (
					<>
						<Select
							{...field}
							{...fieldState}
						/>
						{ errors.cv1 && <p style={{ color: 'red' }}>{errors.cv1.message}</p> }
					</>
				)}
			/>
			<button type="submit">
				Send
			</button>
		</form>
	);
};

export default memo(Form);
