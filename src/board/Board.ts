import { Move } from "chess.js";
import { Style, BoardData } from "../types";
import drawSquare from "./layers/drawSquare";
import drawBorder from "./layers/drawBorder";
import drawCoords from "./layers/drawCoords";
import drawMoveIndicators from "./layers/drawMoveIndicators";
import drawPieces from "./layers/drawPieces";
import drawHeader from "./layers/drawHeader.ts";
import boards from "./styles-board";

class Board {
  private size: number = 720;
  private style: Style = boards.standard;
  private flipped: boolean = false;
  private boardData: BoardData | null = null;
  private ctx: CanvasRenderingContext2D;
  private tempCtx: CanvasRenderingContext2D;
  private borderVisible: boolean = true;
  private lastMove: Move | null = null;
  public canvas: HTMLCanvasElement = document.createElement("canvas");
  private tempCanvas: HTMLCanvasElement = document.createElement("canvas");
  private squareSize: number = 84;
  private innerSize: number = 672;
  private borderWidth: number = 24;
  private background: Promise<ImageBitmap> | null = null;

  constructor(private tiles: number = 8) {
    const ctx = this.canvas.getContext("2d");
    const tempCtx = this.tempCanvas.getContext("2d");
    this.canvas.classList.add("board");

    if (ctx === null || tempCtx === null) {
      throw new Error("Cannot create canvas 2D context");
    }

    this.ctx = ctx;
    this.tempCtx = tempCtx;
    this.setSize(this.size);
  }

  setSize(size: number) {
    this.size = size;
    this.canvas.width = size;
    this.canvas.height = size;
    this.tempCanvas.width = size;
    this.tempCanvas.height = size;

    const tempBorderWidth = this.borderVisible ? this.size / 32 : 0;
    const tempInnerSize = this.size - tempBorderWidth * 2;
    this.squareSize = Math.floor(tempInnerSize / this.tiles);
    this.innerSize = this.squareSize * this.tiles;
    this.borderWidth = (this.size - this.innerSize) / 2;

    return this;
  }

  getSize() {
    return this.size;
  }

  setStyle(style: Style) {
    this.style = style;
    return this;
  }

  flip() {
    this.flipped = !this.flipped;
    // this.render(this.boardData, this.lastMove);
    return this;
  }

  hideBorder() {
    this.borderVisible = false;
    this.setSize(this.size);
    return this;
  }

  showBorder() {
    this.borderVisible = true;
    this.setSize(this.size);
    return this;
  }

  isCheck(move: Move | null) {
    if (!move) {
      return false;
    }

    return move.san.includes("+");
  }

  isMate(move: Move | null) {
    if (!move) {
      return false;
    }

    return move.san.includes("#");
  }

  getOppositeColor(color?: "w" | "b") {
    if (!color) {
      return;
    }

    return color === "w" ? "b" : "w";
  }

  async renderTitleScreen(header: { [key: string]: string | undefined }) {
    await drawHeader(this.tempCtx, this.size, this.style, header, this.flipped);
    this.ctx.drawImage(this.tempCanvas, 0, 0);
  }

  async renderBackground() {
    const { background, dark, light, border, coords } = this.style;

    await drawSquare(
      this.tempCtx,
      this.innerSize,
      this.borderVisible ? this.borderWidth : 0,
      this.borderVisible ? this.borderWidth : 0,
      background
    );

    if (this.borderVisible) {
      await drawBorder(
        this.tempCtx,
        this.size - this.borderWidth,
        this.borderWidth / 2,
        this.borderWidth / 2,
        this.borderWidth,
        border
      );
    }

    for (let rank = 0; rank < this.tiles; rank++) {
      for (let file = 0; file < this.tiles; file++) {
        const style =
          (file % 2 === 0 && rank % 2 === 0) ||
          (file % 2 !== 0 && rank % 2 !== 0)
            ? light
            : dark;

        const x = file * this.squareSize + this.borderWidth;
        const y = rank * this.squareSize + this.borderWidth;

        await drawSquare(this.tempCtx, this.squareSize, x, y, style);
      }
    }

    drawCoords(
      this.tempCtx,
      coords,
      this.squareSize,
      this.tiles,
      this.flipped,
      this.borderWidth,
      this.size,
      this.borderVisible
    );

    this.background = createImageBitmap(this.tempCanvas);
  }

  async render(boardData: BoardData | null, move: Move | null = null) {
    this.lastMove = move;
    this.boardData = boardData;

    const check = this.isCheck(move)
      ? this.getOppositeColor(move?.color)
      : undefined;
    const mate = this.isMate(move)
      ? this.getOppositeColor(move?.color)
      : undefined;

    this.tempCtx.clearRect(0, 0, this.size, this.size);

    if (this.background === null) {
      await this.renderBackground();
    }

    this.tempCtx.drawImage((await this.background) as ImageBitmap, 0, 0);

    if (boardData !== null) {
      if (this.lastMove) {
        await drawMoveIndicators(
          this.tempCtx,
          this.lastMove,
          this.squareSize,
          this.style,
          this.borderWidth,
          this.tiles,
          this.flipped
        );
      }

      await drawPieces(
        this.tempCtx,
        boardData,
        this.squareSize,
        this.borderWidth,
        this.tiles,
        this.flipped,
        check,
        mate,
        true
      );
    }

    this.ctx.clearRect(0, 0, this.size, this.size);
    this.ctx.drawImage(this.tempCanvas, 0, 0);
  }

  toImgUrl() {
    return this.canvas.toDataURL();
  }

  toImgElement() {
    const dataUrl = this.toImgUrl();

    const img = new Image();
    img.classList.add("board");
    img.src = dataUrl;
    return img;
  }
}

export default Board;
