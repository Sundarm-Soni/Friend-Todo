import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Friends from './components/Friends';
import {useState} from 'react'; 
const App = () => {
  
  const [friendsData, setList] = useState([
    {
        id: 1,
        name: 'Sundarm',
        about: 'is your friend',
        time: '',
        favourite: true
    },
    {
        id: 2,
        name: 'Sarthak',
        about: 'is not your friend',
        time: '',
        favourite: false
    },
    {
        id: 3,
        name: 'Mrinal',
        about: 'is your friend',
        time: '',
        favourite: true
    },
    {
      id: 4,
      name: 'Ayush',
      about: 'is not your friend',
      time: '',
      favourite: false
  }
  ]);
  
  const deleteFriend = (id) => {
    console.log(id);
    setList(friendsData.filter((item) => item.id !== id));
  }

  const toggleFavourite = (id) => {
    setList(friendsData.map((fri) => fri.id == id ? {...fri, favourite: !fri.favourite} : fri));
  }

  const toggleFavCheckbox = () => {

  }

  return (
    <div className = 'container'>
      <Header title='Friends List'/>
      <Searchbar onToggle={toggleFavCheckbox}/>
    {friendsData.length >0 ? (
    <Friends friendsdata={friendsData} 
      onDeleteFriend={deleteFriend} onToggleFav={toggleFavourite}/>) : (' Sorry no friend present in the list') }
    </div>
  );
}

export default App;
