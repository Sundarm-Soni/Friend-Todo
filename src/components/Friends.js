import Friend from './Friend'
const Friends = ({friendsdata, onDeleteFriend, onToggleFav}) => {
   

    return (
        <>
          {friendsdata.map((friend) => (
        
            <Friend 
              key={friend.id} 
              friend={friend} 
              onDelete={onDeleteFriend}
              onToggle={onToggleFav}
              />
         )
              )}  
        </>
    )
}

export default Friends
