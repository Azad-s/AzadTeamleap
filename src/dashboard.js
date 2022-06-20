import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Allpods from "./assets/Allpods.svg"
import Feed from "./assets/Feed.svg"
import List from "./assets/List.svg"
import Boards from "./assets/Boards.svg"
import Gantt from "./assets/Gantt.svg"
import CardComponent from './components/cardComponent';


export default function Dashboard() {

    const [value, setValue] = React.useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const color = ["#8833FF", "#33BFFF", "#FFCB33", "#29CC39"];
    return (
        <Box>
            <Box sx={{ width: "1080px", height: "932px", border: "2px solid #EDEFF2", }} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ alignItems: "center" }} >
                        <Tab label="All Pods" iconPosition="start" icon={<img src={Allpods} alt="#" />} />
                        <Tab label="Feed" iconPosition="start" icon={<img src={Feed} alt="#" />} />
                        <Tab label="List" iconPosition="start" icon={<img src={List} alt="#" />} />
                        <Tab label="Boards" iconPosition="start" icon={<img src={Boards} alt="#" />} />
                        <Tab label="Gantt" iconPosition="start" icon={<img src={Gantt} alt="#" />} />
                        <Box sx={{ flexGrow: 1 }} />
                        <Button variant='contained' sx={{ width: "120px", height: "30px", textTransform: "none", backgroundColor: "#5433FF" }} >New Task</Button>
                    </Tabs>
                </Box>
                <Stack direction={"row"} spacing={4} >
                    {
                        ["TO DO", "IN PROGRESS", "REVIEW", "DONE"].map((text, i) =>
                            <Box key={i} sx={{ width: "274px", height: "36px", display: "flex", alignItems: "center", color: "black", borderLeft: `${color[i]} 5px solid`, }} >
                                <Typography sx={{ fontSize: "13px/22px", ml: "15px" }} >{text}</Typography>
                            </Box>
                        )
                    }
                </Stack>
                <Stack direction={"row"} spacing={4} >

                   <CardComponent color={color[0]}  />
                   <CardComponent color={color[1]} liner={true} />
                   <CardComponent color={color[2]}  />
                   <CardComponent color={color[3]}  />
                </Stack>
            </Box>
        </Box>
    )
}
