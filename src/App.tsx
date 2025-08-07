import "./App.css";

type CellProps = {
  piece?: string | null;
  isBlack?: boolean;
};

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
  [
    "black-pawn",
    "black-pawn",
    "black-pawn",
    "black-pawn",
    "black-pawn",
    "black-pawn",
    "black-pawn",
    "black-pawn",
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    "white-pawn",
    "white-pawn",
    "white-pawn",
    "white-pawn",
    "white-pawn",
    "white-pawn",
    "white-pawn",
    "white-pawn",
  ],
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

function Cell({ piece, isBlack }: CellProps) {
  return (
    <td
      className={`border-none w-20 h-20 align-bottom ${
        isBlack ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {piece && (
        <img
          src={`/assets/chess-pieces/${piece}.png`}
          alt={piece}
          className="w-10 h-10 pointer-events-none"
        />
      )}
    </td>
  );
}

function Board() {
  //const CHESS_BOARD_SIZE = 8;
  //const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = initialBoard;

  return (
    <table className="border-collapse">
      <tbody>
        {board.map((rowArray, row) => (
          <tr key={row}>
            {rowArray.map((piece, col) => {
              const isBlack = (row + col) % 2 === 1;

              return <Cell key={col} piece={piece} isBlack={isBlack} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-800">
        <Board />
      </div>
    </>
  );
}

export default App;

//  <table className="border-collapse">
//       <tbody className="">
//         {Array.from({ length: CHESS_BOARD_SIZE }).map((_, row) => (
//           <tr key={row}>
//             {Array.from({ length: CHESS_BOARD_SIZE }).map((_, col) => {
//               const isBlack = (row + col) % 2 === 1;

//               let content = "";

//               const isLastRow = row === CHESS_BOARD_SIZE - 1;
//               const isFirstCol = col === 0;

//               if (isLastRow && isFirstCol) {
//                 content = `${CHESS_BOARD_SIZE - row} ${letters[col]}`;
//               } else if (isLastRow) {
//                 content = letters[col];
//               } else if (isFirstCol) {
//                 content = String(CHESS_BOARD_SIZE - row);
//               }

//               return (
//                 <Cell key={col} isBlack={isBlack}>
//                   {content}
//                 </Cell>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
