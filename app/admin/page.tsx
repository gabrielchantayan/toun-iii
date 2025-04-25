'use client';

import { useState } from 'react';
import LoginClient from './inc/login-client';
import Admin from './inc/admin';


export default function Home() {
	const [page, set_page] = useState('login');
	// const [password, set_password] = useState('');


	return (
		<div className='grid grid-rows-[20px_1fr_32px] min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full sm:w-4/5 mx-auto'>
			<div></div>
			{page === 'login' && <LoginClient set_page={set_page} set_password={() => { }} />}
			{page === 'admin' && <Admin/>}
		</div>
	);
}
