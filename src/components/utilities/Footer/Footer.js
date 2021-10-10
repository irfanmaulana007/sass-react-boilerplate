import React from 'react'

import PatriaLogo from 'Assets/logo/utpe_logo_white.png'
import './Footer.scss'

import { TextDescription } from 'Components/utilities/Text/Text'

export default function Footer () {
    return (
        <footer className="bg-gray-dark w-full">
            <div className="m-auto text-center py-5">
                <center>
                    <img src={PatriaLogo} className="mb-4" alt="PATRIA_LOGO" height="100%"/>
                </center>
                
                <TextDescription className="text-primary font-bold mb-1">PT. UNITED TRACTORS PANDU ENGINEERING</TextDescription>
                <TextDescription className="text-muted">PATRIA &copy; 2017. All right reserved</TextDescription>
            </div>
        </footer>
    )
}