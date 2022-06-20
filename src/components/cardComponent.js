import React from 'react'

import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress from '@mui/material/LinearProgress';

export default function CardComponent(props) {
    return (
        <React.Fragment>
            <Card sx={{ width: 274, boxShadow: "0px 3px 6px #00000021" }}>
                <CardHeader
                    avatar={
                        <FiberManualRecordIcon fontSize='small' sx={{ color: props.color }} />
                    }
                    action={

                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Design"
                />
                <CardContent>
                    <Typography variant='body2' sx={{ fontWeight: "500", fontSize: "15px" }} >complete user reaserch for new website</Typography>
                    {props.liner ?
                        <LinearProgress variant="determinate" value={27}
                            sx={{
                                "& .MuiLinearProgress-bar": { backgroundColor: props.color, borderRadius: "2rem", },
                                backgroundColor: "#EFEFEF",
                                borderRadius: "2rem",
                                height: "7px",
                                marginTop: "10px",
                                boxShadow: "0px 3px 6px #00000029"
                            }}
                        /> : <Box sx={{height:"7px"}} />}
                </CardContent>
                <CardActions disableSpacing>
                    <Box sx={{ width: "82px", height: "21px", display: "flex", justifyContent: "center", alignItems: "center", background: props.color, color: "white", borderRadius: "5px", fontSize: "12px", marginRight: "auto" }} >
                        Heigh Priority
                    </Box>
                    <Typography variant='body1' sx={{ fontSize: "12px" }} >Due in 4 days</Typography>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}
