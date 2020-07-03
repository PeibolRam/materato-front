import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <img src="/logo-batman.png" alt="Logo"/>
            </div>
            <div className="menu_footer">
                <ul>
                    <li>Contactanos</li>
                    <li>Preguntas frecuentes</li>
                    <li>Terminos y condiciones</li>
                </ul>
            </div>
        </footer>
    )
}
