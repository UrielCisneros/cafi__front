import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './banner.scss';
import RegistroBanner from './registrar_banner';
import Admin404 from '../admin404';
 
const BgElement = Element.BgElement;

export default function BannerAdmin() {
	return (
		<div>
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroBanner />
			</div>
			<BannerAnim prefixCls="banner-user" autoPlay>
				<Element prefixCls="banner-user-elem" key="0">
					<BgElement
						key="bg"
						className="bg banner-elemento"
						style={{
							backgroundColor: '#364D79'
						}}
					>
						<div className="banner-textos">
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								Ant Motion Banner
							</TweenOne>
							<TweenOne
								className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								The Fast Way Use Animation In React
							</TweenOne>
						</div>
					</BgElement>
				</Element>
				<Element prefixCls="banner-user-elem" key="1">
					<BgElement
						key="bg"
						className="bg banner-elemento"
						style={{
							background: '#64CBCC'
						}}
					>
						<div className="banner-textos">
							<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
								Ant Motion Banner
							</TweenOne>
							<TweenOne
								className="banner-user-text"
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
								The Fast Way Use Animation In React
							</TweenOne>
						</div>
					</BgElement>
				</Element>
			</BannerAnim>
			<Admin404 />
		</div>
	);
}
