export const animationKeys = {
  Idle: "Idle",
  Run: "Run",
  Jump: "Jump",
};

const animations = {
  [animationKeys.Idle]: {
    imageSrc: "/img/warrior/Idle.png",
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.Run]: {
    imageSrc: "/img/warrior/Run.png",
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.Jump]: {
    imageSrc: "/img/warrior/Jump.png",
    framesCount: 2,
    frameBuffer: 5,
  },
};

export default () => {
  return Object.keys(animations).reduce((res, animationKey) => {
    const image = new Image();
    image.src = animations[animationKey].imageSrc;

    res[animationKey] = {
      ...animations[animationKey],
      image,
    };

    return res;
  }, []);
};
