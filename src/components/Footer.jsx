import React from 'react'
import styles from '../styles/Footer.module.css'
import redes from '../assets/redes.svg'
import redes2 from '../assets/redes2.svg'
export const Footer = () => {
  return (
    <div className={`${styles.principal} col-12 `} >
      <div className={`${styles.contenedorIconos}`} >
        <img className={`${styles.iconoSuperior}`} src={redes2} alt="" />  
        <img  className={`${styles.iconoInferior}`} src={redes} alt="" />  
      </div>  
    
    

    
    </div>
  )
}
