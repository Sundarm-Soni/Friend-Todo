import PropTypes from 'prop-types'
import { FaSortAlphaUp } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import {useState} from 'react'
const Header = ({title, myFriendList, dropFilterAll, dropFilterFav, dropFilterNotFav}) => {
  
    const [dropvalue, setDropText] = useState('All');
     let [sortList, setSortOrder] = useState(false);
   
    const sortFriends = () => {
        setSortOrder(!sortList)
        if(sortList){
            myFriendList('asc');
            
        }else{
            myFriendList('desc');
        }
        

     }

     const changeList = (e) => {
     
        setDropText(e.target.value);
        console.log(dropvalue);
        if(e.target.value === 'All'){
            
            dropFilterAll();
        } 
        if (e.target.value === 'Fav'){
            
            dropFilterFav();
        } 
        if (e.target.value === 'Notfav') {
            dropFilterNotFav();
        } 
           
     }

  return (
        <div>
        <header className="header">
            <h1>{title}</h1>
            <button className="btn-sort" onClick={sortFriends}>{sortList ? (<FaSortAlphaUp/>) : (<FaSortAlphaDown/>) }</button>
            <select name="friends" id="frnddrop" 
            value={dropvalue} 
            onChange={changeList} >
            <option value="All" >All</option>
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
