import React, { useState } from 'react';
import { Upload, Modal, Drawer, Button, Form, Input, Divider } from 'antd';
import { PlusOutlined, PictureOutlined } from '@ant-design/icons';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 }
};
const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
};

export default function RegistroBanner() {
    const [form] = Form.useForm();
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

	return (
		<div>
			<Button
				size="large"
				type="primary"
				icon={<PictureOutlined style={{ fontSize: 20 }} />}
				onClick={showDrawer}
			>
				Añadir o eliminar imagenes
			</Button>
			<Drawer
				title="Nueva imagen de banner"
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
                <h5 className="mb-5">Imagenes del banner</h5>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        className="mx-5 w-50"
                    />
                <Divider />
				<h5 className="my-3">Nueva imagen</h5>
				<Upload
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					listType="picture-card"
					fileList={fileList}
					onPreview={handlePreview}
                    onChange={handleChange}
                    className="mx-5 w-50"
				>
					{fileList.length >= 1 ? null : uploadButton}
				</Upload>
				<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
				<h5 className="my-3">Titulo y descripcion de la imagen</h5>
				<Form
					{...formItemLayout}
					layout="horizontal"
					form={form}
				>
					<Form.Item label="Titulo">
						<Input placeholder="Titulo de la imagen" />
					</Form.Item>
					<Form.Item label="Subtitulo">
						<Input placeholder="Subtitulo de la imagen" />
					</Form.Item>
                    <Form.Item label="Link">
						<Input placeholder="Redireccion de la imagen (opcional)" />
					</Form.Item>
					<Form.Item {...buttonItemLayout}>
						<Button type="primary">Guardar</Button>
					</Form.Item>
				</Form>
			</Drawer>
		</div>
	);
}
