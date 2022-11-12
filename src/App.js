import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import {useEffect, useState} from "react"
import DataContext from "./data/DataContext";
import ReportComponent from "./components/reportComponent";
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";

//import { element } from "prop-types";
function App() {
  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
  const [items,setItems] = useState([])
  const [reportIncome,setreportIncome] = useState(0)
  const [reportExpense,setreportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
  useEffect(()=>{
      const amounts = items.map(items=>items.amount)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
      setreportIncome(income.toFixed(2))
      setreportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])
  return (
<DataContext.Provider value={
  {
    income :reportIncome,
    expense :reportExpense
  }
}>
<div className="container">
          <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
          <Router>
          <div>
            <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />} />
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transaction items={items} />
                  </>
                }
              />
            </Routes>
          </div>
          </Router>
      </div>  
</DataContext.Provider>
  );
}

export default App;
