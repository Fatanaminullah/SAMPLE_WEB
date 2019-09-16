import React from 'react'
import { Button } from 'antd'
import '../../assets/css/app.css'

export const SubmitButton = ({ 
    label,
    onClick,
    className,
}) => (
    <Button 
        type="primary"
        className={`button-submit ${className}`}
        shape="round"
        onClick={onClick}
        >
        {label}
    </Button>
)