import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import Admin404 from '../admin404';
import RegistroEmpresa from './registro_empresa';
import QueueAnim from 'rc-queue-anim';

const { Meta } = Card;

export default function EmpresasAdmin() {
	return (
		<div>
			<div className="mb-4 contenedor-boton-registrar-admin">
				<RegistroEmpresa />
			</div>
			<QueueAnim delay={300} type="bottom">
				<div className="row" key="demo">
					<div className="col-lg-3 my-3">
						<Card
							style={{ width: 300 }}
							cover={
								<img
									alt="example"
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
							actions={[ <EyeOutlined key="view1" />, <EditOutlined key="edit1" /> ]}
						>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="Card title"
								description="This is the description"
							/>
						</Card>
					</div>
					<div className="col-lg-3 my-3">
						<Card
							style={{ width: 300 }}
							cover={
								<img
									alt="example"
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
							actions={[ <EyeOutlined key="view2" />, <EditOutlined key="edit2" /> ]}
						>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="Card title"
								description="This is the description"
							/>
						</Card>
					</div>
					<div className="col-lg-3 my-3">
						<Card
							style={{ width: 300 }}
							cover={
								<img
									alt="example"
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
							actions={[ <EyeOutlined key="view3" />, <EditOutlined key="edit3" /> ]}
						>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="Card title"
								description="This is the description"
							/>
						</Card>
					</div>
					<div className="col-lg-3 my-3">
						<Card
							style={{ width: 300 }}
							cover={
								<img
									alt="example"
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
							actions={[ <EyeOutlined key="view4" />, <EditOutlined key="edit4" /> ]}
						>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="Card title"
								description="This is the description"
							/>
						</Card>
					</div>
				</div>
			</QueueAnim>
			<Admin404 />
		</div>
	);
}
