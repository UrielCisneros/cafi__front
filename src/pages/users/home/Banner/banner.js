import React from 'react';
import './banner.scss';
//import Admin404 from '../../../admin/admin404'

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import {Link} from 'react-router-dom';

import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default function Banner() {
	return (
		<div className="user">
		<BannerAnim prefixCls="banner-user">
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            
          />

          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            C A F I 
          </TweenOne>

          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Tu tienda OnLine
          </TweenOne>

          <TweenOne className="boton-ver mx-auto" animation={{ y: 30, opacity: 0, type: 'from', delay: 900 }}>
              <Link>Ver mas!</Link>
          </TweenOne>
          <div className="wave" style={{height: "150px", overflow: "hidden"}} >
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
				      <path d="M-33.57,39.95 C263.82,260.03 324.77,-94.23 555.01,163.31 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}>
					    </path>
				    </svg>
				  </div>
          
        </Element>
        
      </BannerAnim>

		  </div>
    
	);
}