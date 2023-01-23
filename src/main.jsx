import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import HooksApp from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks />
  // </React.StrictMode>,
)
