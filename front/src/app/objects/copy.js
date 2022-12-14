import Player from "src/app/classes/player/Player";

export default {
  player(player) {
    const newPlayer = new Player({
      position: {
        x: player.position.x,
        y: player.position.y,
      },
    });
    newPlayer.width = player.width;
    newPlayer.height = player.height;
    return newPlayer;
  },
};
