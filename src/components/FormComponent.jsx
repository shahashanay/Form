import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'
const FormComponent = (props)=>{
    const [Name,setName] = useState('')
    const [Lname,setLname] = useState('')
    const [Tel,setTel] = useState('')
    const [Emailp,setEmailp] = useState('')
    const [Refp,setRefp] = useState('')
    const [formvalid,setFormValid]= useState(false)
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
            Refp:Refp
        }
        props.onAddItem(itemData)
        setName('') 
        setLname('')
        setTel('') 
        setEmailp('')
        setRefp('')
    }
    useEffect(()=>{
        const checkData = Name.trim().length>0 && Tel!==0 && Lname.trim().length>0 && Emailp.trim().length>0 
            setFormValid(checkData)
    })
    return(
        <div ><h1 className='design'>แบบฟอร์มลงทะเบียน</h1>
            
            <form onSubmit={saveItem}>
                <div >
                    <label ><b>ชื่อ</b></label>
                    <input className='' type="text" placeholder="ชื่อ" onChange={inputName} value={Name}/>
                </div>
                <div >
                    <label><b>นามสกุล</b></label>
                    <input type="text" placeholder="นามสกุล" onChange={inputLname} value={Lname}/>
                </div>
                <div>
                    <label><b>เบอร์โทรศัพท์</b></label>
                    <input type="number" placeholder="+66xxx-xxx-xxx" onChange={inputTel} value={Tel}/>
                </div>
                <div>
                    <label><b>อีเมล</b></label>
                    <input type="email" placeholder="@" onChange={inputEmailp} value={Emailp}/>
                </div>
                <div >
                    <label><b>ref</b></label>
                    <input type="text" placeholder="" onChange={inputRefp} value={Refp}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formvalid}>ลงทะเบียน</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent