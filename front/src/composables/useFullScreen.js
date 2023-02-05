// maybe will be used later
// better do not delete
// works only by pushing button, not in onMounted() and so on

import { useQuasar } from "quasar";
import { useUnfocus } from "src/composables/helpers/useUnfocus";
import globals from "src/app/objects/globals";

export const useFullScreen = () => {
  const $q = useQuasar();
  const unfocus = useUnfocus();

  return {
    async toggle() {
      if ($q.fullscreen.isActive) {
        await $q.fullscreen.exit();
        unfocus();

        return;
      }

      await $q.fullscreen.request(globals.playScreen.value);
      unfocus();
    },

    isActive() {
      return $q.fullscreen.isActive;
    },
  };
};
