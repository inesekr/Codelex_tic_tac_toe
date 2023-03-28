export type XO = "X" | "O";
type T_Cell = XO | "-";

export class Game {
  cells: T_Cell[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = "X";
  getCells(): T_Cell[] {
    return this.cells;
    this.turn = "X";
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO | void {
    if (
      this.getCells()[0] === this.getCells()[1] &&
      this.getCells()[1] === this.getCells()[2] &&
      this.getCells()[0] !== "-"
    ) {
      return this.getCells()[0] as XO;
    }
    if (
      this.getCells()[3] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[5] &&
      this.getCells()[3] !== "-"
    ) {
      return this.getCells()[3] as XO;
    }
    if (
      this.getCells()[6] === this.getCells()[7] &&
      this.getCells()[7] === this.getCells()[8] &&
      this.getCells()[6] !== "-"
    ) {
      return this.getCells()[6] as XO;
    }
    if (
      this.getCells()[0] === this.getCells()[3] &&
      this.getCells()[3] === this.getCells()[6] &&
      this.getCells()[0] !== "-"
    ) {
      return this.getCells()[0] as XO;
    }
    if (
      this.getCells()[1] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[7] &&
      this.getCells()[1] !== "-"
    ) {
      return this.getCells()[1] as XO;
    }
    if (
      this.getCells()[2] === this.getCells()[5] &&
      this.getCells()[5] === this.getCells()[8] &&
      this.getCells()[2] !== "-"
    ) {
      return this.getCells()[2] as XO;
    }
    if (
      this.getCells()[0] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[8] &&
      this.getCells()[0] !== "-"
    ) {
      return this.getCells()[0] as XO;
    }
    if (
      this.getCells()[2] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[6] &&
      this.getCells()[2] !== "-"
    ) {
      return this.getCells()[2] as XO;
      // Will work without as XO, if changes are mode toGameUI file?
      // return this.getCells()[2];
    }
  }

  isTie(): boolean {
    if (
      this.getCells()[0] !== "-" &&
      this.getCells()[1] !== "-" &&
      this.getCells()[2] !== "-" &&
      this.getCells()[3] !== "-" &&
      this.getCells()[4] !== "-" &&
      this.getCells()[5] !== "-" &&
      this.getCells()[6] !== "-" &&
      this.getCells()[7] !== "-" &&
      this.getCells()[8] !== "-" &&
      !this.getWinner()
    ) {
      return true;
    } else {
      return false;
    }
  }

  onClick(i: number): void {
    if (this.getCells()[i] === "-" && !this.getWinner()) {
      this.cells[i] = this.turn;
      // Shorter variant with ternary operator:
      // this.turn = this.turn==="X" ? "O" : "X";
      if (this.turn === "X") {
        this.turn = "O";
      } else {
        this.turn = "X";
      }
      // These lines of code - for testing only:
      // console.log(this.cells, this.getCells());
      // console.log(`cell ${i} clicked`);
    }
  }

  // restart(): void {
  restart(): any {
    console.log("restart called");
    // if(this.isTie()){
    //   this.turn = "X"
    // }
    // if (this.turn === "X") {
    //   this.turn = "X";
    // } else {
    //   this.turn = "O";
    // }
    this.turn = "X";
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.getCells();
  }
}
