import * as React from "react"
import { BsCartFill } from 'react-icons/bs';
import { ShareContext } from "../context/Context";

const CartButton = ()=>{
const dataContext = React.useContext(ShareContext)
console.log(dataContext);
return(

    <div onClick={()=>dataContext.setOpenCart(true)} className="wrapper-button-cart" >
            <BsCartFill />
    </div>

)


}

export default CartButton