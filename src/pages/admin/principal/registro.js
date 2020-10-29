import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';

export default function RegistroInfoTienda() {
	const [ visible, setVisible ] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const handleEditorChange = (e) => {
		console.log('Content was updated:', e.target.getContent());
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
							Guardar
						</Button>
					</div>
				}
			>
				<Form layout="vertical" hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="imagen" label="Imagen">
								<Input placeholder="Imagen de la empresa..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="nombre"
								label="Nombre"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="Nombre de la empresa..." />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="telefono"
								label="Telefono"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="Telefono de la empresa..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="correo"
								label="Correo"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="Correo de la empresa..." />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item
						name="quienesSomos"
						label="Quienes Somos"
						rules={[ { required: true, message: 'Campo requerido' } ]}
						valuePropName="Editor"
					>
						<Editor
							init={{
								height: 250,
								menubar: true,
								plugins: [
									'advlist autolink lists link image charmap print preview anchor',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount'
								],
								toolbar:
									'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
							}}
							onEditorChange={handleEditorChange}
						/>
					</Form.Item>
					<Form.Item
						name="politicas"
						label="Politicas"
						rules={[ { required: true, message: 'Campo requerido' } ]}
					>
						<Editor
							init={{
								height: 250,
								menubar: true,
								plugins: [
									'advlist autolink lists link image charmap print preview anchor',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount'
								],
								toolbar:
									'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
							}}
							onEditorChange={handleEditorChange}
						/>
					</Form.Item>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="numeroDeClientes" label="Numero de clientes">
								<Input placeholder="Numero de clientes ..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="urlPromocional"
								label="URL Promocional"
								rules={[ { required: true, message: 'Campo requerido' } ]}
							>
								<Input placeholder="URL promocional..." />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="face" label="Facebook">
								<Input placeholder="enlace a facebook..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item name="whats" label="WhatsApp">
								<Input placeholder="enlace a whatsapp..." />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="insta" label="Instagram">
								<Input placeholder="enlace a instagram..." />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item name="youtube" label="Youtube">
								<Input placeholder="enlace a youtube..." />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item className="text-center">
						<Button type="primary" htmlType="submit">
							Guardar
						</Button>
					</Form.Item>
				</Form>
			</Drawer>
		</div>
	);
}
