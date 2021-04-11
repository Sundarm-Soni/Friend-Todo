import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({title, addFriend}) => {
    const onClick = () => {
        
        addFriend();
    }
    
    return (
        <div>
        <header className="header">
            <h1>{title}</h1>
            <Button className='head-btn' text='Add' onClick={onClick} />
        </header>
        
        </div>
        
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}




export default Header
