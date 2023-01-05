export const animationKeys = {
  idle: "idle",
  run: "run",
  jump: "jump",
  fall: "fall",
};

const animations = {
  [animationKeys.idle]: {
    imageSrc: "/img/warrior/Idle.png",
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.run]: {
    imageSrc: "/img/warrior/Run.png",
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.jump]: {
    imageSrc: "/img/warrior/Jump.png",
    framesCount: 2,
    frameBuffer: 5,
  },
  [animationKeys.fall]: {
    imageSrc: "/img/warrior/Fall.png",
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
