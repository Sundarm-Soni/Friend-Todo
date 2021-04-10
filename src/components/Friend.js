import Favouritebutton from './Favouritebutton';
import Deletebutton from './Deletebutton';
const Friend = ({friend}) => {
    return (
        <div className="friend">
              <h3>{friend.name}<span className="btn-group"><Favouritebutton/> <Deletebutton/></span><span id="about">{friend.about}</span></h3>
              
        </div>
    )
}

export default Friend
