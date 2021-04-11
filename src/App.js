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
        favourite: true
    },
    {
        id: 2,
        name: 'Sarthak',
        about: 'is not your friend',
        favourite: false
    },
    {
        id: 3,
        name: 'Mrinal',
        about: 'is your friend',
        favourite: true
    },
    {
      id: 4,
      name: 'Ayush',
      about: 'is not your friend',
      favourite: false
  }
  ]);
  
  const addFriend = (myFriend) => {
    if(myFriend){
    const id = Math.floor(Math.random() * 1000) + 1;
    const newFriend = { id, ...myFriend }
    setList([...friendsData, newFriend]);
  }
  }


  const deleteFriend = (id) => {
    console.log(id);
    setList(friendsData.filter((item) => item.id !== id));
  }

  const toggleFavourite = (id) => {
    let isFriend = 'is my friend';
    let isNotFriend = 'not my friend';
    setList(friendsData.map((fri) => fri.id === id ? {...fri, favourite: !fri.favourite, about: !fri.favourite ? isFriend : isNotFriend} : fri));
  }



  return (
    <div className = 'container'>
      <Header title='Friends List' addMyFriend={addFriend}/>
      <Searchbar addMyFriend={addFriend} myFriendData={friendsData} setFrndList={setList}/>
    {friendsData.length >0 ? (
    <Friends friendsdata={friendsData} 
      onDeleteFriend={deleteFriend} onToggleFav={toggleFavourite}/>) : (' Sorry no friend present in the list') }
    </div>
  );
}

export default App;
