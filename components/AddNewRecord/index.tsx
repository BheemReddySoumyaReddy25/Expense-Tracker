"use client";
import { useRef, useState } from "react";
import addExpenseRecord from "@/app/actions/addExpenseRecord";
import { suggestCategory } from "@/app/actions/suggestCategory";

import DescriptionField from "./DescriptionField";
import DateField from "./DateField";
import CategoryField from "./CategoryField";
import AmountField from "./AmountField";
import SubmitButton from "./SubmitButton";
import Alert from "./Alert";

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState<{
    message: string | null;
    type: "success" | "error" | null;
    isLoading: boolean;
    isCategorizing: boolean;
  }>({
    message: null,
    type: null,
    isLoading: false,
    isCategorizing: false,
  });

  const resetForm = () => {
    formRef.current?.reset();
    setAmount(50);
    setCategory("");
    setDescription("");
  };

  const clientAction = async (formData: FormData) => {
    setStatus((s) => ({ ...s, isLoading: true, message: null }));

    formData.set("amount", amount.toString());
    formData.set("category", category);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setStatus({
        message: `Error: ${error}`,
        type: "error",
        isLoading: false,
        isCategorizing: false,
      });
    } else {
      setStatus({
        message: "Expense record added successfully!",
        type: "success",
        isLoading: false,
        isCategorizing: false,
      });
      resetForm();
    }
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setStatus({
        message: "Please enter a description first",
        type: "error",
        isLoading: false,
        isCategorizing: false,
      });
      return;
    }

    setStatus((s) => ({ ...s, isCategorizing: true, message: null }));

    try {
      const result = await suggestCategory(description);
      if (result.error) {
        setStatus({
          message: `AI Suggestion: ${result.error}`,
          type: "error",
          isLoading: false,
          isCategorizing: false,
        });
      } else {
        setCategory(result.category);
        setStatus({
          message: `AI suggested category: ${result.category}`,
          type: "success",
          isLoading: false,
          isCategorizing: false,
        });
      }
    } catch {
      setStatus({
        message: "Failed to get AI category suggestion",
        type: "error",
        isLoading: false,
        isCategorizing: false,
      });
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-sm sm:text-lg">💳</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Add New Expense
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Track your spending with AI assistance
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <DescriptionField
            description={description}
            setDescription={setDescription}
            onAISuggest={handleAISuggestCategory}
            isCategorizing={status.isCategorizing}
          />
          <DateField />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <CategoryField category={category} setCategory={setCategory} />
          <AmountField amount={amount} setAmount={setAmount} />
        </div>

        <SubmitButton isLoading={status.isLoading} />
      </form>

      {/* Alert */}
      {status.message && status.type && (
        <Alert type={status.type} message={status.message} />
      )}
    </div>
  );
};

export default AddRecord;
