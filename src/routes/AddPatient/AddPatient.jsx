import React, { useState } from 'react';
import { Button } from '../../stories/button/Button';
import { Input } from '../../stories/input/Input';
import { useAddPatientMutation } from '../../utils/service/prescription';
import './addPatient.css';

const AddPatient = () => {
	const todayDate = new Date().toISOString().slice(0, 10);

	const [prefix, setPrefix] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dob, setDob] = useState(todayDate);
	const [gender, setGender] = useState('M');
	const [city, setCity] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		if (prefix && firstName && lastName && gender && city && email) {
			console.log('submitting');
			// useAddPatientMutation({
			// 	prefix,
			// 	firstName,
			// 	lastName,
			// 	dob,
			// 	gender,
			// 	city,
			// 	email,
			// });
		}
	};

	return (
		<div>
			<Input label='Prefix' value={prefix} onChange={setPrefix} />
			<Input label='First Name' value={firstName} onChange={setFirstName} />
			<Input label='Last Name' value={lastName} onChange={setLastName} />
			<Input label='D.O.B' value={dob} onChange={setDob} type='date' />
			<Input label='gender' value={gender} onChange={setGender} />
			<Input label='city' value={city} onChange={setCity} />
			<Input label='email' value={email} onChange={setEmail} />
			<Button label='Add' onClick={handleSubmit} />
		</div>
	);
};

export default AddPatient;
