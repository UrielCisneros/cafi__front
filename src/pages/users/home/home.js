import React from 'react';

import './home.scss';
import Banner from './Banner/banner'
import Geolocalizacion from '../../../components/Geolocalizacion/geolocalizacion';
import CarruselEmpresas from './Carrusel/carrusel_empresas'
import Testimonios from './Testimonios/testimonios'
import SolicitudInformacion from './SolicitudForm/solicitud';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';


import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined 

} from '@ant-design/icons';
//import { Link } from 'react-router-dom';


export default function Home() {
	return (
		<div className="container-fluid principal">
			
			<div className="row contenedores">
				<Banner />

				
			</div>
			<div className="row contenedores">
				<SolicitudInformacion />
			</div>

			<div className="row mt-5 mx-auto" >
				<div className="col-lg-5 mx-auto contenedor-info">
					<QueueAnim type="left">
						<Texty key="a" className="titulo-home">
							Encuentranos en:
						</Texty>
						<Geolocalizacion
								width="100%"
								height="250px"
								center={[ 19.771758, -104.366652 ]}
								titleLayer={'map'}
								zoom={15}
								apikey="I0G4Jr6RUg71dsHIRF0qGzn0l39bAY1V"
								nombreMarcador="TIENDA CAFI"
								draggable="false"
							/>
					</QueueAnim>
				</div>

				<div className="col-lg-5 mx-auto mt-4">
					<img height="320px" width="100%" src="https://picsum.photos/800/802/?random" alt="a"/>				
				</div>

				<div className="col-lg-5 mx-auto hovers mt-5">
					<img  height="320px" width="100%" src="https://picsum.photos/800/802/?random" alt="ss"/>				
				</div>

				<div className="col-lg-5 contenedor-info mt-5">
					<QueueAnim delay={900} type="right" >
						<Texty key="a" className="titulo-home mt-5" >
								Nuestras Redes sociales:
						</Texty>
						<div key="b" className="contenedor-reds mx-auto mt-5">
							<WhatsAppOutlined className="redes" />
							<FacebookOutlined className="redes" />
							<InstagramOutlined className="redes" />
							<YoutubeOutlined  className="redes" />
						</div>
					</QueueAnim>
				</div>
					
			</div>
			
			<div className="row contenedor-carrusel mt-4">
				<Texty delay={700} className="titulo-home mt-5">
					¿Que opinan nuestros clientes?
				</Texty>

				<Testimonios />

			</div>

			<div className="row contenedor-numero">
					<QueueAnim delay={700} type="bottom">
						<Texty type="top"  delay={700} className="titulo-home ">
							Empresas con CAFI
						</Texty>

						<div key="a" className="text-center ">
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
