import './index.css'
import React, { useEffect } from "react";
import { Container, Grid, Paper } from '@material-ui/core'
const SlideShow = () => {
    const arrImage = [1, 2, 3, 4];
    const slides=document.querySelectorAll("div");
    const sildesLength=slides && slides.length;
    let arrSlides=[];
    let arr=[];
    if(sildesLength){
        for(let i=0; i<sildesLength; i++){
            arrSlides.push(slides[i]);
        }
    }
   arrSlides.forEach((x,i)=>{
       if(x.className.includes("slide-image_")==true){
           arr.push(x)
       }
   })
    return (
        <div>
            <h1>SlideShow</h1>
            <div className="slides">
                {Array.isArray(arrImage) && arrImage.map((x,i)=>(
                    <div className={`slide-image_${i}`}>{`image ${x}`}</div>
                ))}
            </div>
            {/* <Grid>
                <Grid item container md={6} alignItems="stretch">
                    <Paper style={{ width: '500px' }}>
                        {Array.isArray(arrImage) && arrImage.map((x, i) => (
                            <Grid item style={{ background: "green", border: "1px solid white", minWidth: "400px"}}>
                                {`anh ${i}`}
                            </Grid>
                        ))}
                    </Paper>
                </Grid>
            </Grid> */}
        </div>

    )
}
export default SlideShow