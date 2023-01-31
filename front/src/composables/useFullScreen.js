import { useQuasar } from "quasar";

export function useFullScreen() {
  const $q = useQuasar();

  return {
    async toggle(target) {
      if ($q.fullscreen.isActive) {
        await $q.fullscreen.exit();
        document.activeElement.blur();

        return;
      }

      await $q.fullscreen.request(target.value);
      document.activeElement.blur();
    },

    isActive() {
      return $q.fullscreen.isActive;
    },
  };
}
