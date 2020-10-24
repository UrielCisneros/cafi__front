import React, { useState } from 'react';
import { Drawer, Form, Button, Input, Upload, message } from 'antd';
import { EditOutlined, UploadOutlined } from '@ant-design/icons';

export default function RegistroCapacitacion() {
	const [ form ] = Form.useForm();

	/* Drawer */
	const [ visible, setVisible ] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	/* drawer fin. */

	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
		  authorization: 'authorization-text',
		},
		onChange(info) {
		  if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		  }
		  if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		  } else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		  }
		},
	  };

	return (
		<div>
			<Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				Nueva Capacitación
			</Button>
			<Drawer
				title="Registrar un nueva empresa"
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
				<div className="contenedor-form-registro-servicio">
					<Form layout="vertical" hideRequiredMark form={form} className="form-registro-servicio">
						<Form.Item
							name="titulo"
							label="Titulo"
							rules={[ { required: true, message: 'El titulo es obligarotio' } ]}
						>
							<Input placeholder="Titulo de la capacitacion..." />
						</Form.Item>
						<Form.Item
							name="video"
							label="URL video"
							rules={[ { required: true, message: 'La URL es obligarotia' } ]}
						>
							<Input placeholder="https://www.youtube.com/watch?v=tAGnKpE4NCI" />
						</Form.Item>
						<Form.Item
							name="descripcion"
							label="Descripción"
							rules={[ { required: true, message: 'La descripción es obligarotia' } ]}
						>
							<Input placeholder="Descripción..." />
						</Form.Item>
						<Form.Item name="empresa" label="Empresa">
							<Input placeholder="Empresa..." />
						</Form.Item>
						<Form.Item name="archivos" label="Archivo">
						<Upload {...props}>
							<Button icon={<UploadOutlined />}>Sube tu archivo</Button>
						</Upload>
						</Form.Item>
						<Form.Item className="text-center">
							<Button type="primary" htmlType="submit">
								Register
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Drawer>
		</div>
	);
}
