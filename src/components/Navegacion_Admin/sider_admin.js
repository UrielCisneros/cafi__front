import React, { Fragment, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PictureOutlined, HomeOutlined, TeamOutlined, CommentOutlined, DesktopOutlined, BulbOutlined, YoutubeOutlined } from '@ant-design/icons';
import './navegacion_admin.scss';

const { Sider } = Layout;

export default function NavegacionAdmin() {
	const [ collapsed, setCollapsed ] = useState(false);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	return (
		<Fragment>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="sider-admin shadow">
				<div className="logo">LOGO</div>
				<Menu className="menu-admin" defaultSelectedKeys={[ window.location.pathname ]} mode="inline">
					<Menu.Item key="/admin" icon={<DesktopOutlined />}>
						<Link to="/admin">Inicio</Link>
					</Menu.Item>
					<Menu.Item key="/admin/banner" icon={<PictureOutlined />}>
						<Link to="/admin/banner">Banner</Link>
					</Menu.Item>
					<Menu.Item key="/admin/testimonios" icon={<CommentOutlined />}>
						<Link to="/admin/testimonios">Testimonios</Link>
					</Menu.Item>
					<Menu.Item key="/admin/empresas" icon={<TeamOutlined />}>
						<Link to="/admin/empresas">Empresas</Link>
					</Menu.Item>
					<Menu.Item key="/admin/servicios" icon={<BulbOutlined />}>
						<Link to="/admin/servicios">Servicios</Link>
					</Menu.Item>
					<Menu.Item key="/admin/capacitaciones" icon={<YoutubeOutlined />}>
						<Link to="/admin/capacitaciones">Capacitacion</Link>
					</Menu.Item>
					<Menu.Item key="/" icon={<HomeOutlined />}>
						<Link to="/">Pagina Principal</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		</Fragment>
	);
}
