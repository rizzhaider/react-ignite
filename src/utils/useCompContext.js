import { createContext } from "react"

const UseCompContext = createContext({
    componentData:{
        address:"Shakti Nagar",
        contact:"7275252552"
    }
})

UseCompContext.displayName = "UseCompContext";

export default UseCompContext;