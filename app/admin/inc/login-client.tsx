'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { validate_login } from "@/lib/validate-login";
import { h1 } from '@/components/reuse-styles';


const LoginClient = ({ set_page, set_password }: { set_page: (page: string) => void, set_password: (password: string) => void }) => {
	const t = useTranslations('admin');

    const validate = async (password: string) => {
        const res = await validate_login(password);
        if (res) {
			set_password(password);
            set_page('admin');
        }
    }

	return (
		<div className='flex flex-col'>
			<h1 className={h1}>{t('admin-login')}</h1>
			<Input
				type='password'
				className='w-96 mt-4'
				placeholder={t('password')}
				onKeyDown={async (e) => {
					if (e.key === 'Enter') { 
                        await validate((e.target as HTMLInputElement).value);
                    }
				}}
			/>{' '}
			<Button
				className='w-96 mt-2'
				onClick={async ( ) => { await validate((document.getElementById('password') as HTMLInputElement).value); }}>
				{t('login')}
			</Button>
		</div>
	);
};

export default LoginClient;