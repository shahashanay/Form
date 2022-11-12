import { useContext } from "react"
import DataContext from "../data/DataContext"
import './reportComponent.css'
const ReportComponent =()=>{
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const {income,expense} = useContext(DataContext)
    return(
        <div>
            <h4>ยอดคงเหลือ</h4>
            <h1>฿{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}
export default ReportComponent