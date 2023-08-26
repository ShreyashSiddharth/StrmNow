import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import AnimeInfo from "./components/AnimeInfo";
import Body from "./components/Body";
import SearchResults from "./components/SearchResults";
import EpisodeCard from "./components/EpisodeCard";
import WacthEpisode from "./components/WacthEpisode";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement :<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
           
            
            {
                path:"/anime/:id",
                element:<AnimeInfo />,
                
            },
            {
                path:"/search/:querry",
                element:<SearchResults/>
            },
            {
                path:"/watch/:epId",
                element:<WacthEpisode />,
            },

        ],
    },
    
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={appRouter}/>
</React.StrictMode>

);