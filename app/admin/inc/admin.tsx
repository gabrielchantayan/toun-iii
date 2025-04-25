import { h1, h2 } from "@/components/reuse-styles";
import { useTranslations } from "next-intl";



import { Button } from "@/components/ui/button";


const Admin = () => {

    const t = useTranslations('admin');

    const save = () => {
        
    }

    return (
		<div>
			<h1 className={h1}>{t('admin-settings')}</h1>

			<h2 className={h2}>{t('edit-apps')}</h2>



			<h2 className={h2}>{t('edit-bookmarks')}</h2>
	

			<Button onClick={save}>{t('save-changes')}</Button>
		</div>
	);

}

export default Admin;