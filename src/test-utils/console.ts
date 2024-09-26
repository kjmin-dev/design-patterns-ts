export const consoleWithTime = (text: string) =>
    console.log(`[${new Date().toISOString()}]: ${text}`);
