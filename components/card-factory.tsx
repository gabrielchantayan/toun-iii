/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslations } from "next-intl";
import ItemCard from "./item-card";
import fs from 'fs';

 const CardFactory = () => {
    
    const data = JSON.parse(fs.readFileSync('data/apps.json', 'utf8'));

    const c = useTranslations('categories');

    return (

        <div className="flex flex-row flex-wrap gap-8">

            {
                data.map(
                    (category : any) => {
                        return (
							<div key={category.name}>
								<h2 className='text-2xl font-bold uppercase'>{c(category.name.toLowerCase())}</h2>
								<div className='flex flex-row flex-wrap gap-0'>
									{category.apps.map((app: any) => {
										return (
											<ItemCard key={app.name} icon={app.icon} item={app.name} url={app.url} />
										);
									})}
								</div>
							</div>
						);
                    }
                )
            }


   
        </div>

    )

}

export default CardFactory