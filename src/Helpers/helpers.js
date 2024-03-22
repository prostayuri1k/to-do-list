export const getToken = () => localStorage.getItem('token');
export const getBaseURL = () => process.env.REACT_APP_API_URL;