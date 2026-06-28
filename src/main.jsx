import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Content from './pages/Content.jsx'
import {AudienceInsights,
  Contact,
  CreatorIntro,
  PerformanceMetics,
  PreviousBrandCollabs,
  SocialMediaOverview,
  CreatorCard,} from './components/index.js'
import { Provider } from 'react-redux'
import store from "./store/store.js"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Content/>
      },
      {
        path:"/content",
        element:<Content/>
      },
      // {
      //   path:"/content/Audience",
      //   element:<AudienceInsights/>
      // },
      // {
      //   path:"/content/contact",
      //   element:<Contact/>
      // },
      // {
      //   path:"/content/PerformanceMetics",
      //   element:<PerformanceMetics/>
      // }
      ,{
        path:"/content/:slug",
        element:<CreatorCard/>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
