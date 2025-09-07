function getRestaurantStatus(openingHours) {
    if (!openingHours || typeof openingHours !== 'object') {
        return { status: 'closed', todaysHours: 'Hours not available' };
    }

    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[now.getDay()];
    const hoursToday = openingHours[today];

    let status = 'closed';
    let todaysHours = 'Closed today';

    if (hoursToday && hoursToday.length > 0) {
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        for (const slot of hoursToday) {
            if (slot && typeof slot.open === 'string' && typeof slot.close === 'string') {
                const openTime = parseInt(slot.open.split(':')[0]) * 60 + parseInt(slot.open.split(':')[1]);
                const closeTime = parseInt(slot.close.split(':')[0]) * 60 + parseInt(slot.close.split(':')[1]);

                if (currentTime >= openTime && currentTime < closeTime) {
                    if (closeTime - currentTime <= 30) {
                        status = 'closingSoon';
                    } else {
                        status = 'open';
                    }
                    break;
                }
            }
        }

        todaysHours = hoursToday
            .filter(slot => slot && slot.open && slot.close)
            .map(slot => `${formatTime(slot.open)} - ${formatTime(slot.close)}`).join(', ');

        if (!todaysHours) {
            todaysHours = 'Closed today';
        }
    }

    return { status, todaysHours };
}

function formatTime(timeString) {
    if (typeof timeString !== 'string' || !timeString.includes(':')) {
        return 'Invalid time';
    }
    const [hour, minute] = timeString.split(':');
    const hourInt = parseInt(hour);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
    return `${formattedHour}:${minute} ${ampm}`;
}
