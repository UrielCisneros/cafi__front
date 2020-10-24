import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import RegistroServicios from './registro_servicios';
import Admin404 from '../admin404';
import './servicios.scss'

const { Meta } = Card;

export default function ServiciosAdmin() {
	const [ show, setShow ] = useState();
	const [ updateList, setUpdateList ] = useState(true);
	const [ items, setItems ] = useState([
		{
			href: 'https://ant.design',
			title: `ant design part`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		},{
			href: 'https://ant.design',
			title: `ant design part`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		},{
			href: 'https://ant.design',
			title: `ant design part`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		},{
			href: 'https://ant.design',
			title: `ant design part`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		}
	]);

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
		item.push({
			href: 'https://ant.design',
			title: `ant design part `,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		});
		setItems(item);
		setUpdateList(!updateList);
	};
	const onRemove = () => {
		let item = items;
		item.splice(item.length - 1, 1);
		setItems(item);
		setUpdateList(!updateList);
	};

	const render = items.map((items, index) => {
		return (
			<div className="col-lg-3 my-3" key={index}>
				<Card
					style={{ width: 300 }}
					cover={
						<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
					}
					actions={[ <EyeOutlined key="view1" />, <EditOutlined key="edit1" /> ]}
				>
					<Meta
						avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						title="Card title"
						description="This is the description"
					/>
				</Card>
			</div>
		);
	});

	return (
		<div>
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroServicios />
			</div>
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
				<div>
					<QueueAnim type={[ 'top', 'bottom' ]} leaveReverse className="row">
						{show ? (
							render
						) : null}
					</QueueAnim>
					<div className="demo-tbody" key="b" />
				</div>
			</div>
			<Admin404 />
		</div>
	);
}
