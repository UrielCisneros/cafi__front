import React from 'react';
import './banner.scss';

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';



import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default function Banner() {
	return (
		<div className="banner-home">
		<BannerAnim prefixCls="banner-home-user">

        <Element 
          prefixCls="banner-home-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="home-bg"
          />
          <TweenOne className="banner-home-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            C A F I 
          </TweenOne>
          <TweenOne className="banner-home-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Tu tienda OnLine
          </TweenOne>
        </Element>

        <Element 
          prefixCls="banner-home-elem" 
          key="1"
        >
          <BgElement
            key="bg"
            className="home-bg"
            style={{
							background: '#64CBCC'
						}}
          />

          <TweenOne className="banner-home-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            C A F I 
          </TweenOne>
          <TweenOne className="banner-home-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 800 }}
          >
            Tu tienda OnLine
          </TweenOne>

				</Element>
        
    </BannerAnim>

		</div>
    
	);
}