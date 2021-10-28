import './index.css'
import React from "react";
import { Container, Grid, Paper } from '@material-ui/core'
const SlideShow = () => {
    const arrImage = [1, 2, 3, 4];
    return (
        <div>
            <h1>SlideShow</h1>
            <div className="slides">
                {Array.isArray(arrImage) && arrImage.map(x=>(
                    <div className="slide-image">{`image ${x}`}</div>
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