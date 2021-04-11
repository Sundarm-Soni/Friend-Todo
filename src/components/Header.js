import PropTypes from 'prop-types'
import { FaSortAlphaUp } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import {useState} from 'react'
const Header = ({title}) => {
  
    const [dropvalue, setDropText] = useState('');
    const [sortList, setSortOrder] = useState(false);
   
    const sortFriends = () => {
        setSortOrder(!sortList);
    }

  return (
        <div>
        <header className="header">
            <h1>{title}</h1>
            <button className="btn-sort" onClick={sortFriends}>{sortList ? (<FaSortAlphaUp/>) : (<FaSortAlphaDown/>) }</button>
            <select name="friends" id="frnddrop" 
            value={dropvalue} 
            onChange={(e) => setDropText(e.target.value)} >
            <option value="All">All</option>
            <option value="Fav">Favourite</option>
            <option value="Notfav">Not Favourite</option>
            </select>
        </header>
    </div>
        
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}




export default Header
