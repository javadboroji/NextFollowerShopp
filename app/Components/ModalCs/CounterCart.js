import { Box, Button } from '@mui/material'
import React,{useState} from 'react'

function CounterCart() {
    const [counter, setCounter] = useState(0)
    const btnClickHandler =(e)=>{
        if(e.target.getAttribute("typebtn") === "add"){
            setCounter((prevState)=>prevState+1)
        }else{
            if(counter > 0){

                setCounter((prevState)=>prevState-1)
            }else{
                return
            }
        }
    }

  return (
    <Box className="mt-6">
        <Button variant="outlined" onClick={(e)=>btnClickHandler( e)} typebtn='add' className='text-2xl'> + </Button>
        <span className='text-xl px-4'>{counter}</span>
        <Button variant="outlined" onClick={(e)=>btnClickHandler(e )} typebtn='decrease' className='text-2xl'> - </Button>
    </Box>
  )
}

export default CounterCart