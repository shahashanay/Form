import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState} from "react"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
//import { element } from "prop-types";
function App() {
  const initState = [{Name:"Sahadsanai",Lname:"Poomprasert",Tel:"0965417466",Emailp:"sahadsanai1@gmail.com",Refp:"test"},
  {Name:"Panadda",Lname:"Popum",Tel:"0987654321",Emailp:"panadda@gmail.com",Refp:"Test2"},]
  const [items,setItems] = useState(initState)
  const onAddNewItem = (newItem)=>{
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }

  return (
    <div ><Navbar/>
<div className="container">
          <Router>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลผู้ลงทะเบียน</Link>
            </li>
            <li>
              <Link to="/insert">ลงทะเบียน</Link>
            </li>
            </ul>
          <div>
            <Routes>
            <Route path="/" element={<Transaction items={items} />} />
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                  </>
                }
              />
            </Routes>
          </div>
          </Router>
      </div>  
      </div>
  );
}

export default App;
