import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function RegistroInfoTienda() {
	const [ visible, setVisible ] = useState(false);

	const showDrawer = () => {
        setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div>
            <Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				Registrar información
			</Button>
			<Drawer
				title="Registrar Información principal"
				width={window.screen.width > 768 ? 720 : window.screen.width}
				onClose={onClose}
				visible={visible}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: 'right'
						}}
					>
						<Button onClick={onClose} type="primary">
							Listo
						</Button>
					</div>
				}
			>
				<Form layout="vertical" hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="quienesSomos"
								label="Quienes Somos"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="quienes somos..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="ubicacion"
								label="Ubicación"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input
									placeholder="Ubicación..."
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="urlPromocional"
								label="URL Promocional"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="URL promocional..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="face"
								label="Facebook"
							>
								<Input placeholder="enlace a facebook..." />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="whats"
								label="WhatsApp"
							>
								<Input placeholder="enlace a whatsapp..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="insta"
								label="Instagram"
							>
								<Input placeholder="enlace a instagram..." />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="youtube"
								label="Youtube"
							>
								<Input placeholder="enlace a youtube..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="numeroDeClientes"
								label="Numero de clientes"
							>
								<Input placeholder="Numero de clientes ..." />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item className="text-center">
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
				</Form>
			</Drawer>
		</div>
	);
}
