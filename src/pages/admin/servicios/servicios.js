import React from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import RegistroServicios from './registro_servicios';
import QueueAnim from 'rc-queue-anim';

export default function ServiciosAdmin() {
	const listData = [];
	for (let i = 0; i < 2; i++) {
		let data = listData;
		data.push({
			href: 'https://ant.design',
			title: `ant design part ${i}`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		});
	}

	return (
		<div>
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroServicios />
			</div>
			<QueueAnim delay={300} className="queue-simple">
				<List
					key="demo"
					itemLayout="vertical"
					size="large"
					dataSource={listData}
					renderItem={(item) => (
						<List.Item
							key={item.title}
							actions={[ <StarOutlined />, <LikeOutlined />, <MessageOutlined /> ]}
							extra={
								<img
									width={272}
									alt="logo"
									src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>
							}
						>
							<List.Item.Meta
								avatar={<Avatar src={item.avatar} />}
								title={<a href={item.href}>{item.title}</a>}
								description={item.description}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</QueueAnim>
		</div>
	);
}
