import React from 'react'
import "../styles/TopBar.css"
import { useApp } from '../AppContext'

export default function TopBar() {
    const { clickedPKG } = useApp()

    return (
        <div className='topbar-container'>
            {clickedPKG.id === null ? '' :
                <>
                    <p>Packge Name: <p className='pkg-data'>{clickedPKG?.name}</p></p>
                    <p>Packge ID: <p className='pkg-data'>{clickedPKG?.id}</p></p>
                    <p>Packge version: <p className='pkg-data'>{clickedPKG?.version}</p></p>
                </>
            }
        </div>
    )
}
