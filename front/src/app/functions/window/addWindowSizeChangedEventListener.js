import setSizes from "src/app/functions/window/setSizes";

export default () => {
  addEventListener("resize", () => {
    setSizes();
  });
};
