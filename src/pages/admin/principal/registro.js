import React, { useEffect, useState, useCallback } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Divider, Upload, Modal, notification } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import Spinner from '../../../components/Spin/spin';
import axios from '../../../config/axios';
import aws from '../../../config/aws';
import { getBase64 } from '../../../config/funcionesReusables';

export default function RegistroInfoTienda(props) {
	const token = localStorage.getItem('token');
	const [ form ] = Form.useForm();
	const [ visible, setVisible ] = useState(false);
	const [ previewVisible, setPreviewVisible ] = useState(false);
	const [ previewImage, setPreviewImage ] = useState('');
	const [ previewTitle, setPreviewTitle ] = useState('');
	const [ fileList, setFileList ] = useState([]);

	const [ imagen, setImagen ] = useState();
	const [ quienesSomos, setQuienesSomos ] = useState('');
	const [ politicas, setPoliticas ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ datos, setDatos ] = useState({
		numeroDeClientes: '',
		facebook: '',
		whatsapp: '',
		instagram: '',
		youtube: ''
	});
	const { control } = props;
	const [ reload, setReload ] = props.reload;
	const [ datosEmpresa, setDatosEmpresa ] = useState([]);
	const [ disabled, setDisabled ] = useState(false);

	/* drawer */
	const showDrawer = () => setVisible(true);
	const onClose = () => setVisible(false);
	/* drawer fin */

	/* Upload */
	const handleCancel = () => setPreviewVisible(false);
	const uploadProps = {
		fileList: fileList,
		listType: 'picture-card',
		beforeUpload: (file) => {
			if (
				file.type === 'image/png' ||
				file.type === 'image/jpg' ||
				file.type === 'image/jpeg' ||
				file.type === 'image/webp'
			) {
				setDisabled(false);
				return false;
			}
			notification.error({
				message: 'Formato de imagen no válido',
				duration: 2
			});
			setDisabled(true);
		},
		onChange: ({ fileList, file }) => {
			if (fileList.length !== 0) {
				setImagen(file);
			} else {
				setImagen(null);
				setDisabled(false);
				form.resetFields([ 'imagen' ]);
			}
			setFileList(fileList);
		},
		onPreview: async (file) => {
			if (!file.url && !file.preview) {
				file.preview = await getBase64(file.originFileObj);
			}
			setPreviewImage(file.url || file.preview);
			setPreviewVisible(true);
			setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
		}
	};
	/* Upload fin */

	const onQuienesSomosChange = (e) => setQuienesSomos(e);
	const onPoliticasChange = (e) => setPoliticas(e);

	const capturarDatos = (e) =>
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});

	const obtenerDatos = useCallback(
		async () => {
			setLoading(true);
			await axios
				.get('/empresa/')
				.then((res) => {
					setLoading(false);
					setDatosEmpresa(res.data);
					setFileList([
						{
							uid: '-1',
							name: 'imagen actual',
							status: 'done',
							url: aws + res.data.logo
						}
					]);
					setImagen(res.data.logo);
					setPoliticas(res.data.politicas);
					setQuienesSomos(res.data.quienesSomos);
					form.setFieldsValue({
						imagen: res.data.logo,
						nombre: res.data.nombre,
						telefono: res.data.telefono,
						correo: res.data.correo,
						lat: res.data.ubicacion.lat,
						lng: res.data.ubicacion.lng,
						quienesSomos: res.data.quienesSomos,
						politicas: res.data.politicas,
						numeroDeClientes: res.data.numeroDeClientes,
						urlVideoPromocional: res.data.urlVideoPromocional,
						facebook: res.data.facebook,
						whatsapp: res.data.whatsapp,
						instagram: res.data.instagram,
						youtube: res.data.youtube
					});
					setDatos({
						nombre: res.data.nombre,
						telefono: res.data.telefono,
						correo: res.data.correo,
						lat: res.data.ubicacion.lat,
						lng: res.data.ubicacion.lng,
						numeroDeClientes: res.data.numeroDeClientes,
						urlVideoPromocional: res.data.urlVideoPromocional,
						facebook: res.data.facebook,
						whatsapp: res.data.whatsapp,
						instagram: res.data.instagram,
						youtube: res.data.youtube
					});
				})
				.catch((err) => {
					setLoading(false);
					if (err.response) {
						notification.error({
							message: err.response.data.message,
							duration: 2
						});
					} else {
						notification.error({
							message: 'Error de conexion',
							description: 'Al parecer no se a podido conectar al servidor.',
							duration: 2
						});
					}
				});
		},
		[ form ]
	);

	/* async function obtenerDatos() {
		
	} */

	const enviarDatos = async () => {
		setLoading(true);
		const formData = new FormData();
		formData.append('imagen', imagen);
		formData.append('nombre', datos.nombre);
		formData.append('telefono', datos.telefono);
		formData.append('correo', datos.correo);
		formData.append('lat', datos.lat);
		formData.append('lng', datos.lng);
		formData.append('quienesSomos', quienesSomos);
		formData.append('politicas', politicas);
		formData.append('numeroDeClientes', datos.numeroDeClientes);
		formData.append('urlVideoPromocional', datos.urlVideoPromocional);
		formData.append('facebook', datos.facebook);
		formData.append('whatsapp', datos.whatsapp);
		formData.append('instagram', datos.instagram);
		formData.append('youtube', datos.youtube);

		if (control) {
			await axios
				.put(`/empresa/${datosEmpresa._id}`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `bearer ${token}`
					}
				})
				.then((res) => {
					setReload(!reload);
					setLoading(false);
					notification.success({
						message: res.data.message,
						duration: 2
					});
					onClose();
				})
				.catch((err) => {
					setLoading(false);
					if (err.response) {
						notification.error({
							message: err.response.data.message,
							duration: 2
						});
					} else {
						notification.error({
							message: 'Error de conexion',
							description: 'Al parecer no se a podido conectar al servidor.',
							duration: 2
						});
					}
				});
		} else {
			await axios
				.post('/empresa/', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `bearer ${token}`
					}
				})
				.then((res) => {
					setReload(!reload);
					setLoading(false);
					notification.success({
						message: res.data.message,
						duration: 2
					});
					onClose();
				})
				.catch((err) => {
					setLoading(false);
					if (err.response) {
						notification.error({
							message: err.response.data.message,
							duration: 2
						});
					} else {
						notification.error({
							message: 'Error de conexion',
							description: 'Al parecer no se a podido conectar al servidor.',
							duration: 2
						});
					}
				});
		}
	};

	useEffect(
		() => {
			if (control) {
				obtenerDatos();
			}
		},
		[ control, obtenerDatos ]
	);

	return (
		<div>
			<Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				{control ? 'Actualizar Información' : 'Registrar información'}
			</Button>
			<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
			<Drawer
				forceRender
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
						<Button onClick={onClose} type="default" style={{ marginRight: 8 }}>
							Cancelar
						</Button>
						<Button form="form-registro-tienda" type="primary" htmlType="submit" disabled={disabled}>
							Guardar
						</Button>
					</div>
				}
			>
				<Spinner loading={loading}>
					<Form
						id="form-registro-tienda"
						layout="vertical"
						hideRequiredMark
						form={form}
						onFinish={enviarDatos}
					>
						<Row gutter={16} justify="center">
							<Col span={12} className="d-flex justify-content-center">
								<Form.Item
									name="imagen"
									label="Imagen"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Upload {...uploadProps}>
										{fileList.length >= 1 ? null : (
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>Upload</div>
											</div>
										)}
									</Upload>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="nombre"
									label="Nombre"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Input
										name="nombre"
										placeholder="Nombre de la empresa..."
										onChange={capturarDatos}
									/>
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
									<Input
										name="telefono"
										placeholder="Telefono de la empresa..."
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="correo"
									label="Correo"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Input
										name="correo"
										placeholder="Correo de la empresa..."
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Divider orientation="left" className="divider-border">
							Ubicación
						</Divider>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="lat"
									label="Latitud"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Input name="lat" placeholder="19.771873..." onChange={capturarDatos} />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="lng"
									label="Longitud"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Input name="lng" placeholder="-104.366682..." onChange={capturarDatos} />
								</Form.Item>
							</Col>
						</Row>
						<Divider />
						<Form.Item name="quienesSomos" label="Quienes somos">
							<Form.Item
								name="quienesSomos"
								rules={[ { required: true, message: 'Campo requerido' } ]}
								valuePropName="Editor"
							>
								<Editor
									value={quienesSomos}
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
									onEditorChange={onQuienesSomosChange}
								/>
							</Form.Item>
						</Form.Item>
						<Form.Item name="politicas" label="Políticas">
							<Form.Item
								name="politicas"
								rules={[ { required: true, message: 'Campo requerido' } ]}
								valuePropName="Editor"
							>
								<Editor
									value={politicas}
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
									onEditorChange={onPoliticasChange}
								/>
							</Form.Item>
						</Form.Item>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item name="numeroDeClientes" label="Numero de clientes">
									<Input
										type="number"
										name="numeroDeClientes"
										onChange={capturarDatos}
										placeholder="40"
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="urlVideoPromocional"
									label="URL video promocional"
									rules={[ { required: true, message: 'Campo requerido' } ]}
								>
									<Input
										name="urlVideoPromocional"
										placeholder="URL promocional..."
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item name="facebook" label="Facebook">
									<Input
										name="facebook"
										placeholder="enlace a facebook..."
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name="whatsapp" label="WhatsApp">
									<Input
										name="whatsapp"
										placeholder="Ejemplo: +523171053505"
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item name="instagram" label="Instagram">
									<Input
										name="instagram"
										placeholder="enlace a instagram..."
										onChange={capturarDatos}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name="youtube" label="Youtube">
									<Input name="youtube" placeholder="enlace a youtube..." onChange={capturarDatos} />
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Spinner>
			</Drawer>
		</div>
	);
}
