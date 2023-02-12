import React from 'react'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.contenedorPrincipal} >
        
        <div>
            
            <div className={`${styles.textos} ` } >
                <p>Home</p>
                <p>About me</p>
                <p>Contact</p>
            </div>

        </div>

    </div>
  )
}
