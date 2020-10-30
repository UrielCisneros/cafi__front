import React from 'react'
import { Empty } from 'antd';

export default function Admin404(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Vaya, parece que aun no tienes información registrada" style={{fontSize: 24}} />
        </div>
        
    )
}
