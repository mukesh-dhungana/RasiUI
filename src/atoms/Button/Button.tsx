import React, { CSSProperties, ReactElement } from 'react';
import { Button as ANTButton } from 'antd';
import Icon, { IconProps } from '../Icon/Icon';

export interface ButtonProps {
    type?: 'primary' | 'dashed' | 'text' | 'link' | 'default' | 'ghost';
    htmlType?: 'button' | 'submit';
    iconProps?: IconProps;
    label?: string;
    danger?: true | false
    /**
   * Optional style object
   */
    style?: CSSProperties;
    /**
     * Optional CSS class
     */
    className?: string;
    disable?: boolean;
}

function Button({
    type = 'primary',
    className = '',
    iconProps = {} as IconProps,
    label,
    disable = false,
    htmlType = 'button',
    danger = false,
    ...props
}: ButtonProps): ReactElement {
    return (
        <ANTButton className={className} danger={danger} disabled={disable} htmlType={htmlType}
            type={type} icon={iconProps.name && <Icon {...iconProps} />} {...props}>
            {label}
        </ANTButton>
    )
}

export default Button;