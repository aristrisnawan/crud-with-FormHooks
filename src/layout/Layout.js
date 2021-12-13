import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'

export default function Layout({children}) {
    return (
        <div>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    )
}
