import React, { Fragment } from 'react';
import { Button, Menu, message } from 'antd';
import { Link } from 'react-router-dom';
/* import jwt_decode from 'jwt-decode'; */
import './navegacion.scss';

const { SubMenu } = Menu;

export default function Navegacion() {
	const token = localStorage.getItem('token');

	/* function Jwt(token) {
		try {
			return jwt_decode(token);
		} catch (e) {
			return null;
		}
	} */

	return (
		<Fragment>
			<div className="logo">logo</div>
			<Menu defaultSelectedKeys={[ window.location.pathname ]} mode="horizontal" className="menu-nav">
				<Menu.Item key="/">
					<Link to="/">Inicio</Link>
				</Menu.Item>
				<SubMenu key="/servicios" title="Servicios">
					<Menu.ItemGroup title="Item 1">
						<Menu.Item key="setting:1">Option 1</Menu.Item>
						<Menu.Item key="setting:2">Option 2</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title="Item 2">
						<Menu.Item key="setting:3">Option 3</Menu.Item>
						<Menu.Item key="setting:4">Option 4</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
				<Menu.Item key="/capacitaciones">
					<Link to="/capacitaciones">Capacitaciones</Link>
				</Menu.Item>
				<Menu.Item key="/blog">
					<Link to="/blog">Blog</Link>
				</Menu.Item>
				<Menu.Item key="/admin">
					<Link to="/admin">Panel Administrador</Link>
				</Menu.Item>
				{!token ? (
					<Menu.Item key="/login">
						<Link to="/login">Iniciar sesión</Link>
					</Menu.Item>
				) : (
					<Menu.Item>
						<Button type="link" danger onClick={() => {
							message.loading({ content:'Cerrando sesión...', duration: 1});
							localStorage.removeItem('token');
							setTimeout(() => {
								window.location.reload();
							}, 1000);
						}}>Cerrar sesión</Button>
					</Menu.Item>
				)}
			</Menu>
		</Fragment>
	);
}
