import Favouritebutton from './Favouritebutton';
import Deletebutton from './Deletebutton';
const Friend = ({friend, onDelete, onToggle}) => {

    const delfunc = () => { 
    let confirmMessage = 'Are you sure you want to delete friend?';
    let a = window.confirm(confirmMessage); 
    if(a === true){
    onDelete(friend.id)
    confirmMessage = 'You pressed OK!';
    }else confirmMessage = 'You pressed Cancel!';

}

    return (
        <div className="friend">
              <h3>{friend.name}<span className="btn-group">
                  <Favouritebutton onToggle={() => onToggle(friend.id)} favFriend = {friend}/> 
                  <Deletebutton onDel={ delfunc }/></span>
                  <span id="about">{friend.about}</span></h3>
              
        </div>
    )
}

export default Friend
