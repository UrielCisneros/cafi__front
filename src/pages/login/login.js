import React from 'react';
import { Form, Input, Button, message } from 'antd';
import './login.scss';
import axios from '../../config/axios';

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 }
};
const key = 'updatable';

export default function Login() {
	
	const onFinish = async (credenciales) => {
		console.log(credenciales)
		message.loading({ content: 'Validando...', key });
		await axios
			.post('/user/login', credenciales, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((res) => {
				console.log(res)
				message.success({ content: 'Ok!', key, duration: 2 });
			})
			.catch((err) => {
				console.log(err.response)
				if (err.response.data.message) {
					message.error({ content: err.response.data.message, key, duration: 2 });
				} else {
					message.error({ content: 'Error de conexion', key, duration: 2 });
				}
			});
	};

	const onFinishFailed = (errorInfo) => {
		message.error('This is a error message');
		console.log(errorInfo);
	};

	return (
		<div className="contenedor-login">
			<div className="contenedor-form-login">
				<Form
					{...layout}
					name="basic"
					className="form-login shadow"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item label="Email">
						<Form.Item
							noStyle
							name="email"
							rules={[ { required: true, message: 'Please input your username!' } ]}
						>
							<Input />
						</Form.Item>
					</Form.Item>

					<Form.Item label="Contraseña">
						<Form.Item
							noStyle
							name="password"
							rules={[ { required: true, message: 'Please input your password!' } ]}
						>
							<Input.Password />
						</Form.Item>
					</Form.Item>

					<Form.Item className="d-flex justify-content-center">
						<Form.Item className="text-center">
							<Button type="primary" htmlType="submit">
								Entrar
							</Button>
						</Form.Item>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
