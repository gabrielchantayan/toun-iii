'use server';

export async function validate_login(password: string): Promise<boolean> {
	if (password === process.env.ADMIN_PASSWORD) {
		return true;
	} else {
		return false;
	}
}
