import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

export default function LayoutAdmin(props) {
	const { routes } = props;
	const { Header, Content, Sider } = Layout;

	return (
		<Fragment>
			<Layout className="border">
				<Sider
					className="bg-primary"
					style={{
						overflow: 'auto',
						height: '100vh',
						position: 'fixed',
						left: 0
					}}
				>
					SIDER
				</Sider>
				<Layout className="border" style={{ marginLeft: 200 }}>
					<Header className="border" style={{ padding: 0 }}>
						HEADER ADMIN
					</Header>
					<Content style={{ margin: '24px 16px 0' }}>
						<div className="border" style={{ padding: 24, minHeight: 360 }}>
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
