const MESES = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11
};

/**
 * Parses a Spanish date string like "6 de junio de 2026 a las 7:30 p.m."
 * into a JavaScript Date object, assuming GMT-5 (Bogotá timezone).
 * 
 * @param {string} fechaStr 
 * @returns {Date|null}
 */
export function parseEventDate(fechaStr) {
  if (!fechaStr) return null;
  const normalized = fechaStr.toLowerCase().trim();
  
  // Matches "day de month de year a las hour:minute am/pm"
  const regex = /(\d+)\s+de\s+([a-zñáéíóú]+)\s+de\s+(\d+)\s+(?:a\s+las|las)\s+(\d+)[:.](\d+)\s*(a\.?\s*m\.?|p\.?\s*m\.?)/i;
  const match = normalized.match(regex);
  if (!match) return null;
  
  const day = parseInt(match[1], 10);
  const monthName = match[2];
  const year = parseInt(match[3], 10);
  let hours = parseInt(match[4], 10);
  const minutes = parseInt(match[5], 10);
  const ampm = match[6].replace(/\s/g, ""); // e.g. "a.m." or "p.m."
  
  const month = MESES[monthName] !== undefined ? MESES[monthName] : 5; // default to June (5)
  
  if (ampm.startsWith('p') && hours < 12) {
    hours += 12;
  } else if (ampm.startsWith('a') && hours === 12) {
    hours = 0;
  }
  
  // Bogotá is GMT-5. So UTC time is local time + 5 hours.
  const utcTime = Date.UTC(year, month, day, hours, minutes) + (5 * 60 * 60 * 1000);
  return new Date(utcTime);
}

/**
 * Gets date components (year, month, day) adjusted to Bogotá local timezone (GMT-5).
 * 
 * @param {Date} date 
 * @returns {{year: number, month: number, day: number, hours: number, minutes: number}}
 */
export function getBogotaDateComponents(date) {
  const bogotaOffsetMs = -5 * 60 * 60 * 1000;
  const bogotaTime = new Date(date.getTime() + bogotaOffsetMs);
  return {
    year: bogotaTime.getUTCFullYear(),
    month: bogotaTime.getUTCMonth(),
    day: bogotaTime.getUTCDate(),
    hours: bogotaTime.getUTCHours(),
    minutes: bogotaTime.getUTCMinutes()
  };
}

/**
 * Checks if the event date is strictly before the current day in Bogotá timezone (GMT-5).
 * E.g., if today is June 6, 2026, events on June 5 or earlier return true, while June 6 or later return false.
 * 
 * @param {Date} eventDate 
 * @param {Date} [currentDate] 
 * @returns {boolean}
 */
export function isBeforeTodayInBogota(eventDate, currentDate = new Date()) {
  if (!eventDate) return false;
  
  const eventComp = getBogotaDateComponents(eventDate);
  const currentComp = getBogotaDateComponents(currentDate);
  
  if (eventComp.year < currentComp.year) return true;
  if (eventComp.year > currentComp.year) return false;
  
  if (eventComp.month < currentComp.month) return true;
  if (eventComp.month > currentComp.month) return false;
  
  return eventComp.day < currentComp.day;
}

/**
 * Checks if the exact date and time of the event has already passed (GMT-5).
 * 
 * @param {Date} eventDate 
 * @param {Date} [currentDate] 
 * @returns {boolean}
 */
export function isPastEventInBogota(eventDate, currentDate = new Date()) {
  if (!eventDate) return false;
  return eventDate.getTime() < currentDate.getTime();
}
