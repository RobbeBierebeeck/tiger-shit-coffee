import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from '~/app/components'
import './index.css'
import '~styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
)
