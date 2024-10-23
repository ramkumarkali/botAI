import {Box,Button,Stack,Typography} from "@mui/material"
export default function Navbar(){

    return(
        <>

        <Box   bgcolor="secondary.main"  sx={{mt:"20px", display:"flex", height:"50px"}}>
            <Typography color="primary.contrastText" variant="h4" >
                Bot Ai
            </Typography>

        </Box>
        
        </>
    )
}