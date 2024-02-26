/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "../types/character"
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CardProps {
    character: Character
    openModal: any
    setFavList: any
    setSelectedCharacter: any
    isFav: boolean
}

export default function Card(props: CardProps) {
    const { character, openModal, setSelectedCharacter,isFav,setFavList} = props
    return (
        <div className="w-full rounded overflow-hidden shadow-lg">
            <div className="relative">
                <img className="w-full realtive" src={character.image} alt={character.name} onClick={() => { openModal(true); setSelectedCharacter(character) }} />
                { isFav?
                    <button className="absolute bottom-1 left-1  " onClick={() => setFavList(character)}><FavoriteIcon style={{ color: "red" }} /></button>:
                    <button className="absolute bottom-1 left-1 " onClick={() => setFavList(character)}><FavoriteIcon  style={{ stroke: "grey",color: "lightgrey", strokeWidth: 2 }} /></button> 
                }
                    
                
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{character.name}</div>

            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.status}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.gender}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.species}</span>
            </div>

        </div>
    )
}
