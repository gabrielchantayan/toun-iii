import { Icon } from "@iconify/react/dist/iconify.js";

const SettingsModalFooter = () => {
    return (
		<div className='flex flex-col sm:flex-row sm:justify-center items-center mt-4'>
			<a className='flex flex-row items-center gap-1 hover:underline' href='https://github.com/gabrielchantayan/toun-iii'>
				<Icon icon='mdi:github' width={24} height={24} /> <p>Github</p>
			</a>
		</div>
	);
}

export default SettingsModalFooter