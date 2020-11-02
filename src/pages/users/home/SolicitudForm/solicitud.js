// import React, { useState } from 'react';
// import { Drawer, Form, Button, Col, Row, Input} from 'antd';
// import {SecurityScanOutlined } from '@ant-design/icons';

// import './solicitud.scss';

// import QueueAnim from 'rc-queue-anim';
// import Texty from 'rc-texty';

// //const { Option } = Select;

// export default function SolicitudInformacion() {
// 	const [ visible, setVisible ] = useState(false);

// 	const showDrawer = () => {
//         setVisible(true);
// 	};

// 	const onClose = () => {
// 		setVisible(false);
// 	};

// 	return (
// 		<div className="container-fluid">
//             <div className="row my-5 contenedor-boton" onClick={showDrawer}>
// 					<QueueAnim delay={800} type="scale" >
// 						<Texty type="scale" key="a" className="boton-vender px-5" >
// 							¡¿Quiero vender en linea?!
// 						</Texty>
// 					</QueueAnim>
// 			</div>

// 			<Drawer
			
// 				title="Registro de Solicitud"
// 				width={window.screen.width > 768 ? 720 : window.screen.width}
// 				onClose={onClose}
// 				visible={visible}
// 				bodyStyle={{ paddingBottom: 80 }}
// 				footer={
// 				 	<div className="text-center"
// 				 		style={{
// 				 			textAlign: 'right'
// 				 		}}
// 				 	>
// 				 		<Button type="link" id="botones-enlaces">
// 						<SecurityScanOutlined style={{fontSize: 20}}/>
// 							Politicas y Uso datos personales
// 						</Button>
// 				 	</div>
// 				}
// 			>
// 				<Form layout="vertical" hideRequiredMark size="large">
// 					<Row gutter={16}>
// 						<Col span={32} > 
// 							<h1 className="indicaciones">Por favor llena este formulario y nosotros nos contactaremos lo mas pronto posible contigo</h1>
// 							<h1 className="indicaciones">Tus datos seran protegidos, puedes verificar nuestras politicas de privacidad</h1>
// 						</Col>
// 					</Row>
// 					<Row gutter={16}>
// 						<Col span={12}>
// 							<Form.Item
// 								name="name"
// 								label="Nombre de tu empresa:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Empresa" />
// 							</Form.Item>
// 						</Col>
// 						<Col span={12}>
// 							<Form.Item
// 								name="prop"
// 								label="Propietario:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Propietario:" />
// 							</Form.Item>
// 						</Col>
// 					</Row>
// 					<Row gutter={16}>
// 						<Col span={12}>
// 							<Form.Item
// 								name="empresa"
// 								label="Tipo de empresa:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Empresa" />
// 							</Form.Item>
// 						</Col>
// 						<Col span={12}>
// 							<Form.Item
// 								name="domicilio"
// 								label="Domicilio"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Domicilio" />
// 							</Form.Item>
// 						</Col>
// 					</Row>
// 					<Row gutter={16}>
// 						<Col span={12}>
// 							<Form.Item
// 								name="ciudad"
// 								label="Localidad y Ciudad:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Localidad y Ciudad" />
// 							</Form.Item>
// 						</Col>
// 						<Col span={12}>
// 							<Form.Item
// 								name="telefono"
// 								label="Telefono:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Telefono" />
// 							</Form.Item>
// 						</Col>
// 					</Row>
// 					<Row gutter={16}>
// 						<Col span={12}>
// 							<Form.Item
// 								name="e-mail"
// 								label="Correo electronico:"
// 								rules={[ { required: true, message: 'Please enter user name' } ]}
// 							>
// 								<Input placeholder="Correo" />
// 							</Form.Item>
// 						</Col>
// 					</Row>
// 					<Form.Item className="text-center">
// 						<Button size="large" type="primary" htmlType="submit">
// 							Enviar
// 						</Button>
// 					</Form.Item>
// 				</Form>
// 			</Drawer>
// 		</div>
// 	);
// }


import { Modal, Button } from 'antd';
import React from 'react';
//import { Drawer, Form, Col, Row, Input} from 'antd';

import './solicitud.scss';

export default function SolicitudInformacion() {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
		  onCancel={this.handleCancel}
		  footer={
				<div className="text-center"
					style={{
						textAlign: 'right'
						}}
				>
				<Button type="link" id="botones-enlaces">
				Politicas y Uso datos personales
				</Button>
				</div>
			}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  
}