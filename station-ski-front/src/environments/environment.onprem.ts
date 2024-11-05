export const environment = {
  production: true,
  apiUrl: import.meta.env['NG_APP_BRANCH_NAME'],
  envVar: {
    /**
     * Add environment variables you want to retrieve from process
     * PORT:4200,
     * VAR_NAME: defaultValue
     */
    API_URL: '//',
  },
};
