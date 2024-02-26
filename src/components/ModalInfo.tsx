import { Character } from "../types/character"

interface ModalInfoProps {
    open:boolean
    handleOpen: any
    character:Character
}

export default function ModalInfo(props: ModalInfoProps) {
    const{open,handleOpen,character}=props
   console.log(character);
   
    
    if (!open) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <div className="bg-white p-2" >
                    
                <div className="grid grid-cols-2 gap-4">
                    <img className="w-50px " src={character.image} alt={character.name}/>
                        <div>
                        <h3 className=" flex font-bold text-lg underline">{character.name}</h3>
                        <div className="flex">
                            <p className="font-bold text-sm">Gender:</p>
                            <p className="text-sm">{character.gender}</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold text-sm">Location:</p>
                            <p className="text-sm">{character.location.name}</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold text-sm">Especie:</p>
                            <p className="text-sm">{character.species}</p>
                        </div>
                        
                    </div>
                    
                    </div>
                   
                    <button className="rounded bg-trasnparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 " onClick={()=>handleOpen(false)} >Close</button>
                </div>


            </div>

        </div>
    )
}
