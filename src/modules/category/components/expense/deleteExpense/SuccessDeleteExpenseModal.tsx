import SuccessModal from "@components/modal/SuccessModal";

interface ActionModalProps {
  isOpenModal: boolean;
  updateOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessDeleteExpenseModal: React.FC<ActionModalProps> = ({
  isOpenModal,
  updateOpenModal,
}) => {
  return (
    <SuccessModal
      title="Create Category"
      isOpenModal={isOpenModal}
      onSubmit={() => updateOpenModal((prev) => !prev)}
    >
      Success
    </SuccessModal>
  );
};

export default SuccessDeleteExpenseModal;
