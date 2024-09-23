import React from "react";
import { Button, ConfigProvider } from "antd";
interface ButtonProps {
  label: string;
  // bgColor?: string;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
  onClick?: () => void;
}

const SingleButton: React.FC<ButtonProps> = ({
  label,
  type = "primary",
  icon,
  iconPosition = "start",
  onClick
}) => {
  return (
    //  <Button color={color} icon={icon} iconPosition={iconPosition}>{label}</Button>

    <ConfigProvider
      theme={{
        components: {
          Button: {
            /* here is your component tokens */
            // defaultBg: bgColor
          },
        },
      }}
    >
      <Button icon={icon} type={type} iconPosition={iconPosition} onClick={onClick}>
        {label}
      </Button>
    </ConfigProvider>
  );
};

export default SingleButton;
