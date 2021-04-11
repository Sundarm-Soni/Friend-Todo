import { FaStar } from 'react-icons/fa';

const Favouritebutton = ({favFriend, onToggle}) => {
    const favstyle={color: 'yellow'}
    const myfavstyle={color:'lightgrey'};
    
    return ( 
    <button className='favbtn' onClick={onToggle}><FaStar style={favFriend.favourite ? favstyle : myfavstyle}/></button>
        )
}

export default Favouritebutton
