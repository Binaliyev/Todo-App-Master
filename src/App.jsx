import { RouterProvider } from "react-router-dom"
import { route } from "./Router"

export const App = () => {
    return(
        <RouterProvider router={route}/>
    )
}