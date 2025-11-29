function getEnvVar(key: string): string {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return process.env[key];
}

export const envs = {
    githubUser: getEnvVar('GITHUB_USER'),
    linkedinUser: getEnvVar('LINKEDIN_USER'),
    contactEmail: getEnvVar('CONTACT_EMAIL'),
    googleAnalyticsId: getEnvVar('GOOGLE_ANALYTICS_ID'),
    calendlyUser: getEnvVar('CALENDLY_USER'),
};
