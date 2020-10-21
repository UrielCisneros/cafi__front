import React, { useState } from 'react';
import { Drawer, Form, Button, Input, Upload, Modal } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}
const formItemLayout = {
	labelCol: { span: 12 },
	wrapperCol: { span: 32 }
};

export default function RegistroEmpresa() {
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

	return (
		<div>
			<Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				Nueva Empresa
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
				<div className="d-flex justify-content-center">
					<Form {...formItemLayout} layout="vertical" hideRequiredMark form={form}>
						<Form.Item
							name="name"
							label="Empresa"
							rules={[ { required: true, message: 'El nombre de la empresa es obligarotio' } ]}
						>
							<Input placeholder="Nombre de la empresa" />
						</Form.Item>
						<Form.Item
							name="url"
							label="Link"
							rules={[ { required: true, message: 'La URL de la pagina de la empresa es obligatoria' } ]}
						>
							<Input
								style={{ width: '100%' }}
								addonBefore="http://"
								placeholder="Link a pagina de la empresa"
							/>
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
