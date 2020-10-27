import React, { Fragment } from 'react';
import { Avatar, message } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import './navegacion_admin.scss';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function headerAdmin(props) {
	const titulo = window.location.pathname.split('/');
	var decoded = Jwt(localStorage.getItem('token'));

	function Jwt(token) {
		try {
			return jwt_decode(token);
		} catch (e) {
			return null;
		}
	}
	
	console.log(decoded)
	return (
		<Fragment>
			<div className="float-left">
				{!titulo[2] ? (
					<p className="titulo-pagina-header">Inicio</p>
				) : (
					<p className="titulo-pagina-header">{titulo[2]}</p>
				)}
			</div>
			<div className="float-right">
				<div className="d-inline-block mx-3">
					<p style={{ fontSize: 18 }}>Bienvenido, { decoded.nombre }</p>
				</div>
				<div className="d-inline-block mx-3">
					<Avatar className="avatar-admin">
						{decoded.nombre.charAt(0)}
					</Avatar>
				</div>
				<div className="d-inline-block mx-2
				">
					<div className="session-admin-container">
						<PoweroffOutlined className="session-admin" onClick={() => {
							message.loading({ content:'Cerrando sesión...', duration: 1});
							setTimeout(() => {
								localStorage.removeItem('token');
								props.history.push('/');	
							}, 1000);
						}} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default withRouter(headerAdmin);
