
const style = {
    background: 'lightblue',
    border: '3px solid darkblue',
    fontSize: '45px',
    fontWeight: '1000',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ value, onClick }) => {
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
