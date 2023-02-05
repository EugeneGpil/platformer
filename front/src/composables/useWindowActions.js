import { useUnfocus } from "src/composables/helpers/useUnfocus";
import { useFullScreen } from "src/composables/useFullScreen";

export const useWindowActions = () => {
  const unfocus = useUnfocus();
  const getFunction = (callback) => {
    return () => {
      callback && callback();
      unfocus();
    };
  };

  const fullScreen = useFullScreen();

  return {
    minimize: getFunction(window.myWindowAPI?.minimize),
    toggleMaximize: () => {
      if (fullScreen.isActive()) {
        fullScreen.toggle()
        getFunction(window.myWindowAPI?.toggleMaximize)()

        return
      }

      getFunction(window.myWindowAPI?.toggleMaximize)()
      fullScreen.toggle()
    },
    closeApp: getFunction(window.myWindowAPI?.close),
  };
};
