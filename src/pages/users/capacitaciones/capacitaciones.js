import React from 'react';
import './capacitaciones.scss'

import {Card, Divider} from 'antd';



export default function Capacitaciones() {

	//const { Meta } = Card;


	return (
		<div className="principal">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<p className="cap-titulo mt-5">
							Descubre todas nuestras capacitaciones que tenemos para ti!
						</p>
					</div>

					<div className="container-fluid">
						<div className="row ">

						<Card  className="card-video mx-auto mt-4">
							
							<iframe  width="200px" height="150px"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
							<p className="titulo-video">
								Video Educativo
							</p>
						</Card>

						<Card  className="card-video mx-auto">
							<p className="titulo-video">
								Video Educativo
							</p>
							<iframe  width="95%" height="150px"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</Card>

						<Card  className="card-video mx-auto">
							<p className="titulo-video">
								Video Educativo
							</p>
							<iframe  width="95%" height="150px"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</Card>

						<Card  className="card-video mx-auto">
							<p className="titulo-video">
								Video Educativo
							</p>
							<iframe  width="95%" height="150px"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</Card>

						<Card  className="card-video mx-auto">
							<p className="titulo-video">
								Video Educativo
							</p>
							<iframe  width="95%" height="170px"
								src="https://www.youtube.com/embed/P4Bda6_usuc" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
