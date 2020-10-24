import React from 'react';

import './home.scss';
import Geolocalizacion from '../../../components/Geolocalizacion/geolocalizacion';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';


import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,

} from '@ant-design/icons';
//import { Link } from 'react-router-dom';


export default function Home() {
	return (
		<div className="container-fluid">

			<div className="seccion-1">
				<h1>Banner</h1>
			</div>

			<div className="row contendor-boton vender ">
				<QueueAnim delay={700} type="scale" >
					<Texty type="scale" key="a" className="boton-vender" >
						Quiero vender en linea 
					</Texty>
				</QueueAnim>
			</div>

			<div className="row contenedores" >
				<QueueAnim type="left" className="col-lg-4 my-4">
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

				<QueueAnim type="bottom"  className="col-lg-4 my-5">
					<h1 style={{fontSize: 100, textAlign: "center"}}>CAFI</h1>
				</QueueAnim>
				
				<QueueAnim delay={900} type="right" className="col-lg-4  my-5">
					<Texty key="a" className="titulo-home" >
							Redes sociales:
					</Texty>
					<div key="b" className="contenedor-reds">
						<WhatsAppOutlined className="redes" />
						<FacebookOutlined className="redes" />
						<InstagramOutlined className="redes" />
						<TwitterOutlined className="redes" />
					</div>
				</QueueAnim>
			</div>

			<div className="row contenedor-cifras">
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
							duration: 1000
						}}
						style={{ fontSize: 120, fontWeight: 'bold' }}
						
					>
						0
					</TweenOne>
				</div>
				<Texty type="top"  delay={700} className="titulo-home">
					¿Que opinan nuestros clientes?
				</Texty>
			</QueueAnim>
			
			</div>

			<div className="row">
				<QueueAnim delay={700} type="left">
				<Texty type="scale" key="a" style={{fontSize: 30}} >
						Empresas con CAFI 
					</Texty>
				</QueueAnim>
			</div>

		</div>
	);
}
