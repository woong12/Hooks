export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm || typeof onConfirm !== "function") {
    return;
  }
};
