function getRestaurantStatus(openingHours) {
    if (!openingHours || typeof openingHours !== 'object') {
        return { isOpen: false, todaysHours: 'Hours not available' };
    }

    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[now.getDay()];
    const hoursToday = openingHours[today];

    let isOpen = false;
    let todaysHours = 'Closed today';

    if (hoursToday && hoursToday.length > 0) {
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        for (const slot of hoursToday) {
            const openTime = parseInt(slot.open.split(':')[0]) * 60 + parseInt(slot.open.split(':')[1]);
            const closeTime = parseInt(slot.close.split(':')[0]) * 60 + parseInt(slot.close.split(':')[1]);

            if (currentTime >= openTime && currentTime < closeTime) {
                isOpen = true;
                break; 
            }
        }

        todaysHours = hoursToday.map(slot => `${formatTime(slot.open)} - ${formatTime(slot.close)}`).join(', ');
    }

    return { isOpen, todaysHours };
}

function formatTime(timeString) {
    const [hour, minute] = timeString.split(':');
    const hourInt = parseInt(hour);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
    return `${formattedHour}:${minute} ${ampm}`;
}
