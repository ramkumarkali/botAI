import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";


export function ChatInputForm( {generateResponse ,clearchat,chat ,setScroll}){

    const [input,setInput]=useState("")

 

    const HandleSubmit=(e)=>{
         e.preventDefault()
        generateResponse(input)
        setInput("")
    setScroll(prev => !prev)

    

    }
    const Handlesave=()=>{
       
        const chatHistory = JSON.parse(localStorage.getItem("chat"))||[]

        const date = new Date()
        localStorage.setItem("chat",JSON.stringify([{chat:chat ,datetime:date },...chatHistory ]))
        clearchat()

    }

    return(
        <>
     
       
         <Box sx={{ padding:"20px" ,display:"flex" ,alignItems:"center" ,justifyContent:"center", margin:"50px"}}>
         
         <Box width={1} gap={2} sx={{display:"flex",flexDirection:"row",p:"10px" ,justifyContent:"center",alignItems:"center"}}
       component="form" onSubmit={HandleSubmit} >
           <TextField   sx={{
                            flex: 1,
                            bgcolor: 'white',
                            borderRadius: 1,
                            '& input': {
                                fontSize: { xs: 12, md: 16 },
                                paddingLeft: { xs: 1, md: 2 },
                                paddingRight: { xs: 1, md: 2 },

                            }
                        }}
            value={input} onChange={(e)=>setInput(e.target.value)} 
            autoFocus 
            placeholder="quench your curiousity" 
            >
                  </TextField>
           
            <Button  onClick={HandleSubmit} variant="conatined" type="submit"
             sx={{ bgcolor:"primary.light" ,color:"primary.contrastText"}}>Ask</Button>

            <Button  onClick={Handlesave} variant="conatined"   disabled={!chat.length > 0}
             sx={{ bgcolor:"primary.light" ,color:"primary.contrastText"}}>Save</Button>
         </Box>

         </Box>
    

        </>
    )
}