import Friend from './Friend'
const Friends = ({friendsdata, onDeleteFriend}) => {
   

    return (
        <>
          {friendsdata.map((friend) => (
        
            <Friend key={friend.id} friend={friend} onDelete={onDeleteFriend}/>
         )
              )}  
        </>
    )
}

export default Friends
