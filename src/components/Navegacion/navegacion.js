import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './navegacion.scss';

const { SubMenu } = Menu;

export default function Navegacion() {

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
			</Menu>
		</Fragment>
	);
}
