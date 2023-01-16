export const animationKeys = {
  right: {
    idle: "idle",
    run: "run",
    jump: "jump",
    fall: "fall",
  },
  left: {
    idle: "idleLeft",
    run: "runLeft",
    jump: "jumpLeft",
    fall: "fallLeft",
  },
};

const framesSettings = {
  [animationKeys.right.idle]: {
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.right.run]: {
    framesCount: 8,
    frameBuffer: 5,
  },
  [animationKeys.right.jump]: {
    framesCount: 2,
    frameBuffer: 5,
  },
  [animationKeys.right.fall]: {
    framesCount: 2,
    frameBuffer: 5,
  },
};

const animations = {
  [animationKeys.right.idle]: {
    imageSrc: "/img/warrior/Idle.png",
    ...framesSettings[animationKeys.right.idle],
  },
  [animationKeys.left.idle]: {
    imageSrc: "/img/warrior/IdleLeft.png",
    ...framesSettings[animationKeys.right.idle],
  },
  [animationKeys.right.run]: {
    imageSrc: "/img/warrior/Run.png",
    ...framesSettings[animationKeys.right.run],
  },
  [animationKeys.left.run]: {
    imageSrc: "/img/warrior/RunLeft.png",
    ...framesSettings[animationKeys.right.run],
  },
  [animationKeys.right.jump]: {
    imageSrc: "/img/warrior/Jump.png",
    ...framesSettings[animationKeys.right.jump],
  },
  [animationKeys.left.jump]: {
    imageSrc: "img/warrior/JumpLeft.png",
    ...framesSettings[animationKeys.right.jump],
  },
  [animationKeys.right.fall]: {
    imageSrc: "/img/warrior/Fall.png",
    ...framesSettings[animationKeys.right.fall],
  },
  [animationKeys.left.fall]: {
    imageSrc: "/img/warrior/FallLeft.png",
    ...framesSettings[animationKeys.right.fall],
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
