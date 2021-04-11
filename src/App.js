import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Friends from './components/Friends';
import {useState, useEffect} from 'react'; 
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

  const  [friendNewData, setNewFriendList] = useState(friendsData);
  
  useEffect(() => {
    setNewFriendList(friendsData);
  },[friendsData]);


  const addFriend = (myFriend) => {
    if(myFriend){
    const id = Math.floor(Math.random() * 1000) + 1;
    const newFriend = { id, ...myFriend }
    setList([...friendsData, newFriend]);
  }
  }


  const deleteFriend = (id) => {
    setList(friendsData.filter((item) => item.id !== id));
  }

  const toggleFavourite = (id) => {
    let isFriend = 'is my friend';
    let isNotFriend = 'not my friend';
    setList(friendsData.map((fri) => fri.id === id ? {...fri, favourite: !fri.favourite, about: !fri.favourite ? isFriend : isNotFriend} : fri));
  }

  const sortFriendsList = (frndList) => {
    console.log(frndList);
    let multiplier = 1;
    if(frndList === 'asc'){
      multiplier = -1;
    }
    setNewFriendList(friendsData.slice().sort((a,b) => { 
      if(a.name < b.name){
        return -1 * multiplier;
      } 
      if(a.name > b.name){
        return 1 * multiplier;
      }
        return 0;
      
     }));
  }


  
  const dropFilterAll = () => setNewFriendList([...friendsData]);

  const dropFilterFav = () => setNewFriendList(friendsData.filter((list) => list.favourite === true));

  const dropFilterNotFav = () => setNewFriendList(friendsData.filter((list) => list.favourite === false));


  return (
    <div className = 'container'>
      <Header title='Friends List' 
        addMyFriend={addFriend} 
        myFriendList={sortFriendsList}
        dropFilterAll={dropFilterAll}
        dropFilterFav={dropFilterFav}
        dropFilterNotFav={dropFilterNotFav}
        />
      <Searchbar addMyFriend={addFriend} myFriendData={friendsData} setFrndList={setNewFriendList}/>
    {friendNewData.length >0 ? (
    <Friends friendsdata={friendNewData} 
      onDeleteFriend={deleteFriend} onToggleFav={toggleFavourite}/>) : (' Sorry no friend present in the list') }
    </div>
  );
}

export default App;
