import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    // expect(game.getWinner()).toBe("-");
    // Changed line above to this below - .toBeUndefined():
    expect(game.getWinner()).toBeUndefined();
    expect(game.isTie()).toBe(false);
  });

  it("should display X or O on clicking on cell", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBeUndefined;
    expect(game.isTie()).toBe(false);
  });

  it("should not be able to change cells value", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBeUndefined();
    expect(game.isTie()).toBe(false);
  });

  it("should show winner if row is filled with X's", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);
    // expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should not allow to click anymore if there is winner", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    //added additional click which should not show "O" on board:
    game.onClick(5);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);
    // expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });


  it("should show tie if after 9 clicks there is no winner", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(2);
    game.onClick(6);
    game.onClick(3);
    game.onClick(5);
    game.onClick(7);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "O",
      "O",
      "O",
      "X",
      "X",
      "O",
      "X",
    ]);
    // expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBeUndefined();
    expect(game.isTie()).toBe(true);
  });

  it("should show starting board after clicking on 'Play Again' ", () => {
    const game = new Game();

    // button.onClick();//??
   
    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBeUndefined();
    expect(game.isTie()).toBe(false);
  });

});
