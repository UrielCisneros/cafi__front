import React, { useState } from 'react';
import { Drawer, Form, Button, Input, Upload, Modal, Divider } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import './servicios.scss';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}
const { Search } = Input;

export default function RegistroServicios() {
	const [ form ] = Form.useForm();
	const [ previewVisible, setPreviewVisible ] = useState(false);
	const [ previewImage, setPreviewImage ] = useState('');
	const [ previewTitle, setPreviewTitle ] = useState('');
	const [ fileList, setFileList ] = useState([]);

	/* Drawer */
	const [ visible, setVisible ] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	/* drawer fin. */

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
	};

	const handleChange = ({ fileList }) => setFileList(fileList);

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	const onSearch = value => console.log(value);

	return (
		<div>
			<Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				Nuevo Servicio
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
				<div className="d-flex justify-content-center">
					<div>
						<p>Imagen del banner</p>
						<Upload
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							listType="picture-card"
							fileList={fileList}
							onPreview={handlePreview}
							onChange={handleChange}
						>
							{fileList.length >= 1 ? null : uploadButton}
						</Upload>
					</div>
				</div>
				<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
				<div className="contenedor-form-registro-servicio">
					<Form layout="vertical" hideRequiredMark form={form} className="form-registro-servicio">
						<Form.Item
							name="titulo"
							label="Titulo"
							rules={[ { required: true, message: 'El titulo es obligarotio' } ]}
						>
							<Input placeholder="Titulo del servicio" />
						</Form.Item>
						<Form.Item
							name="contenido"
							label="Contenido"
							rules={[ { required: true, message: 'El contenido es obligarotio' } ]}
						>
							<Input placeholder="Contenido del servicio" />
						</Form.Item>
						<Form.Item
							name="video"
							label="URL del video"
							rules={[ { required: true, message: 'El link es obligarotio' } ]}
						>
							<Input placeholder="https://www.youtube.com/watch?v=tAGnKpE4NCI" />
						</Form.Item>
						<Divider orientation="left">Paquetes</Divider>
						
						<Form.Item
							name="nombrePaquete"
							label="Nombre del paquete"
						>
							<Input placeholder="paquete 1..." />
						</Form.Item>
						<Form.Item
							name="beneficio"
							label="Beneficios"
						>
							<Search placeholder="Beneficio 1..." onSearch={onSearch} /* style={{ width: 200 }} */ />
						</Form.Item>
						<Form.Item
							name="precio"
							label="Precio"
							rules={[ { required: true, message: 'El precio es obligarotio' } ]}
						>
							<Input placeholder="precio" />
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
