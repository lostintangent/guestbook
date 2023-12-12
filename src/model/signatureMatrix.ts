import { isBonusCell, isSpecialCell } from "./bonusCells";
import signatures from "./signatures";
import { observable } from "mobx";

interface Signature {
  handle: string;
  location: string;
  message: string;
}

interface MatrixCell {
  isBonus: boolean;
  isSpecial: boolean;
  signature?: Signature | string;
  isActive?: boolean;
}

const COLUMNS = 30;
const ROWS = 20;

const matrix: MatrixCell[] = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    const cellNumber = y + x * ROWS + 1;
    const isBonus = isBonusCell(cellNumber);
    const isSpecial = isSpecialCell(cellNumber);

    const signature = signatures.shift();
    matrix.push({ isBonus, isSpecial, signature });
  }
}

export default observable(matrix);
