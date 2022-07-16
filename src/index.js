
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.js'


const container=document.getElementById("root");
const ele=createRoot(container);
ele.render(<App />);