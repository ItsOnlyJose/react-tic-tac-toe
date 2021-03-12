import Square from "./Square"

const Board = ({ squares, onClick }) => {
    return (
        <div>
            <Square value="1" onClick={() => onClick("test value")} />
            <Square value="2" onClick={() => onClick("test value")} />
            <Square value="3" onClick={() => onClick("test value")} />
            <Square value="4" onClick={() => onClick("test value")} />
            <Square value="5" onClick={() => onClick("test value")} />
            <Square value="6" onClick={() => onClick("test value")} />
            <Square value="7" onClick={() => onClick("test value")} />
            <Square value="8" onClick={() => onClick("test value")} />
            <Square value="9" onClick={() => onClick("test value")} />
        </div>
    )
}

export default Board
