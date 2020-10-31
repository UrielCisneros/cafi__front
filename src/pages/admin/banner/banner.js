import React, { useEffect, useState } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './banner.scss';
import RegistroBanner from './registrar_banner';
import Admin404 from '../admin404';
import verificarToken from '../../../config/verificar_token';
import Spinner from '../../../components/Spin/spin';
import axios from '../../../config/axios';
import aws from '../../../config/aws';
import { notification } from 'antd';

const BgElement = Element.BgElement;

export default function BannerAdmin(props) {
	const [ banner, setBanner ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ reload, setReload ] = useState(true);

	const obtenerBanner = async () => {
		setLoading(true);
		await axios
			.get('/banner/')
			.then((res) => {
				setLoading(false);
				setBanner(res.data);
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
	};

	useEffect(
		() => {
			verificarToken(props);
			obtenerBanner();
		},
		[ props, reload ]
	);

	const renderBanner = banner.map((banner) => {
		return (
			<Element prefixCls="banner-user-elem" key={banner._id}>
				<BgElement
					onClick={() => banner.redireccion ?  window.open(banner.redireccion) : null}
					key="bg"
					className="bg banner-elemento"
					style={{
						backgroundImage: `url(${aws + banner.imagenBanner})`, cursor: 'pointer'
					}}
				>
					<div className="banner-textos">
						<TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
							{banner.titulo}
						</TweenOne>
						<TweenOne
							className="banner-user-text"
							animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
						>
							{banner.subTitulo}
						</TweenOne>
					</div>
				</BgElement>
			</Element>
		);
	});

	return (
		<div>
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroBanner banner={banner} reload={[ reload, setReload ]} />
			</div>
			<Spinner loading={loading}>
				<BannerAnim prefixCls="banner-user" autoPlay>
					{banner.length !== 0 ? (
						renderBanner
					) : (
						<Element prefixCls="banner-user-elem" key="1">
							<BgElement
								key="bg"
								className="bg banner-elemento"
								style={{
									background: '#64CBCC'
								}}
							>
								<div className="banner-textos">
									<Admin404 />
								</div>
							</BgElement>
						</Element>
					)}
				</BannerAnim>
			</Spinner>
		</div>
	);
}
