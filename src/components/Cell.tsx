type CellProps = {
  piece?: string | null;
  isBlack?: boolean;
  rowNumber?: number;
  colLetter?: string;
};
function Cell({ piece, isBlack, rowNumber, colLetter }: CellProps) {
  return (
    <td
      className={`border-none relative p-0 
        w-10 h-10 
        sm:w-12 sm:h-12
        md:w-16 md:h-16
        lg:w-20 lg:h-20
        ${isBlack ? "bg-gray-600 text-white" : "bg-gray-200 text-black"} `}
    >
      <div className="flex justify-center items-center w-full h-full">
        {piece && (
          <img
            src={`/assets/chess-pieces/${piece}.png`}
            alt={piece}
            className="pointer-events-none
            w-6 h-6 
            sm:w-8 sm:h-8 
            md:w-10 md:h-10 
            lg:w-12 lg:h-12"
          />
        )}
      </div>

      {/* row number in top left */}
      {rowNumber !== undefined && (
        <div
          className="absolute
      top-0 left-0 text-[10px] sm:text-xs font-bold opacity-70 p-0.5"
        >
          {rowNumber}
        </div>
      )}

      {/* column letter in bottom-right */}
      {colLetter && <div className="absolute bottom-0 right-0 text-[10px] sm:text-xs font-bold opacity-70 p-0.5">{colLetter}</div>}
    </td>
  );
}

export default Cell;
