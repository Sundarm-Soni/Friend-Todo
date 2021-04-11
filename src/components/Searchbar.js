import React from 'react'
import {useState} from 'react'

const Searchbar = ({addMyFriend, myFriendData, setFrndList}) => {

    const [name, setText] = useState('');
    const [favourite, setFavourite] = useState(false)
    let [myFriendNewData] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        let about = ''
        if(!name){
           
            alert('Please add a task');
            return
        }
        if(name && name.charAt(0) === name.charAt(0).toLowerCase()){

            alert('Name should start with capital letter');
            return
        }
        if(favourite === false){
            about = 'not my friend';
        }else {
            about = 'is my friend';
        }

        let confirmMessage = '';
        
        myFriendData.forEach((frnd) => {
        if(name === frnd.name){
            confirmMessage = 'A friend with this name already exists. Are you sure ?'
            let a = window.confirm(confirmMessage); 
            if(a === true){
                addMyFriend({name, favourite, about});
                setText('');
                setFavourite(false);
            }else {
                confirmMessage = ''
                a= false;
            }
        }else{  
          
         
                addMyFriend({name, favourite, about});
                setText('');
                setFavourite(false);
            
            
        }
        });
      
    }
    const debounce = (func, delay) => {
        let inDebounce;
        return function() { 
          const context = this;
          const args = arguments;
          clearTimeout(inDebounce)
          inDebounce = setTimeout(() => func.apply(context, args), delay)
        }
      }

    const filterList = (name) => {
        if(name.length === 0){
        myFriendNewData = myFriendData;
        }else {
        myFriendNewData =  myFriendData.filter((friend) => name.length > 0 ? friend.name.toLowerCase().startsWith(name.toLocaleLowerCase()) : myFriendData);
        }
        setFrndList(myFriendNewData);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label>Friend Name</label>
            <input type='text' 
                name='searchbar'
                autoComplete="off"
                placeholder='Add or search your friend'
                id='search'
                value={name}
                onChange={(e) => {setText(e.target.value);debounce(filterList(e.target.value), 3000)}}
                />
            </div>
            <div className="form-control form-control-check">
              <label id="favlabel">Add to Favourite</label>
              <input type='checkbox' checked={favourite} value={favourite} onChange={(e) => setFavourite(e.currentTarget.checked)}/>
            </div>
           
        </form>
    )
}

export default Searchbar
