import Friend from './Friend'
const Friends = ({friendsdata}) => {
   

    return (
        <>
          {friendsdata.map((friend) => (
          <>
            <Friend key={friend.id} friend={friend}/>
          </>)
              )}  
        </>
    )
}

export default Friends
