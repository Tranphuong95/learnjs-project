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
        console.log(month, numberDayOfMonth)
        for (let i = 1; i < numberDayOfMonth + 1; i++) {
            if(moment(month, "MM/yyyy").date(i-1).format("dd/MM").includes('CN')){
                lists.push({w:[]})
            }
            const date={d: moment(month, "MM/yyyy").date(i).format("DD/MM"), T: moment(month, "MM/yyyy").date(i).format("dd/MM"), Y: moment(month, "MM/yyyy").date(i).format("YYYY")}
            lists[lists.length-1].w.push(date)
        }
        return lists

    }
    console.log("date:", date, moment.weekdays(), listdaysInMonth("12/2021"));
    console.log(chooseDay)
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
            {listdaysInMonth("12/2021").map((x, i)=>(
                <div className="calendar-container">
                    {i===0 && Array.from({length: 7-x.w.length}, (x, i) => i).map((item)=>(
                        <div className="grid-item"></div>
                    ))}
                    {x.w.map((item, i)=>(
                        <div className="grid-item" onClick={()=>setChooseDay(item)}>{item.d}</div>
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