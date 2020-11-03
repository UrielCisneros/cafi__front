
import { Modal, Button } from 'antd';
import React, {useState} from 'react';
import { Checkbox, Form, Col, Row, Input} from 'antd';

import './solicitud.scss';

export default function SolicitudInformacion() {

  const [ previewVisible, setPreviewVisible ] = useState(false);
  const showDrawer = () => {
		setPreviewVisible(true);
  };
  
  const onClose = () => {
		setPreviewVisible(false);
	};

  
    return (
      <>
        <Button id="boton-vender" onClick={showDrawer}>
          Quiero vender en linea?
        </Button>

        <Modal
          className="modal-form"
          width="900px"
          title="Registro de Solicitud"
          visible={previewVisible}
          onOk={onClose}
          onCancel={onClose}
         >

            <div className="mx-auto">
 							<h1 className="indicaciones">Por favor llena este formulario y nosotros nos contactaremos lo mas pronto posible contigo</h1>
 							<h1 className="indicaciones">Tus datos seran protegidos, puedes verificar nuestras politicas de privacidad</h1>
            </div>
          
          <Form layout="vertical" hideRequiredMark size="large" >
 					
  					<Row gutter={16}>
 						<Col span={12}>
 							<Form.Item
               
								name="name"
								label="Nombre de tu empresa:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Empresa" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="prop"
								label="Propietario:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Propietario:" />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="empresa"
								label="Tipo de empresa:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Empresa" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="domicilio"
								label="Domicilio"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Domicilio" />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="ciudad"
								label="Localidad y Ciudad:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Localidad y Ciudad" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="telefono"
								label="Telefono:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Telefono" />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="e-mail"
								label="Correo electronico:"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Correo" />
							</Form.Item>
						</Col>
					</Row>

            <div className="mx-auto indicaciones mt-3">
            <Checkbox  style={{fontSize: "15px", alignContent: "center"}}>
							Acepto las politicas y uso datos personales
						</Checkbox>
            </div>

					<Form.Item className="text-center mt-5">
						<Button size="large" type="primary"id="enviar" htmlType="submit">
							Enviar
						</Button>
					</Form.Item>
				</Form>

        </Modal>
         
      </>
    );
  
}