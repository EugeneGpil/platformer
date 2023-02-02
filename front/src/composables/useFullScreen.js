// maybe will be used later
// better do not delete
// works only by pushing button, not in onMounted() and so on

import { useQuasar } from "quasar";
import unfocus from "src/composables/helpers/useUnfocus";

export const useFullScreen = () => {
  const $q = useQuasar();

  return {
    async toggle(target) {
      if ($q.fullscreen.isActive) {
        await $q.fullscreen.exit();
        unfocus();

        return;
      }

      await $q.fullscreen.request(target.value);
      unfocus();
    },

    isActive() {
      return $q.fullscreen.isActive;
    },
  };
};
