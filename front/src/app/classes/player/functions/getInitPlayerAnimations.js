const animations = {
  Idle: {
    imageSrc: "/img/warrior/Idle.png",
    framesCount: 8,
    frameBuffer: 5,
  },
  Run: {
    imageSrc: "/img/warrior/Run.png",
    framesCount: 8,
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
