function getEnvVar(key: string): string {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return process.env[key];
}

export const envs = {
    googleAnalyticsId: getEnvVar('GOOGLE_ANALYTICS_ID'),
    payloadSecret: getEnvVar('PAYLOAD_SECRET'),
    databaseUrl: getEnvVar('DATABASE_URL'),
};
