import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import NavegacionAdmin from '../Navegacion_Admin/sider_admin';
import HeaderAdmin from '../Navegacion_Admin/header_admin';
import './layoutAdmin.scss'

export default function LayoutAdmin(props) {
	const { routes } = props;
	const { Header, Content } = Layout;

	return (
		<Fragment>
			<Layout>
				<NavegacionAdmin />
				<Layout className="layout-admin">
					<Header className="header-admin">
						<HeaderAdmin />
					</Header>
					<Content style={{ margin: '24px 16px 0' }}>
						<div className="contenido-admin shadow-sm" >
							<LoadRoutes routes={routes} />
						</div>
					</Content>
				</Layout>
			</Layout>
		</Fragment>
	);
}

function LoadRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} exact={route.exact} component={route.component} />
			))}
		</Switch>
	);
}
