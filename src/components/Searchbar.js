import React from 'react'
import {useState} from 'react'

const Searchbar = ({toggleFavouriteCheck}) => {

    const [text, setText] = useState('');
    const [favourite, setFavourite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add a task')
            return
        }


    }



    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label>Friend Name</label>
            <input type='text' 
                name='searchbar'
                placeholder='Add your friend to list'
                id='search'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
              <label id="favlabel">Add to Favourite</label>
              <input type='checkbox'/>
            </div>
           
        </form>
    )
}

export default Searchbar
