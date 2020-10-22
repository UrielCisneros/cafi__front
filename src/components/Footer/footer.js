import React from 'react';

import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

import './footer.scss'
//import  {  Link  }  from  'react-router-dom' ;

import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined
} from '@ant-design/icons';


export default function Footer() {
    return (
            <div className="container-fluid principal my-4">
                <div className="row ">
                   <div className="col-lg-9 text-lg-left text-center ">
                       <div className="d-flex ">
                        <p>Contacto</p>
                        <p>Politicas y Uso datos personales</p>
                       </div>
                       <div className="d-flex ">
                        <h5>Empresa sutana</h5>
                        <h5>direccion</h5>
                        
                        <h5>telefono</h5>
                        <h5>ubicacion</h5>
                        <h5>correo</h5>
                       </div>
                        
                   </div>
                   <div className="col-lg-3 contenedor-red">
                       <QueueAnim delay={1000} type="left">
                            <Texty delay={700} className="text-foot">
                                Buscanos:
                            </Texty>
                            <WhatsAppOutlined className="icon-red" />
                            <FacebookOutlined className="icon-red" />
                            <InstagramOutlined className="icon-red" />
                            <TwitterOutlined className="icon-red" />
                        </QueueAnim>
                   </div>
                </div>
                
            </div> 
    )
}