export const cwe = (cenv) => {
    const env = process.env.NODE_ENV || 'development';
    return cenv === env;
};
