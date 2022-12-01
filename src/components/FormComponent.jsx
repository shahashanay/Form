import { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'
const FormComponent = (props)=>{
    const [Name,setName] = useState('')
    const [Lname,setLname] = useState('')
    const [Tel,setTel] = useState('')
    const [Emailp,setEmailp] = useState('')
    const [Refp,setRefp] = useState('')

    const inputName = (event)=>{
        setName(event.target.value)
    }
    const inputLname = (event)=>{
        setLname(event.target.value)
    }
    const inputTel = (event)=>{
        setTel(event.target.value)
    }
    const inputEmailp = (event)=>{
        setEmailp(event.target.value)
    }
    const inputRefp = (event)=>{
        setRefp(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            Name:Name,
            Lname:Lname,
            Tel:Number(Tel),
            Emailp:Emailp,
            Refp:Refp,
        }
        props.onAddItem(itemData)
        setName('') 
        setLname('')
        setTel('') 
        setEmailp('')
        setRefp('')
    }
    const Dtime = () =>{
        const [message, setMessage]= useState()
    useEffect(()=>{
        console.log('test');
        setTimeout(()=>{
           setMessage= saveItem(true)
        },1000)
    },[]);
    return {message}};

    return(
        <div ><h1 className='design'>แบบฟอร์มลงทะเบียน</h1>
            <form onSubmit={saveItem}>
                <div >
                    <label ><b>ชื่อ</b></label>
                    <input  name='Name' type="text" placeholder="ชื่อ" onChange={inputName} value={Name} required/>
                </div>
                <div >
                    <label ><b>นามสกุล</b></label>
                    <input  name='LName' type="text" placeholder="นามสกุล" onChange={inputLname} value={Lname}  required/>
                </div>
                <div>
                    <label ><b>เบอร์โทรศัพท์</b></label>
                    <input  name='TEL'type="number" placeholder="+66xxx-xxx-xxx" onChange={inputTel} value={Tel}  required/>
                </div> 
                <div>
                    <label><b>อีเมล</b></label>
                    <input name='Emailp'type="email" placeholder="@" onChange={inputEmailp} value={Emailp}  required/>
                </div>
                <div >
                    <label><b>ref</b></label>
                    <input name='Refp' type="text" placeholder="" onChange={inputRefp} value={Refp}/>
                </div> 
                <div>
                    <button type="Submit" className="btn"  >ลงทะเบียน</button>
                </div>
            </form>
        </div>

        
    );
}
export default FormComponent