import React, { useState, useEffect } from 'react';
import { List, Avatar, Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';

export default function ServiciosAdmin() {
	const [ show, setShow ] = useState();
	const [ items, setItems ] = useState([ <li key="0" />, <li key="1" />, <li key="2" /> ]);
	const [ updateList, setUpdateList ] = useState(true);

	useEffect(
		() => {
			setShow(true);
		},
		[ updateList ]
	);

	const onClick = () => {
		setShow(!show);
	};
	const onAdd = () => {
		let item = items;
		item.push(<li key={Date.now()} />);
		setItems(item);
		setUpdateList(!updateList);
	};
	const onRemove = () => {
		let item = items;
		item.splice(item.length - 1, 1);
		setItems(item);
		setUpdateList(!updateList);
	};

	const listData = [];
	for (let i = 0; i < 5; i++) {
		listData.push({
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
			<div className="queue-demo">
				<p className="buttons">
					<Button type="primary" onClick={onClick}>
						Switch
					</Button>
					<Button onClick={onAdd} style={{ marginLeft: 10 }}>
						Add
					</Button>
					<Button onClick={onRemove} style={{ marginLeft: 10 }}>
						Remove
					</Button>
				</p>
				<div className="demo-content">
					<List
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
					<div className="demo-tbody" key="b">
						<QueueAnim component="ul" type={[ 'right', 'left' ]} leaveReverse>
							{show ? items : null}
						</QueueAnim>
					</div>
				</div>
			</div>
		</div>
	);
}
