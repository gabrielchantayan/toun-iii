import CardFactory from "@/components/card-factory";
import BookmarkFactory from "@/components/bookmark-factory";
import Greet from "@/components/greet";
import Searchbar from "@/components/searchbar";
import SettingsModal from "@/components/settings-modal";

export default async function Home() {
  return (
		<div className='grid grid-rows-[80px_1fr_32px] min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full sm:w-4/5 mx-auto'>
			<div>
        <Searchbar />
				<Greet />
			</div>
			<div className='flex flex-col gap-16'>
				<CardFactory />
        <BookmarkFactory />
			</div>
			<div className='sm:absolute sm:bottom-6 sm:left-10 '>
				<SettingsModal />
			</div>
		</div>
  );
}
