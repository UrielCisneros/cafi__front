import React from 'react';

import './home.scss';
import Portada from './Portada/portada'
import CarruselEmpresas from './Carrusel/carrusel_empresas'
import Testimonios from './Testimonios/testimonios'
import Banner from './Banner/banner'

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import { Planet } from 'react-planet';

import {
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined,
	HomeOutlined

} from '@ant-design/icons';

const style= {
    backgroundImage: `url("https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg")`,
	

};

export default function Home() {
	return (
		<div className="container-fluid">

			<div className="row col-lg-3 planetas">
				<Planet className="planet-p" 
				half={true}
				hideOrbit={true}
				bounceOnClose
				rotation={105}
    			tension={500}
				friction={19}
				orbitRadius={100}
				centerContent={<div className="planet-p row px-5">
					<HomeOutlined />
				</div>}
				autoClose
				>
					<div />
					<div className="planet">
						<WhatsAppOutlined style={{color: "green"}}/>
					</div>
					<div className="planet">
						<FacebookOutlined style={{color: "blue"}}/>
					</div>
					
					<div className="planet">
						<InstagramOutlined style={{color: "purple"}}/>
					</div>
					<div className="planet">
						<YoutubeOutlined style={{color: "red"}}/>
					</div>
					<div />
					<div />
					<div />
					<div />
					
									
				</Planet>
			</div>

			<div className="principal"> 

				<div className="row contenedores">
					
					<Portada />
					
				</div>

				<div className="contenedores mt-5">
					<div className="col-lg-10 mx-auto video">
						<h1>Video Promocional</h1>

						<iframe
							width="85%"						
							height="85%"
							src="https://www.youtube.com/embed/t_Fi3J4UTlg" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen>
						</iframe>

					</div>
				</div>

				
				<div className="row contenedor-carrusel mt-4">
					
						<div className="wave" style={{height: "150px", overflow: "hidden"}} >
							<svg viewBox="0 0 500 150"  preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
							<path d="M-11.06,44.70 C74.72,347.66 369.86,-169.44 556.65,199.64 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#fff"}}>
							</path>
							
							</svg>
						</div>
						

					<Texty delay={700} className="titulo-home mt-5">
						¿Que opinan nuestros clientes?
					</Texty>

					<Testimonios />

				</div>

				<div className="row contenedor-numero mt-5" style={style}>
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
									style={{ fontSize: 120, fontWeight: 'bold' }}
								>
									0
								</TweenOne>
							</div>
						</QueueAnim>
				</div>

				<div className="row mt-5">
					<Banner />
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

		</div>
	);
}
