import Cell from "./Cell";
const CHESS_BOARD_SIZE = 8;

const initialBoard: (string | null)[][] = [
  [
    "black-rook",
    "black-knight",
    "black-bishop",
    "black-queen",
    "black-king",
    "black-bishop",
    "black-knight",
    "black-rook",
  ],
  Array(CHESS_BOARD_SIZE).fill("black-pawn"),
  Array(CHESS_BOARD_SIZE).fill(null),
  Array(CHESS_BOARD_SIZE).fill(null),
  Array(CHESS_BOARD_SIZE).fill(null),
  Array(CHESS_BOARD_SIZE).fill(null),
  Array(CHESS_BOARD_SIZE).fill("white-pawn"),
  [
    "white-rook",
    "white-knight",
    "white-bishop",
    "white-queen",
    "white-king",
    "white-bishop",
    "white-knight",
    "white-rook",
  ],
];
const board = initialBoard;
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Board() {
  return (
    <div className="inline-block">
      <table className="border-collapse">
        <tbody>
          {board.map((rowArray, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {/* Chess cells */}
                {rowArray.map((piece, colIndex) => {
                  const isBlack = (rowIndex + colIndex) % 2 === 1;

                  // show row number in leftmost column
                  const showRowNumber =
                    colIndex === 0 ? 8 - rowIndex : undefined;
                  //show col letter in bottom row
                  const showColLetter =
                    rowIndex === 7 ? letters[colIndex] : undefined;
                  return (
                    <Cell
                      key={colIndex}
                      piece={piece}
                      isBlack={isBlack}
                      rowNumber={showRowNumber}
                      colLetter={showColLetter}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
