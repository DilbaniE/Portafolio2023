import styles from '../styles/Proyectos.module.css'
import btn_next from '../assets/btn_next.svg'
import cssHtml from '../assets/cssHtml.svg'
import reactw from '../assets/react.svg'
import asincro from '../assets/asincro.svg'
import fireB from '../assets/fireB.svg'
import noCountry from '../assets/noCountry.svg'
import ideas from '../assets/ideas.svg'
import React from 'react'
import { Card } from './Card'
import { Footer } from './footer'

export const Proyectos = () => {
  return (
    <div className={`${styles.contenedorPrincipal}  `} >
        <div className={`${styles.contenedorVertical}  col-12 `}>

            <div className={`${styles.contenedorHorizontal}  col-12`} >
                <button className={`${styles.btn_FrontEnd}`} >Front End</button>
                <button className={`${styles.btn_otros}`} >Ruby on Rails</button>
                <button className={`${styles.btn_otros}`} >Python</button>
                
            </div>

            <div className={`${styles.contenedorCards}`} >
                <h1>Proyects</h1>

                <div className={`${styles.container__box}`} >
                  <a href="https://earnest-kheer-9fa95e.netlify.app/">
                  <div className={`${styles.box}`}>
                    <img src={cssHtml} alt="" />
                    <h5 className={`${styles.textoCard}`} > Type Scrip with React</h5>
                  </div>
                  </a>

                  <a href="https://segundosprintacamica.netlify.app/">
                  <div className={`${styles.box}`}>
                    <img src={reactw} alt="" />
                    <h5 className={`${styles.textoCard}`} >React</h5>
                  </div>
                  </a>

                  <a href="https://sp23z.csb.app/">
                  <div className={`${styles.box}`}>
                    <img src={asincro} alt="" />
                    <h5 className={`${styles.textoCard}`} >React Asincrónico</h5>
                  </div>
                  </a>

                <a href="https://prueba-9137f.web.app/">
                  <div className={`${styles.box}`}>
                    <img src={fireB} alt="" />
                    <h5 className={`${styles.textoCard}`} >React & FireBase</h5>
                  </div>
                  </a>

                  <a href="https://github.com/No-Country/c8-76-m-react">
                  <div className={`${styles.box}`}>
                    <img src={noCountry} alt="" />
                    <h5 className={`${styles.textoCard}`} >No Country</h5>
                  </div>
                  </a>

                  <a href="https://github.com/jorgeemilianom/donRemolo#readme">
                  <div className={`${styles.box}`}>
                    <img src={ideas} alt="" />
                    <h5 className={`${styles.textoCard}`} >Don Rémulo</h5>
                  </div>
                  </a>
                  
                </div>

            </div>

            <img className={`${styles.btn_next}`} src={btn_next} alt="" />

        </div>

    
    </div>
  )
}
