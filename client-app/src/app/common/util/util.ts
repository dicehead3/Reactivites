export const combineDateAndTime = (date: Date, time: Date) => {
    // const timeString = time.getHours() + ':' + time.getMinutes() + ':00';
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const dateString = `${year}-${month}-${day}`;
    // return new Date(dateString + ' ' + timeString);

    return new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${time.getHours()}:${time.getMinutes()}:00`)
}