import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Friends from './components/Friends';
import {useState} from 'react'; 
const App = () => {
  
  const [friendsData, setTasks] = useState([
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
        about: 'is not your friend',
        time: '',
        favourite: true
    },
    {
      id: 4,
      name: 'Ayush',
      about: 'is not your friend',
      time: '',
      favourite: true
  }
  ]);

  return (
    <div className = 'container'>
      <Header title='Friends List'/>
      <Searchbar/>
      <Friends friendsdata={friendsData}/>
    </div>
  );
}

export default App;
