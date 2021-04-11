import {FaTrashAlt} from 'react-icons/fa';

const Deletebutton = ({onDel}) => {
    return ( 
    <button 
        className='delbtn'  onClick={onDel}><FaTrashAlt style={{color:'grey'}}/></button>
        )
}

export default Deletebutton
