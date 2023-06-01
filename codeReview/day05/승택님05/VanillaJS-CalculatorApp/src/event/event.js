export function isSame(newState, oldState) {
    return newState.toString() === oldState.toString();
}

export function isDefault(value) {
    return value === undefined || value === "" || parseInt(value) === 0;
}

export function isWrite(data) {
    if(data === "00") {
        return "--";
    } else {
        return data;
    }
}

export function isValidDate({ day, month, year }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const twoDigitYear = Number(String(currentYear).slice(-2));

    if (year > twoDigitYear) {
        return false;
    }

    if (month > 12) {
        return false;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const maxDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > maxDays[month - 1]) {
        return false;
    }

    if (year === twoDigitYear && month > twoDigitYear) {
        return false;
    }

    return !(year === twoDigitYear && month === currentMonth && day > currentDay);
}


export function calculateDateDifference({ day, month, year }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let yearDiff = currentYear - year;
    let monthDiff = currentMonth - month;
    let dayDiff = currentDay - day;

    if (dayDiff < 0) {
        monthDiff--;
        const prevMonthDays = new Date(year, month - 1, 0).getDate();
        dayDiff += prevMonthDays;
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    // 2자리 수로 년도 표현
    const twoDigitYearDiff = yearDiff % 100;

    return { day: dayDiff, month: monthDiff, year: twoDigitYearDiff };
}