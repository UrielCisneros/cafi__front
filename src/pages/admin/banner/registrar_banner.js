import React, { useState } from 'react';
import { Upload, Modal, Drawer, Button, Form, Input, Divider, Card, notification } from 'antd';
import {
	PlusOutlined,
	PictureOutlined,
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined
} from '@ant-design/icons';
import axios from '../../../config/axios';
import Spinner from '../../../components/Spin/spin';
import aws from '../../../config/aws';

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
	wrapperCol: { span: 18 }
};
const { Meta } = Card;
const { confirm } = Modal;

export default function RegistroBanner(props) {
	const [ form ] = Form.useForm();
	const token = localStorage.getItem('token');
	const [ previewVisible, setPreviewVisible ] = useState(false);
	const [ previewImage, setPreviewImage ] = useState('');
	const [ previewTitle, setPreviewTitle ] = useState('');
	const [ fileList, setFileList ] = useState([]);

	const [ disabled, setDisabled ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ imagen, setImagen ] = useState();
	const [ datos, setDatos ] = useState({
		titulo: '',
		subTitulo: '',
		redireccion: ''
	});
	const [ control, setControl ] = useState(false);
	const [ bannerSeleccioando, setBannerSeleccionado ] = useState('');
	const { banner } = props;
	const [ reload, setReload ] = props.reload;

	/* Drawer */
	const [ visible, setVisible ] = useState(false);
	const showDrawer = () => setVisible(true);
	const onClose = () => {
		setVisible(false);
		limpiarCampos();
	};
	/* drawer fin. */

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

	const capturarDatos = (e) =>
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});

	const llenarCampos = (banner) => {
		setControl(true);
		setBannerSeleccionado(banner);
		setImagen(banner.imagenBanner);
		setFileList([
			{
				uid: '-1',
				name: 'imagen actual',
				status: 'done',
				url: aws + banner.imagenBanner
			}
		]);
		form.setFieldsValue({
			imagen: banner.imagenBanner,
			titulo: banner.titulo,
			subTitulo: banner.subTitulo,
			redireccion: banner.redireccion
		});
		setDatos({
			titulo: banner.titulo,
			subTitulo: banner.subTitulo,
			redireccion: banner.redireccion
		});
	};

	const registrarDatos = async () => {
		setLoading(true);
		const formData = new FormData();
		formData.append('imagen', imagen);
		formData.append('titulo', datos.titulo);
		formData.append('subTitulo', datos.subTitulo);
		formData.append('redireccion', datos.redireccion);

		if (control) {
			await axios
				.put(`/banner/${bannerSeleccioando._id}`, formData, {
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
					limpiarCampos();
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
				.post('/banner/', formData, {
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
					limpiarCampos();
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

	const limpiarCampos = () => {
		form.resetFields();
		setImagen();
		setFileList([]);
		setDatos({
			titulo: '',
			subTitulo: '',
			redireccion: ''
		});
		setControl(false);
	};

	function showDeleteConfirm(banner) {
		confirm({
			title: 'Confirma que quieres borrar este banner',
			icon: <ExclamationCircleOutlined />,
			okText: 'Si',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				eliminarBanner(banner);
			}
		});
	}

	const eliminarBanner = async (banner) => {
		await axios
			.delete(`/banner/${banner._id}`, {
				headers: {
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
	};

	const render = banner.map((res) => {
		return (
			<Card
				key={res._id}
				className="m-2"
				bodyStyle={{ padding: 5, height: 90 }}
				style={{ minWidth: 200 }}
				cover={
					<div className="contenedor-imagen-card">
						<img className="imagen-card-banner" alt="imagen de banner" src={aws + res.imagenBanner} />
					</div>
				}
				actions={[
					<EditOutlined key="edit" onClick={() => llenarCampos(res)} />,
					<DeleteOutlined key="delete" onClick={() => showDeleteConfirm(res)} />
				]}
			>
				<Meta
					title={res.titulo}
					description={
						<div className="descripcion-card-banner">
							<p className="ellipsis-banner">{res.subTitulo}</p>
							<p>{res.redireccion}</p>
						</div>
					}
				/>
			</Card>
		);
	});

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
				title="Imagenes del banner"
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
							{control ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				}
			>
				<Spinner loading={loading}>
					<div className="contenedor-imagenes-banner">{render}</div>
					<Divider />
					<h5 className="my-3">Nuevo banner</h5>
					<Form
						{...formItemLayout}
						layout="horizontal"
						form={form}
						className="w-100"
						hideRequiredMark
						onFinish={registrarDatos}
						id="form-registro-tienda"
					>
						<div className="row">
							<div className="col-lg-3 d-flex justify-content-center align-items-center">
								<Form.Item>
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
								</Form.Item>
							</div>
							<div className="col-lg-9">
								<Form.Item name="titulo" label="Titulo">
									<Input name="titulo" placeholder="Titulo de la imagen" onChange={capturarDatos} />
								</Form.Item>
								<Form.Item name="subTitulo" label="Subtitulo">
									<Input
										name="subTitulo"
										placeholder="Subtitulo de la imagen"
										onChange={capturarDatos}
									/>
								</Form.Item>
								<Form.Item name="redireccion" label="Link">
									<Input
										name="redireccion"
										placeholder="Redireccion de la imagen (opcional)"
										onChange={capturarDatos}
									/>
								</Form.Item>
							</div>
						</div>
					</Form>
					<div className="text-center">
						{control ? (
							<Button type="link" onClick={limpiarCampos}>
								Cancelar y registrar nuevo banner
							</Button>
						) : (
							<div className="d-none" />
						)}
					</div>
				</Spinner>

				<Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</Drawer>
		</div>
	);
}
