const { RaspiIO, Board, Led } = require("johnny-five");
const board = new Board({
  io: new RaspiIO()
});

board.on("ready", () => {
  const led1 = new Led("P1-12");
  const led2 = new Led("P1-13");

  board.loop(500, () => {
    led1.toggle();
    led2.toggle();
  });
});
