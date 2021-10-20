import './index.css';
import React from "react";
const NavBars =()=>{
    const $=document.querySelector.bind(document);
    const $$=document.querySelectorAll.bind(document);
    const tabs=$$(".tab-item");
    const panes=$$(".pane-item")
    tabs.forEach((tab, index) => {
        tab.onclick=function(){
            $(".tab-item.active").classList.remove("active");
            // $(".pane-item.active").classList.remove("active");
            panes.forEach((item)=>{
                item.style.display="none"
            })
            this.classList.add("active");
            // panes[index].classList.add("active");
            panes[index].style.display="block";
        }
    });
    return (
        <div>
            <div className="tabs">
                <div className="tab-item active">
                    React Js
                </div>
                <div className="tab-item">
                    Angule Js
                </div>
                <div className="tab-item">
                    Vue Js
                </div>
                <div className="tab-item">
                    Embler Js
                </div>
            </div>
            <div className="panes">
                <div className="pane-item">
                    React Js
                </div>
                <div className="pane-item">
                    Angule Js
                </div>
                <div className="pane-item">
                    Vue Js
                </div>
                <div className="pane-item">
                    Embler Js
                </div>
            </div>
        </div>

    )
}
export default NavBars