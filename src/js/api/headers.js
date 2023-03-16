export const headers = (contentType) => {
  const token = localStorage.getItem('token');
  const headers = {};

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
