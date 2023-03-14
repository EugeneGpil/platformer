export default () => {
  document.addEventListener("touchstart", () => {
    console.log("touchstart");
  });
  document.addEventListener("touchmove", () => {});
  document.addEventListener("touchend", () => {});
  document.addEventListener("touchcancel", () => {});
};
