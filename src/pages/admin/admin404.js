import React from 'react'
import { Empty } from 'antd';

export default function Admin404(){
    return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Vaya, parece que aun no tienes información registrada" style={{fontSize: 24}} />
    )
}
