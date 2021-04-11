import React from 'react'
import {useState} from 'react'

const Searchbar = ({addMyFriend, myFriendData}) => {

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
      
        addMyFriend({name, favourite, about});
        setText('');
        setFavourite(false);
    }

    const filterList = () => {
        myFriendNewData =   myFriendData.filter((friend) => friend.name.toLowerCase() === name.toLowerCase());
        console.log(myFriendNewData);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label>Friend Name</label>
            <input type='text' 
                name='searchbar'
                placeholder='Add your friend to list'
                id='search'
                value={name}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={() => filterList()}
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
