/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "../types/character"

interface FavCardProps {
    character: Character
    openModal: any
    setSelectedCharacter: any
}

export default function FavCard(props: FavCardProps) {
    const { character,openModal,setSelectedCharacter } = props
    return (
        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full" onClick={ 
            () => {openModal(true)
             setSelectedCharacter(character)}}>
            <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                    <img
                        src={character.image}
                        alt={character.name} className="w-7 h-7 mr-3" />
                    <h3 className="font-bold text-base text-gray-800">{character.name}</h3>
                </div>

            </div>
        </div>
    )
}