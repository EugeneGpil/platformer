import { useQuasar } from "quasar";

let isFullScreen = false;

export function useToggleFullScreen() {
  const $q = useQuasar();

  return {
    async toggle() {
      if (isFullScreen) {
        await $q.fullscreen.exit();
        isFullScreen = false;
        document.activeElement.blur();

        return;
      }

      await $q.fullscreen.request();
      isFullScreen = true;
      document.activeElement.blur();
    },
  };
}
