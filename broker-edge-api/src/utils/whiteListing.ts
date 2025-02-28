/**
 * Escapes potentially dangerous characters by allowing only whitelisted characters.
 * Removes anything not explicitly allowed.
 * Always use parameterized queries alongside this.
 * @param value - The input string to be escaped.
 * @returns The escaped string containing only safe characters.
 */
export function escapeString(value: string): string {
    // Whitelist: letters, numbers, spaces, underscores, hyphens, periods, @, parentheses, and brackets
    const whitelistRegex = /[^a-zA-Z0-9 _.\-@()+?!\"\']/g;

    // Remove any character not in the whitelist
    let whitLlistedData = value.replace(whitelistRegex, '');

    // make sure qoutes are escaped to html entities
    whitLlistedData = whitLlistedData
        .replace(/'/g, '&#39;') // Replace all single quotes
        .replace(/"/g, '&quot;'); // Replace all double quotes

    return whitLlistedData;
}

/**
 * Sanitizes a value based on its type.
 * @param value - The value to sanitize.
 * @returns The sanitized value.
 */
function sanitizeValue(value: unknown): unknown {
    if (typeof value === 'string') {
        return escapeString(value.trim());
    }
    if (typeof value === 'number' && isFinite(value)) {
        return value; // Numbers are safe if finite
    }
    if (typeof value === 'boolean') {
        return value;
    }
    return undefined; // Disallow other types
}

/**
 * Whitelist and sanitize input fields before database insertion.
 * @template T - Type of the input object.
 * @param input - The incoming object to be sanitized.
 * @param allowedFields - An array of allowed field names.
 * @returns A sanitized and whitelisted object with only allowed fields.
 */
export function whitelistFields<T extends Record<string, unknown>>(
    input: T,
    allowedFields: (keyof T)[]
): Partial<T> {
    const sanitized: Partial<T> = {};

    for (const key of allowedFields) {
        const value = input[key];
        const sanitizedValue = sanitizeValue(value);

        if (sanitizedValue !== undefined) {
            sanitized[key] = sanitizedValue as T[keyof T]; // Safe assignment
        } else {
            console.warn(`Field "${String(key)}" has an invalid value and was ignored.`);
        }
    }

    return sanitized;
}

export function truncateString(str: string, maxLength: number = 255): string {
    if (str.length > maxLength) {
        return str.slice(0, maxLength);
    } else {
        return str;
    }
}