export default ({ obj1, obj2 }) => {
  const isColliding = () => (
    obj1.position.y + obj1.height >= obj2.position.y &&
    obj1.position.y <= obj2.position.y + obj2.height &&
    obj1.position.x <= obj2.position.x + obj2.width &&
    obj1.position.x + obj1.width >= obj2.position.x
  );

  return isColliding();
};
