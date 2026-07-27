function getEnvVar(key: string): string {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return process.env[key];
}

// Optional: returns undefined instead of throwing. Used for SMTP, which the
// site must not depend on — a missing mail config disables notifications but
// still lets the form save, and keeps the Docker build (which only supplies
// placeholder envs) from failing.
function optionalEnvVar(key: string): string | undefined {
    return process.env[key] || undefined;
}

const smtpHost = optionalEnvVar('SMTP_HOST');
const smtpUser = optionalEnvVar('SMTP_USER');
const smtpPass = optionalEnvVar('SMTP_PASS');

export const envs = {
    googleAnalyticsId: getEnvVar('GOOGLE_ANALYTICS_ID'),
    payloadSecret: getEnvVar('PAYLOAD_SECRET'),
    databaseUrl: getEnvVar('DATABASE_URL'),
    uploadPrefix: getEnvVar('UPLOAD_PREFIX'),
    blobToken: getEnvVar('BLOB_READ_WRITE_TOKEN'),

    smtp: {
        host: smtpHost,
        port: Number(optionalEnvVar('SMTP_PORT') ?? 465),
        user: smtpUser,
        pass: smtpPass,
        fromAddress: optionalEnvVar('SMTP_FROM_ADDRESS') ?? smtpUser,
        fromName: optionalEnvVar('SMTP_FROM_NAME') ?? 'Alejandro Reyna',
        // Where contact-form notifications land.
        notifyTo: optionalEnvVar('CONTACT_NOTIFY_TO'),
        // All three are required for a working transport.
        isConfigured: Boolean(smtpHost && smtpUser && smtpPass),
    },
};
