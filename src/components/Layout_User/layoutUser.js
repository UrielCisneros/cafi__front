import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

export default function LayoutUser(props) {
	const { routes } = props;
	const { Content, Footer, Header } = Layout;

	return (
		<div className="body">
			<Layout >
                <Header>
                    HEADER
                </Header>
                <Content style={{ height: "auto" }} className="bg-layout">
                    <div className="site-layout-content flex">
                        <LoadRoutes routes={routes} />
                    </div>
                </Content>
                <Footer>
                    FOOTER
                </Footer>
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
