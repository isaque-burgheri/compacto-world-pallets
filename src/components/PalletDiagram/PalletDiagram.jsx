import styles from './PalletDiagram.module.css'

const DECK_X = 40
const DECK_Y = 40
const DECK_W = 520
const DECK_H = 420
const BOARD_GAP = 7
const BOARD_COUNT = 7
const BOARD_H = (DECK_H - (BOARD_COUNT - 1) * BOARD_GAP) / BOARD_COUNT
const BATTEN_W = 34

const battenX = [DECK_X, DECK_X + (DECK_W - BATTEN_W) / 2, DECK_X + DECK_W - BATTEN_W]

const boards = Array.from({ length: BOARD_COUNT }, (_, i) => ({
  y: DECK_Y + i * (BOARD_H + BOARD_GAP)
}))

const H_DIM_Y = DECK_Y + DECK_H + 25
const V_DIM_X = DECK_X + DECK_W + 25

export default function PalletDiagram() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 640 520"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Desenho técnico do palete PBR-1, vista superior: sete tábuas de deck de madeira de pinus sobre três travessas, medindo 1200 por 1000 milímetros, com quatro entradas para empilhadeira."
    >
      {battenX.map((x, i) => (
        <rect key={i} className={styles.batten} x={x} y={DECK_Y} width={BATTEN_W} height={DECK_H} />
      ))}

      {boards.map((board, i) => (
        <rect
          key={i}
          className={styles.board}
          x={DECK_X}
          y={board.y}
          width={DECK_W}
          height={BOARD_H}
          rx="2"
          style={{ animationDelay: `${i * 60}ms` }}
        />
      ))}

      <text x={DECK_X + 14} y={boards[0].y + BOARD_H / 2 + 4} className={styles.stamp}>
        PBR-1
      </text>

      <line className={styles.dimLine} x1={DECK_X} y1={H_DIM_Y} x2={DECK_X + DECK_W} y2={H_DIM_Y} />
      <line className={styles.dimTick} x1={DECK_X} y1={H_DIM_Y - 8} x2={DECK_X} y2={H_DIM_Y + 8} />
      <line
        className={styles.dimTick}
        x1={DECK_X + DECK_W}
        y1={H_DIM_Y - 8}
        x2={DECK_X + DECK_W}
        y2={H_DIM_Y + 8}
      />
      <text x={DECK_X + DECK_W / 2} y={H_DIM_Y + 26} textAnchor="middle" className={styles.dimLabel}>
        1200 mm
      </text>

      <line className={styles.dimLine} x1={V_DIM_X} y1={DECK_Y} x2={V_DIM_X} y2={DECK_Y + DECK_H} />
      <line className={styles.dimTick} x1={V_DIM_X - 8} y1={DECK_Y} x2={V_DIM_X + 8} y2={DECK_Y} />
      <line
        className={styles.dimTick}
        x1={V_DIM_X - 8}
        y1={DECK_Y + DECK_H}
        x2={V_DIM_X + 8}
        y2={DECK_Y + DECK_H}
      />
      <text
        x={V_DIM_X + 22}
        y={DECK_Y + DECK_H / 2}
        textAnchor="middle"
        className={styles.dimLabel}
        transform={`rotate(90 ${V_DIM_X + 22} ${DECK_Y + DECK_H / 2})`}
      >
        1000 mm
      </text>
    </svg>
  )
}
