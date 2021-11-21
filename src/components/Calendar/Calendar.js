import React, { useState } from 'react';
import "./index.css";
import moment from 'moment';
import 'moment/locale/vi';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Calendar = (props) => {
    const [chooseDay, setChooseDay] = useState("");
    const [chooseMonth, setChooseMonth] = useState(moment().format("MM/YYYY"))
    moment.locale('vi');
    const date = moment().startOf("month").format("d/MM/yyyy");
    const listdaysInMonth = (month) => {
        console.log(month)
        let lists = [{ w: [] }];
        const numberDayOfMonth = moment(month, "MM/yyyy").daysInMonth();
        for (let i = 1; i < numberDayOfMonth + 1; i++) {
            const date = { d: moment(month, "MM/yyyy").date(i).format("DD/MM"), T: moment(month, "MM/yyyy").date(i).format("dd/MM"), Y: moment(month, "MM/yyyy").date(i).format("YYYY") }
            lists[lists.length - 1].w.push(date)
            if (moment(month, "MM/yyyy").date(i).format("dd/MM").includes('CN') && i < numberDayOfMonth) { //i<numberDayOfMonth de khang dinh day khong phai nagy cuoi cung cua thang de tao tuan tiep theo
                lists.push({ w: [] })
            }
        }
        return lists

    }
    const handleChangeOneMonth=(value)=>{
        setChooseMonth(moment(chooseMonth, "MM/YYYY").add(value, "month").format("MM/YYYY"))
    }
    console.log("chooseDay", chooseDay);
    console.log("chooseMonth:", chooseMonth, moment(chooseMonth, "MM/YYYY").add(-1, "month").format("MM/YYYY"))
    return (
        <div className="calendar">
            <div className="cal-head">
                <div className="arrow-icon" onClick={()=>handleChangeOneMonth(-1)}><ArrowBackIosIcon style={{marginTop:10}}/></div>
                <div>{chooseMonth}</div>
                <div className="arrow-icon" onClick={()=>handleChangeOneMonth(1)}><ArrowForwardIosIcon style={{marginTop: 10}}/></div>
            </div>
            <div className="calendar-container">
                <div className="grid-item">T hai</div>
                <div className="grid-item">T ba</div>
                <div className="grid-item">T tư</div>
                <div className="grid-item">T năm</div>
                <div className="grid-item">T sáu</div>
                <div className="grid-item">T bảy</div>
                <div className="grid-item">C nhật</div>
            </div>
            {listdaysInMonth(chooseMonth).map((x, i) => (
                <div className="calendar-container">
                    {i === 0 && Array.from({ length: 7 - x.w.length }, (x, i) => i).map((item) => (
                        <div className="grid-item"></div>
                    ))}
                    {x.w.map((item, i) => (
                        <div className="grid-item has-day" onClick={() => setChooseDay(item)}>{item.d}</div>
                    ))}
                    {i === (listdaysInMonth(chooseMonth).length - 1) && Array.from({ length: 7 - x.w.length }, (x, i) => i).map((item) => (
                        <div className="grid-item"></div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Calendar;