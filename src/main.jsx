import { StrictMode } from 'react'
import { createRoot , ReactDom} from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './tailwind.css'

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <App />

    </BrowserRouter>,
)
