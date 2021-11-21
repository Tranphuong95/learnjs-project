import React, {useState} from 'react';
import "./index.css";
import moment from 'moment';
import 'moment/locale/vi';
const Calendar = (props) => {
    const [chooseDay, setChooseDay]=useState("")
    moment.locale('vi');
    const date = moment().startOf("month").format("d/MM/yyyy");
    const listdaysInMonth = (month) => {
        let lists = [{w:[]}];
        const numberDayOfMonth = moment(month, "MM/yyyy").daysInMonth();
        for (let i = 1; i < numberDayOfMonth + 1; i++) {
            const date={d: moment(month, "MM/yyyy").date(i).format("DD/MM"), T: moment(month, "MM/yyyy").date(i).format("dd/MM"), Y: moment(month, "MM/yyyy").date(i).format("YYYY")}
            lists[lists.length-1].w.push(date)
            if(moment(month, "MM/yyyy").date(i).format("dd/MM").includes('CN') && i<numberDayOfMonth){ //i<numberDayOfMonth de khang dinh day khong phai nagy cuoi cung cua thang de tao tuan tiep theo
                lists.push({w:[]})
            }
        }
        return lists

    }
    console.log("chooseDay", chooseDay)
    return (
        <div className="calendar">
            <div className="cal-head">THÁNG 11 2021</div>
            <div className="calendar-container">
                <div className="grid-item">T hai</div>
                <div className="grid-item">T ba</div>
                <div className="grid-item">T tư</div>
                <div className="grid-item">T năm</div>
                <div className="grid-item">T sáu</div>
                <div className="grid-item">T bảy</div>
                <div className="grid-item">C nhật</div>
            </div>
            {listdaysInMonth("10/2021").map((x, i)=>(
                <div className="calendar-container">
                    {i===0 && Array.from({length: 7-x.w.length}, (x, i) => i).map((item)=>(
                        <div className="grid-item"></div>
                    ))}
                    {x.w.map((item, i)=>(
                        <div className="grid-item has-day" onClick={()=>setChooseDay(item)}>{item.d}</div>
                    ))}
                    {i === (listdaysInMonth("12/2021").length-1)&& Array.from({length: 7-x.w.length}, (x, i) => i).map((item)=>(
                        <div className="grid-item"></div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Calendar;