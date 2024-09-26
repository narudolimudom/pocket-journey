import { useFeatureIncomeStore } from "@app/store/store";
import ActionModal from "@components/modal/ActionModal";
import { Input } from "antd";
import { useEffect, useState } from "react";

interface ActionModalProps {
  isOpenModal: boolean;
  updateOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}

const CreateIncomeModal: React.FC<ActionModalProps> = ({
  isOpenModal,
  updateOpenModal,
  onSuccess,
}) => {
  const { featureIncomes, addFeatureIncome } = useFeatureIncomeStore();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue("");
  }, [isOpenModal]);

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      return;
    }
    addFeatureIncome({ key: inputValue.trim(), name: inputValue.trim() });
    updateOpenModal((prev) => !prev);
    onSuccess();
  };

  return (
    <ActionModal
      title="Create Income Category"
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit}
      onCancel={() => updateOpenModal((prev) => !prev)}
    >
      <Input
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
        addonBefore="Income Name"
        className="py-[10px]"
      />
    </ActionModal>
  );
};

export default CreateIncomeModal;
