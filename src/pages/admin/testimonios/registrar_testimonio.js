import React, { useState } from 'react';
import { Drawer, Form, Button, Input, Upload, Modal, Divider } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import './testimonios.scss'

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

export default function RegistroTestimonio() {
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
				Nuevo testimonio
			</Button>
			<Drawer
				title="Registrar nuevo testimonio"
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
				<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
				<div className="d-flex justify-content-center">
					<Form layout="vertical" hideRequiredMark form={form} className="w-50">
						<Form.Item name="foto" label="Foto" className="texto-testimonio-form-label">
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
						</Form.Item>
						<Divider className="divider-border"> O </Divider>
						<Form.Item name="video" label="Video" className="texto-testimonio-form-label">
							<Input style={{ width: '100%' }} placeholder="Link a video" />
						</Form.Item>
						<Form.Item className="text-center">
							<Button type="primary" htmlType="submit">
								Guardar
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Drawer>
		</div>
	);
}
