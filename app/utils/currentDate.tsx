export const getCurrentDate = () => {
    const currentDate = new Date().toLocaleString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day:  'numeric'
    })

    return currentDate;
}