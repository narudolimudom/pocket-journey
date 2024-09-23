import { useFeatureExpenseStore } from "@app/store/store";
import ActionModal from "@components/modal/ActionModal";
import { Input } from "antd";
import { useEffect, useState } from "react";

interface ActionModalProps {
  isOpenModal: boolean;
  updateOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}

const CreateExpenseModal: React.FC<ActionModalProps> = ({
  isOpenModal,
  updateOpenModal,
  onSuccess,
}) => {
  const { featureExpenses, addFeatureExpense } = useFeatureExpenseStore();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue("");
  }, [isOpenModal]);

  const handleSubmit = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!inputValue.trim()){
      return
    }
    addFeatureExpense({key: inputValue.trim(), name: inputValue.trim()})
    updateOpenModal((prev) => !prev);
    onSuccess();
  };

  return (
    <ActionModal
      title="Create Category"
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit}
      onCancel={() => updateOpenModal((prev) => !prev)}
    >
      <Input
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value)
        }
        }
        addonBefore="Category Name"
        className="py-[10px]"
      />
    </ActionModal>
  );
};

export default CreateExpenseModal;
