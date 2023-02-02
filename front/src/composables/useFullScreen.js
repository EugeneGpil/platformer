// maybe will be used later
// better do not delete
// works only by pushing button, not in onMounted() and so on

import { useQuasar } from "quasar";
import unfocus from "src/app/functions/helpers/unfocus";

export function useFullScreen() {
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
}
