import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Navegacion from '../Navegacion/navegacion';
import Footer from '../Footer/footer';
import './layoutUser.scss'

export default function LayoutUser(props) {
	const { routes } = props;
	const { Content, Header } = Layout;

	return (
		<div className="body">
			<Layout className="layout">
                <Header className="layout-user">
                    <Navegacion />
                </Header>
                <Content style={{ height: "auto" }} className="bg-layout">
                    <div className="site-layout-content contenido-user">
                        <LoadRoutes routes={routes} />
                    </div>
                </Content>
				
                <Footer />
					
                
			</Layout>
		</div>
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
