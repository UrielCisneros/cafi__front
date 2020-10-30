import React from 'react'
import { Spin } from 'antd';

export default function Spinner(props){
    return <Spin size="large" spinning={props.loading}>{props.children}</Spin>
}

