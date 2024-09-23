import React from "react";
import { ConfigProvider, Modal } from "antd";

interface ActionModalProps {
  title?: string;
  isOpenModal: boolean;
  children: React.ReactNode;
  onSubmit: (args?: any) => void;
}

const SuccessModal: React.FC<ActionModalProps> = ({ title, isOpenModal, onSubmit, children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            /* Customize Modal component tokens here if needed */
            // defaultBg: bgColor
          },
        },
      }}
    >
      <Modal
      title={title}
      centered
      cancelButtonProps={{ style: { display: 'none' } }}
      closeIcon={false}
        open={isOpenModal}
        onOk={() => onSubmit()}
      >
        {children}
      </Modal>
    </ConfigProvider>
  );
};

export default SuccessModal;