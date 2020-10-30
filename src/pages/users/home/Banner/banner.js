import React from 'react';
import './banner.scss';
import Admin404 from '../../../admin/admin404'

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
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
            style={{
              background: '#364D79',
            }}
          />

          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            C A F I 
          </TweenOne>

          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Tu tienda OnLine
          </TweenOne>
          
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            EL NUEVO MUNDO
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Entra a la era de las ventas Online
          </TweenOne>
        </Element>
      </BannerAnim>
      <Admin404 />
		</div>
	);
}