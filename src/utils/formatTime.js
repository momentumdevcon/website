const timeInfo = (startTime, endTime) =>  {
    const output = new Date(startTime).toLocaleString(
        'en-US',
        { hour: 'numeric', minute: 'numeric', hour12: true })
    return output + ' -- ' + new Date(new Date(endTime).getTime() - new Date(startTime).getTime()).getMinutes() + ' min'
}

export default timeInfo