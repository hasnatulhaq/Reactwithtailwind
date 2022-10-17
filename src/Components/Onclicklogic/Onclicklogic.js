import { useState } from "react"


const Onclick = (WrappedComponent)=>{
    function Onclicklogic(){
          const [index , setIndex] = useState()
            
          function changeindex(){
                 setIndex()
          }
        return(
                <>
                     <WrappedComponent/>
                </>
        )
    }
}



export default Onclick