import React from 'react';

import './home.scss';
import Banner from './Banner/banner'
import Geolocalizacion from '../../../components/Geolocalizacion/geolocalizacion';
import CarruselEmpresas from './Carrusel/carrusel_empresas'
import Testimonios from './Testimonios/testimonios'

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';


import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined 

} from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function Home() {
	return (
		<div >
			
			<div className="row">
				<Banner />				
			</div>

			<div className="row my-5 text-center justify-content-center align-items-center">
					<QueueAnim delay={800} type="scale" >
						<Link><Texty type="scale" key="a" className="boton-vender px-5" >
							¡¿Quiero vender en linea?! 
						</Texty></Link>
					</QueueAnim>
				
			</div>

			<div className="row contenedores" >
				<QueueAnim type="left" className="col-lg-4 my-3">
					<Texty key="a" className="titulo-home">
						Encuentranos en:
					</Texty>
					<Geolocalizacion
							width="100%"
							height="80%"
						 	center={[ 19.771758, -104.366652 ]}
							titleLayer={'map'}
							zoom={15}
							apikey="I0G4Jr6RUg71dsHIRF0qGzn0l39bAY1V"
							nombreMarcador="TIENDA CAFI"
							draggable="false"
						/>
				</QueueAnim>

				<QueueAnim type="bottom"  className="col-lg-4 my-3">
					<h1 style={{fontSize: 100, textAlign: "center"}}>CAFI-logo</h1>
				</QueueAnim>
				
				<QueueAnim delay={900} type="right" className="col-lg-4 my-2">
					<Texty key="a" className="titulo-home" >
							Nuestras Redes sociales:
					</Texty>
					<div key="b" className="contenedor-reds">
						<WhatsAppOutlined className="redes" />
						<FacebookOutlined className="redes" />
						<InstagramOutlined className="redes" />
						<YoutubeOutlined  className="redes" />
					</div>
				</QueueAnim>
			</div>
			
			<div className="row contenedor-black">
				<Texty type="top"  delay={700} className="titulo-home">
					¿Que opinan nuestros clientes?
				</Texty>

				<Testimonios />

			</div>

			<div className="row contenedor-black">
			<QueueAnim delay={700} type="bottom">
				<Texty type="top"  delay={700} className="titulo-home">
					Empresas con CAFI
				</Texty>

				<div key="a" className="text-center">
					<TweenOne
						animation={{
							Children: {
								value: typeof 10 === 'number' ? 10 : 100,
								floatLength: 0
							},
							duration: 1500
						}}
						style={{ fontSize: 140, fontWeight: 'bold' }}
					>
						0
					</TweenOne>
				</div>
			</QueueAnim>
			</div>

			<div className="row contenedores">
				<QueueAnim delay={700} type="left">
					<Texty  className=" mt-5 titulo-home" type="top"  delay={700} >
						Empresas dentro de CAFI 
					</Texty>
				</QueueAnim>

				<CarruselEmpresas />
			</div>

		</div>
	);
}
