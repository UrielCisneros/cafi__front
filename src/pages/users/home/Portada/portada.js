import React from 'react';
import './portada.scss';
//import Admin404 from '../../../admin/admin404'

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import SolicitudInformacion from '../SolicitudForm/solicitud'


import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;


export default function Portada() {
	return (
		<div className="portada" >
		<BannerAnim prefixCls="portada-user">
        <Element 
          prefixCls="portada-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
          />

          <TweenOne className="portada-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            C A F I 
          </TweenOne>

          <TweenOne className="portada-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Tu tienda OnLine
          </TweenOne>

          <SolicitudInformacion />

          {/* <div className="wave-principal" style={{height: "150px", overflow: "hidden"}} >
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
				      <path d="M-33.57,39.95 C263.82,260.03 324.77,-94.23 555.01,163.31 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}>
					    </path>
				    </svg>
				  </div> */}
          
        </Element>
        
      </BannerAnim>

		  </div>
    
	);
}