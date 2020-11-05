import React from 'react';
import './capacitaciones.scss'


import TweenOne from 'rc-tween-one';

export default function Capacitaciones() {


	return (
		<div className="principal">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<TweenOne className="cap-titulo mt-5" animation={{ y: 30, opacity: 0, type: 'from', delay: 500 }}>
							Descubre todas nuestras capacitaciones que tenemos para ti!
						</TweenOne>
					</div>

					<div className="container-fluid">
						<div className="row ">

						<div className="card-video mx-auto mt-4">
							<iframe  width="250px" height="180px"
								className="front-video"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
							<TweenOne className="titulo-video text-center" animation={{ y: 30, opacity: 0, type: 'from' , delay: 800}}>
								Titulo de video
							</TweenOne>
							
							<p className="descripcion-video text-center">
								Descripcion de video educativo 
							</p>
						</div>

						
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
