import { Style } from "./../../types";
import drawSquare from "../layers/drawSquare";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: string) => {
  const [y, m, d] = date.split(".").map(Number);

  const month = Number.isNaN(m) ? null : MONTHS[m - 1];
  const day = Number.isNaN(d) || month === null ? null : d;
  const year = Number.isNaN(y) ? null : y;

  return month && day && year
    ? `${month} ${day}, ${year}`
    : month && year
    ? `${month} ${year}`
    : year
    ? String(year)
    : "";
};

const drawText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  fontSize: number,
  fontWeight: number,
  x: number,
  y: number,
  align: CanvasTextAlign
) => {
  ctx.font = `${fontWeight} ${fontSize}px Ubuntu`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
};

const drawHeader = async (
  ctx: CanvasRenderingContext2D,
  size: number,
  style: Style,
  data: { [key: string]: string | undefined },
  flipped: boolean
) => {
  const scale = size / 720;
  ctx.clearRect(0, 0, size, size);
  await drawSquare(ctx, size, 0, 0, style.border);

  ctx.fillStyle = style.coords.onBorder;

  if (data.White) {
    drawText(
      ctx,
      data.White,
      36 * scale,
      700,
      size / 2,
      (flipped ? 100 : size - 100) * scale,
      "center"
    );
  }

  if (data.Black) {
    drawText(
      ctx,
      data.Black,
      36 * scale,
      700,
      size / 2,
      (flipped ? size - 100 : 100) * scale,
      "center"
    );
  }

  if (data.Event) {
    drawText(
      ctx,
      data.Event,
      24 * scale,
      500,
      size / 2,
      (size / 2 - (data.Round ? 20 : 0)) * scale,
      "center"
    );
  }

  if (data.Round) {
    drawText(
      ctx,
      `Round ${data.Round}`,
      24 * scale,
      500,
      size / 2,
      (size / 2 + 20) * scale,
      "center"
    );
  }

  if (data.Date) {
    drawText(
      ctx,
      formatDate(data.Date),
      20 * scale,
      500,
      size / 2,
      450 * scale,
      "center"
    );
  }

  if (data.Site) {
    drawText(ctx, data.Site, 20 * scale, 500, size / 2, 480 * scale, "center");
  }
};

export default drawHeader;
