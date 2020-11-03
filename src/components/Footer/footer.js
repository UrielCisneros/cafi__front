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
    YoutubeOutlined, 
    SecurityScanOutlined,
    MessageOutlined
} from '@ant-design/icons';


export default function Footer() {
    return (
            <div className="container-fluid my-4">
                <div className="row text-center">
                    <div className="d-none d-sm-none d-md-block col-lg-3 mt-3 mx-auto">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                    </div>

                    <div className="col-lg-6 text-lg-center mt-2">

                        <div className="">
                            <h4 className="informacion">Tienda CAFI Online</h4>
                            <h4 className="informacion">317 124 0925</h4>
                            <h4 className="informacion">Autlan de Navarro, Jal.</h4>
                        </div>

                        <div className=" text-center text-lg-center">
                            <Button type="link" id="botones-enlaces"> 
                                <MessageOutlined style={{fontSize: 20}} />
                                Contacto 
                            </Button>
                            
                            <Button  type="link" id="botones-enlaces">
                                <SecurityScanOutlined style={{fontSize: 20}}/>
                                Politicas y Uso datos personales
                            </Button>

                            <Button  type="link" id="botones-enlaces">
                                <SecurityScanOutlined style={{fontSize: 20}}/>
                                ¿Quienes Somos?
                            </Button>
                        </div>
                    </div>
                  

                    <div className="col-lg-3 text-center mt-3">
                       <QueueAnim delay={1000} type="left">
                            <Texty delay={700} className="text-foot">
                                Buscanos:
                            </Texty>
                            <WhatsAppOutlined className="icon-red" />
                            <FacebookOutlined className="icon-red" />
                            <InstagramOutlined className="icon-red" />
                            <YoutubeOutlined  className="icon-red" />
                        </QueueAnim>
                    </div>
                </div>
            </div> 
    )
}