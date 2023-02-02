import { useUnfocus } from "src/composables/helpers/useUnfocus";

export const useWindowActions = () => {
  const unfocus = useUnfocus();
  const getFunction = (callback) => {
    return () => {
      callback && callback();
      unfocus();
    };
  };

  return {
    minimize: getFunction(window.myWindowAPI?.minimize),
    toggleMaximize: getFunction(window.myWindowAPI?.toggleMaximize),
    closeApp: getFunction(window.myWindowAPI?.close),
  };
};
