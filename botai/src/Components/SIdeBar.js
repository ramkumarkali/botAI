import {Box,Button,Stack,Typography, useMediaQuery} from "@mui/material"
import Logo from "../assets/ai.png"
import { useNavigate } from "react-router-dom"
import CloseIcon from "@mui/icons-material/Close";
import AddCommentIcon from "@mui/icons-material/AddComment";
export default function SideBar({setChat,closeMenu}){

  const navigate = useNavigate ( )
  const isMobile = useMediaQuery("(max-width=900px)");

  const HandleClick = async() => {
    navigate("/")
    setChat([]);
    closeMenu();
  }


    return(
        <>
        

        <Box sx={{ display:"flex",alignItems:"center", flexDirection:"column"}}>

        {isMobile && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            justifyContent: "flex-end",
           color:"white"
          }}
          onClick={closeMenu}
        >
          Close
        </Button>
      )}


        <Stack sx={{ backgroundColor:"primary.main"  }} gap={2}
        // sx={{ backgroundColor:"primary.main"}} 
        direction="row" width={1} justifyContent={"center"} mb={2} alignItems={"center"} >
          <Box  component="Img" src={Logo} width="50px" height="50px"> </Box>
        
        <Button  variant="contained" onClick={HandleClick} sx={{color:"primary.contrastText" ,width:"60%"}} >NewChat</Button>
        <AddCommentIcon sx={{ color: "white" }} />

        </Stack>

        
     

      <Button   variant="contained" onClick={()=>navigate("/history")} 
       sx={{ backgroundColor:"primary.main" ,color:"white",width:"60%"}}
       >pastconvo </Button>

        </Box>
       

        
        </>
    )
}