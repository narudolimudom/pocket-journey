import React from "react";
import { ConfigProvider, Modal } from "antd";

interface ActionModalProps {
  title?: string;
  isOpenModal: boolean;
  children?: React.ReactNode;
  onSubmit: (args?: any) => void;
  onCancel: (args?: any) => void;
}

const ActionModal: React.FC<ActionModalProps> = ({ title, isOpenModal, onSubmit, onCancel, children }) => {
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
      closeIcon={false}
        open={isOpenModal}
        onOk={() => onSubmit()}
        onCancel={() => onCancel()}
      >
        {children}
      </Modal>
    </ConfigProvider>
  );
};

export default ActionModal;