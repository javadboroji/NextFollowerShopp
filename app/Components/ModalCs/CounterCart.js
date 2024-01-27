import { Box, Button } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { increment,decrement,productToCart } from '@/app/ReduxSlice/ShoppingSlice'
import { useSelector,useDispatch } from 'react-redux'
function CounterCart({data}) {
    
    const [counter, setcounter] = useState(0)

    const productCart=useSelector(state=>state.shopp.shoppingProducts)

    const dispatch =useDispatch();


    const btnClickHandler =(e)=>{
        if(e.target.getAttribute("typebtn") === "add"){
           setcounter(counter+1);
          dispatch(increment()) 
        }else{

            if(counter>0){
            setcounter(counter-1);
                dispatch(decrement());
            }
            
           
        }
    }

    const btnAddToCArt=()=>{
        const productExists = productCart.some(product => product.id === data.id);
        if(counter >0 && !productExists){
            const setProductTobascket={...data,counter}
            dispatch(productToCart(setProductTobascket))

        }
    }
 
    
  return (
    <>
        <Box className="mt-6">
        <Button variant="outlined" onClick={(e)=>btnClickHandler( e)} typebtn='add' className='text-xl'> + </Button>
        <span className='text-xl px-4'>{counter}</span>
        <Button variant="outlined" onClick={(e)=>btnClickHandler(e )} typebtn='decrease' className='text-xl'> - </Button>
    </Box>
    <Button variant="outlined" onClick={()=>btnAddToCArt( )} typebtn='decrease' className='text-xl mt-4'>  اضافه کردن به سبدخرید </Button>
    </>
  )
}

export default CounterCart