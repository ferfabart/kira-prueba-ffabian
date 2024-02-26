/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "../types/character"
import FavCard from "./FavCard"

interface DrawerProps {
favList:Character[]
handleClose:any
openModal: any
setSelectedCharacter: any
}

export default function Drawer(props: DrawerProps) {
  const{favList,handleClose,setSelectedCharacter,openModal}= props
    return (
        
<div id="hs-overlay-example" className="hs-overlay  overflow-y-scroll fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-slate-600 bg-opacity-90 border-slate-200" tabIndex={-1}>
  <div className="flex justify-between  items-center py-3 px-4 border-b dark:border-gray-700">
    <h3 className="font-bold text-gray-800 dark:text-white">
      Favorites
    </h3>
    <button type="button" onClick={handleClose} className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-overlay-example">
      <span className="sr-only">Close modal</span>
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  </div>
  <div className="p-4 ">
  {favList.map((char:Character) =><FavCard character={char} setSelectedCharacter={setSelectedCharacter} openModal={openModal} />)}
  </div>
</div>
    )

}