import * as React from 'react';
import './App.css'
import Card from './components/Card'
import axios from 'axios';
import { Character } from './types/character';
import Pagination from './components/Pagination';
import ModalInfo from './components/ModalInfo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Drawer from './components/Drawer';

function App() {
  const [data, setData] = React.useState<Character[]>();
  const [page, setPage] = React.useState<number>(1);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState<Character>()
  const [favList, setFavList] = React.useState<Character[]>([])
  const [favOpen,setFavOpen] =React.useState<boolean>(false)
  const baseURL = "https://rickandmortyapi.com/api/character";


  const handlePagination = async (page: number) => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data: Character[] = await res.data.results
    setData(data)

  }
  const handleSetPage = (page: number) => {
    setPage(page)
  }

  const handleOpenModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }
  const handleCloseFav = () => {
    setFavOpen(false)
  }
  const handleSetSelectedCharacter = (character: Character) => {
    setSelectedCharacter(character)
  }
  const handleSetFavList = (character: Character) => {
    if (!favList.find(char => char.id === character.id)) {
      setFavList([...favList, character])
    } else {
      const newFavList = favList.filter(char => char.id !== character.id)
      setFavList(newFavList)
    }
  }
  const handleIsFav = (character: Character) => {
    if (favList.find((char: Character) => char.id === character.id)) {
      return true
    }
    return false
  }

  React.useEffect(() => {
    localStorage.setItem('favList', JSON.stringify(favList))
  }, [favList])

  React.useEffect(() => {
    handlePagination(page)
  }, [page])

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <>
      
      {data &&
        <div className="grid grid-cols-4 gap-4">
          {data.map((character: Character) => <Card isFav={handleIsFav(character)} setFavList={handleSetFavList} character={character} openModal={handleOpenModal} setSelectedCharacter={handleSetSelectedCharacter} />)}

        </div>

      }
      <div className="flex items-center justify-center mt-5">
        <Pagination page={page} setPage={handleSetPage} />
      </div>
      <div className="fixed bottom-4 right-4">
        <button onClick={()=>setFavOpen(true)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
        <FavoriteIcon/> Favorite
        </button>
      </div>
      {favOpen &&
        <Drawer favList={favList} handleClose={handleCloseFav} openModal={handleOpenModal} setSelectedCharacter={handleSetSelectedCharacter}/>
      }
      
      {selectedCharacter &&
        <ModalInfo open={isOpen} handleOpen={handleOpenModal} character={selectedCharacter} />
      }
      

    </>
  )
}

export default App
