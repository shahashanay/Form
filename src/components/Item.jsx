import PropTypes from 'prop-types';
import './Item.css'
const Item = (props)=>{
    const {Name,Lname,Tel,Emailp,Refp,Url} = props

    return (
        <div className='income'>
        <li ><p> ชื่อ: {Name} {Lname}</p><span>เบอร์โทร: {Tel}</span>
        <p>อีเมล: {Emailp}</p><p> Ref: {Refp}{Url}</p></li>
        </div>
    );
}
Item.propTypes={
    Name:PropTypes.string.isRequired,
    Lnamet:PropTypes.number.isRequired,
    Tel:PropTypes.string.isRequired,
    Emailp:PropTypes.number.isRequired,
    Refp:PropTypes.string.isRequired
}

export default Item