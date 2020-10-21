import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function RegistroInfoTienda() {
	const [ visible, setVisible ] = useState(false);

	const showDrawer = () => {
        setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div>
            <Button size="large" type="primary" icon={<EditOutlined style={{ fontSize: 20 }} />} onClick={showDrawer}>
				Registrar información
			</Button>
			<Drawer
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
						<Button onClick={onClose} type="primary">
							Listo
						</Button>
					</div>
				}
			>
				<Form layout="vertical" hideRequiredMark>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="name"
								label="Name"
								rules={[ { required: true, message: 'Please enter user name' } ]}
							>
								<Input placeholder="Please enter user name" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="url"
								label="Url"
								rules={[ { required: true, message: 'Please enter url' } ]}
							>
								<Input
									style={{ width: '100%' }}
									addonBefore="http://"
									addonAfter=".com"
									placeholder="Please enter url"
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="owner"
								label="Owner"
								rules={[ { required: true, message: 'Please select an owner' } ]}
							>
								<Select placeholder="Please select an owner">
									<Option value="xiao">Xiaoxiao Fu</Option>
									<Option value="mao">Maomao Zhou</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="type"
								label="Type"
								rules={[ { required: true, message: 'Please choose the type' } ]}
							>
								<Select placeholder="Please choose the type">
									<Option value="private">Private</Option>
									<Option value="public">Public</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name="approver"
								label="Approver"
								rules={[ { required: true, message: 'Please choose the approver' } ]}
							>
								<Select placeholder="Please choose the approver">
									<Option value="jack">Jack Ma</Option>
									<Option value="tom">Tom Liu</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name="dateTime"
								label="DateTime"
								rules={[ { required: true, message: 'Please choose the dateTime' } ]}
							>
								<DatePicker.RangePicker
									style={{ width: '100%' }}
									getPopupContainer={(trigger) => trigger.parentElement}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name="description"
								label="Description"
								rules={[
									{
										required: true,
										message: 'please enter url description'
									}
								]}
							>
								<Input.TextArea rows={4} placeholder="please enter url description" />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item className="text-center">
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
				</Form>
			</Drawer>
		</div>
	);
}
