import './index.css'
import React from "react";
const SlideShow=()=>{
    const arrImage=[1,2,3,4];
    return (
        <div>
            <h1>SlideShow</h1>
            <div className="slides">
                {Array.isArray(arrImage) && arrImage.map(x=>(
                    <div className="slide-image">{`image ${x}`}</div>
                ))}
            </div>
        </div>

    )
}
export default SlideShow