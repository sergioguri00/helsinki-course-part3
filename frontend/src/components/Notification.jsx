const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={(message.includes('Added') || message.includes('Updated')) ? 'success' : 'error'}>
        {message}
        </div>
    )
}

export default Notification