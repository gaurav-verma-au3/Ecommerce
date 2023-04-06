export const API_ORIGIN_URL =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_BASE_URL}`
    : "http://localhost:3001/api";
