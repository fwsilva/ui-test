import React from 'react';
import { Button } from '../Button/Button';
import './TitleBar.css';

interface TitleBarProps {
    title: string;
    button?: any;
}

const ButtonExample = <Button label="Test" />;

export const TitleBar = ({
    title = "Test",
    button = ButtonExample,
    ...props
}: TitleBarProps) => {

    return (
        <div className="storybook-titleBar">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {button}
            </div>
        </div>
    );
};
