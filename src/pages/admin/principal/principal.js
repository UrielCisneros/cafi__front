import React, { useEffect, useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { Tooltip, notification, Divider, Empty } from 'antd';
import './principal.scss';
import { EyeOutlined, WhatsAppOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Geolocalizacion from '../../../components/Geolocalizacion/geolocalizacion';
import RegistroInfoTienda from './registro';
import Admin404 from '../admin404';
import verificarToken from '../../../config/verificar_token';
import axios from '../../../config/axios';
import aws from '../../../config/aws';
import Spinner from '../../../components/Spin/spin';
import DOMPurify from 'dompurify';

TweenOne.plugins.push(Children);

export default function AdminPrincipal(props) {
	const [ datos, setDatos ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ lat, setLat ] = useState('');
	const [ lng, setLng ] = useState('');
	const [ control, setControl ] = useState('');
	const [ reload, setReload ] = useState(true);

	async function obtenerDatos() {
		setLoading(true);
		await axios
			.get('/empresa/')
			.then((res) => {
				setLoading(false);
				setDatos(res.data);
				if (res.data) {
					setControl(true);
					setLat(res.data.ubicacion.lat);
					setLng(res.data.ubicacion.lng);
				}
			})
			.catch((err) => {
				setLoading(false);
				if (err.response) {
					notification.error({
						message: err.response.data.message,
						duration: 2
					});
				} else {
					notification.error({
						message: 'Error de conexion',
						description: 'Al parecer no se a podido conectar al servidor.',
						duration: 2
					});
				}
			});
	}
	useEffect(
		() => {
			verificarToken(props);
			obtenerDatos();
		},
		[ props, reload ]
	);

	return (
		<Spinner loading={loading}>
			<div className="contenedor-admin-principal">
				<div className="mb-4 contenedor-boton-registrar-admin">
					<RegistroInfoTienda control={control} reload={[ reload, setReload ]} />
				</div>
				{datos.length === 0 ? (
					<Admin404 />
				) : (
					<div>
						<div className="animaciones-container row mb-4">
							<QueueAnim delay={500} type="left" className="col-lg-4">
								<div className="datos-imagen-empresa">
									<img className="imagen-empresa" alt="logo-empresa" src={aws + datos.logo} />
								</div>
							</QueueAnim>
							<QueueAnim delay={500} type="right" className="col-lg-8">
								<div className="datos-basicos-empresa">
									<h1>
										<Texty type="left" mode="sync" delay={100}>
											{datos.nombre}
										</Texty>
									</h1>
									<h6>
										<Texty type="left" mode="sync" delay={200}>
											{datos.correo}
										</Texty>
									</h6>
									<h6>
										<Texty type="left" mode="sync" delay={300}>
											{datos.telefono}
										</Texty>
									</h6>
								</div>
							</QueueAnim>
						</div>
						<Divider />
						<div key="b" className="row animaciones-container">
							<QueueAnim delay={700} type="left" className="col-lg-4">
								<Texty type="left" mode="sync" delay={700} className="anim-title text-center">
									Redes sociales
								</Texty>
								{!datos.facebook && !datos.instagram && !datos.whatsapp && !datos.youtube ? (
									<div className="contenedor-redes">
										<Empty description="No hay redes registradas" />
									</div>
								) : (
									<div key="a" className="contenedor-redes">
										{!datos.whatsapp ? (
											<div className="d-none" />
										) : (
											<Tooltip title={datos.whatsapp} placement="topLeft">
												<a
													rel="noopener noreferrer"
													target="_blank"
													href={`https://wa.me/${datos.whatsapp}`}
												>
													<WhatsAppOutlined className="icon-redes" />
												</a>
											</Tooltip>
										)}
										{!datos.facebook ? (
											<div className="d-none" />
										) : (
											<Tooltip title={datos.facebook} placement="topLeft">
												<a
													rel="noopener noreferrer"
													target="_blank"
													href={datos.facebook}
												>
													<FacebookOutlined className="icon-redes" />
												</a>
											</Tooltip>
										)}
										{!datos.instagram ? (
											<div className="d-none" />
										) : (
											<Tooltip title={datos.instagram} placement="topLeft">
												<a
													rel="noopener noreferrer"
													target="_blank"
													href={datos.instagram}
												>
													<InstagramOutlined className="icon-redes" />
												</a>
											</Tooltip>
										)}
										{!datos.youtube ? (
											<div className="d-none" />
										) : (
											<Tooltip title={datos.youtube} placement="topLeft">
												<a
													rel="noopener noreferrer"
													target="_blank"
													href={datos.youtube}
												>
													<YoutubeOutlined className="icon-redes" />
												</a>
											</Tooltip>
										)}
									</div>
								)}
							</QueueAnim>
							<QueueAnim delay={700} type="bottom" className="col-lg-4">
								<Texty type="top" mode="sync" delay={700} className="anim-title text-center">
									Numero de clientes
								</Texty>
								<div key="a" className="contenedor-tienda">
									<TweenOne
										animation={{
											Children: {
												value: datos.numeroDeClientes !== 0 ? datos.numeroDeClientes : 0,
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
									Video promocional
								</Texty>
								<div key="a" className="contenedor-clientes">
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://tienda-online-ab.netlify.app/"
									>
										<YoutubeOutlined className="icon-redes" />
									</a>
								</div>
							</QueueAnim>
						</div>
						<div key="a" className="row animaciones-container">
							<QueueAnim delay={300} type="left" className="col-lg-4">
								<Texty type="left" mode="sync" delay={500} className="anim-title">
									Quiénes somos
								</Texty>
								<div key="b" className="contenedor-quienes">
									<div
										className="quienes-texto"
										dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(datos.quienesSomos) }}
									/>
									<div className="quienes-ver-mas">
										<EyeOutlined className="mx-2" />
										<Link to="/quienes_somos">Ver todo</Link>{' '}
									</div>
								</div>
							</QueueAnim>
							<QueueAnim delay={300} type="bottom" className="col-lg-4">
								<Texty type="left" mode="sync" delay={500} className="anim-title">
									Polítcas de la empresa
								</Texty>
								<div key="b" className="contenedor-quienes">
									<div
										className="quienes-texto"
										dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(datos.politicas) }}
									/>
									<div className="quienes-ver-mas">
										<EyeOutlined className="mx-2" />
										<Link to="/politicas">Ver políticas</Link>{' '}
									</div>
								</div>
							</QueueAnim>
							<QueueAnim delay={300} type="right" className="col-lg-4">
								<Texty type="right" mode="sync" delay={500} className="anim-title">
									Ubicación
								</Texty>
								<div key="a" className="contenedor-ubicacion">
									<Geolocalizacion
										height="100%"
										width="100%"
										center={[ lat, lng ]}
										titleLayer={'map'}
										zoom={15}
										apikey="I0G4Jr6RUg71dsHIRF0qGzn0l39bAY1V"
										nombreMarcador={datos.nombre}
										draggable="false"
									/>
								</div>
							</QueueAnim>
						</div>
					</div>
				)}
			</div>
		</Spinner>
	);
}
