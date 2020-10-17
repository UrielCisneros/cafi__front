import React, { Fragment } from 'react';
import { Avatar } from 'antd';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import './navegacion_admin.scss';

export default function headerAdmin() {
	return (
		<Fragment>
			<div className="float-right">
				<div className="d-inline-block mx-3">
					<p style={{ fontSize: 18 }}>Bienvenido, Administrador</p>
				</div>
				<div className="d-inline-block mx-3">
					<Avatar className="avatar-admin" icon={<UserOutlined />} />
				</div>
				<div className="d-inline-block mx-2">
                    <div className="session-admin-container">
                        <PoweroffOutlined className="session-admin" />
                    </div>
				</div>
			</div>
		</Fragment>
	);
}
