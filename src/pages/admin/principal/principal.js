import React, { useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { Tooltip } from 'antd';
import './principal.scss';
import {
	EyeOutlined,
	WhatsAppOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	ExportOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Geolocalizacion from '../../../components/Geolocalizacion/geolocalizacion';
import RegistroInfoTienda from './registro';
import Admin404 from '../admin404';
import verificarToken from '../../../config/verificar_token';

TweenOne.plugins.push(Children);

export default function AdminPrincipal(props) {
	useEffect(
		() => {
			verificarToken(props);
		},
		[ props ]
	);

	return (
		<div className="contenedor-admin-principal">
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroInfoTienda />
			</div>
			<div key="a" className="row animaciones-container">
				<QueueAnim delay={300} type="left" className="col-lg-6">
					<Texty type="left" mode="sync" delay={500} className="anim-title">
						Quiénes somos
					</Texty>
					<div key="b" className="contenedor-quienes">
						<div className="quienes-texto">
							Lorem ipsum dolor sit amet consectetur adipiscing elit, metus ultrices placerat rutrum
							mattis blandit facilisis porttitor, et pulvinar accumsan ut sociis volutpat. Sed litora
							scelerisque integer ad est eu urna nostra primis potenti, convallis at bibendum posuere ut
							morbi euismod condimentum phasellus sociis risus, libero turpis nullam magnis erat tristique
							curae iaculis porttitor. Montes sagittis orci diam curae mauris metus nascetur fermentum
							varius nunc, pretium mollis id aliquam ornare egestas proin faucibus suspendisse, bibendum
							ante ligula lacinia dis blandit pulvinar sociis nec. Montes tellus accumsan quam inceptos
							nibh placerat justo dictum, imperdiet dignissim dui diam porta urna lacinia et magna,
							torquent enim metus commodo venenatis posuere nunc. Eu curae feugiat ultricies vestibulum
							massa est nascetur mattis, euismod fermentum viverra ante pulvinar sollicitudin cursus
							elementum, duis neque erat magnis cras blandit habitant. Sem tincidunt vestibulum vel
							suspendisse nulla tempus lobortis parturient, platea cras tortor neque taciti tempor cum
							urna, laoreet ullamcorper nec ornare class orci aliquet.
						</div>
						<div className="quienes-ver-mas">
							<EyeOutlined className="mx-2" />
							<Link to="/quienes_somos">Ver todo</Link>{' '}
						</div>
					</div>
				</QueueAnim>
				<QueueAnim delay={300} type="right" className="col-lg-6">
					<Texty type="right" mode="sync" delay={500} className="anim-title">
						Ubicación
					</Texty>
					<div key="a" className="contenedor-ubicacion">
						<Geolocalizacion
							height="100%"
							width="100%"
							center={[ 19.771758, -104.366652 ]}
							titleLayer={'map'}
							zoom={15}
							apikey="I0G4Jr6RUg71dsHIRF0qGzn0l39bAY1V"
							nombreMarcador="TIENDA CAFI"
							draggable="false"
						/>
					</div>
				</QueueAnim>
			</div>
			<div key="b" className="row animaciones-container">
				<QueueAnim delay={700} type="left" className="col-lg-4">
					<Texty type="left" mode="sync" delay={700} className="anim-title text-center">
						Redes sociales
					</Texty>
					<div key="a" className="contenedor-redes">
						<Tooltip title="3171145113" placement="topLeft">
							<WhatsAppOutlined className="icon-redes" />
						</Tooltip>
						<Tooltip title="/absoluciones" placement="topLeft">
							<FacebookOutlined className="icon-redes" />
						</Tooltip>
						<Tooltip title="/soluciones.ab" placement="topLeft">
							<InstagramOutlined className="icon-redes" />
						</Tooltip>
						<Tooltip title="/diego.leon" placement="topLeft">
							<TwitterOutlined className="icon-redes" />
						</Tooltip>
					</div>
				</QueueAnim>
				<QueueAnim delay={700} type="bottom" className="col-lg-4">
					<Texty type="top" mode="sync" delay={700} className="anim-title text-center">
						Numero de clientes
					</Texty>
					<div key="a" className="contenedor-tienda">
						<TweenOne
							animation={{
								Children: {
									value: typeof 46 === 'number' ? 46 : 100,
									floatLength: 0
								},
								duration: 1000
							}}
							style={{ fontSize: 60, marginBottom: 12, fontWeight: 'bold' }}
						>
							0
						</TweenOne>
					</div>
				</QueueAnim>
				<QueueAnim delay={700} type="right" className="col-lg-4">
					<Texty type="right" mode="sync" delay={700} className="anim-title text-center">
						Ir a la tienda CAFI
					</Texty>
					<div key="a" className="contenedor-clientes">
						<a rel="noopener noreferrer" target="_blank" href="https://tienda-online-ab.netlify.app/">
							<ExportOutlined className="icon-redes" />
						</a>
					</div>
				</QueueAnim>
			</div>
			<Admin404 />
		</div>
	);
}
