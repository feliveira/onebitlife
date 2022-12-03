import { useState } from "react";
import Homepage from "./Homepage";
import AllPages from "./AllPages";

export default function Routes ( )
{
    const [showHome, setShowHome] = useState(false)
    return <>{showHome ? <Homepage /> : <AllPages />}</>
}