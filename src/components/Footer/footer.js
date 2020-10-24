import React from 'react';

import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

import './footer.scss'
//import  {  Link  }  from  'react-router-dom' ;
import { Button } from 'antd'

import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
    TwitterOutlined,
    SecurityScanOutlined,
    MessageOutlined
} from '@ant-design/icons';


export default function Footer() {
    return (
            <div className="container-fluid principal my-4">
                <div className="row ">
                   <div className="col-lg-3 text-lg-left text-center mt-4">
                        <Button type="link" id="botones-enlaces"> 
                            <MessageOutlined style={{fontSize: 25}} />
                            Contacto 
                        </Button>
                        <p />
                        <Button  type="link" id="botones-enlaces">
                            <SecurityScanOutlined style={{fontSize: 25}}/>
                            Politicas y Uso datos personales
                        </Button>
                    </div>
                  
                   <div className="col-lg-4 mx-auto">
                    
                    <h4 className="informacion">Tienda CAFI Online</h4>
                    <h4 className="informacion">317 124 0925</h4>
                    <h4 className="informacion">Autlan de Navarro, Jal.</h4>
                    <h4 className="informacion">mini logo de cafi</h4>
                   </div>

                   <div className="col-lg-3 contenedor-red mt-3">
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