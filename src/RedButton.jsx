const RedButton = (props) => {
const handleClick = () => {
    alert('you clicked the red button')
    console.log(props.consoleMsg)
}

    return (
        <>
        <button className="red-button" onClick={handleClick}>{props.message}</button>
        </>
    )
}

export default RedButton