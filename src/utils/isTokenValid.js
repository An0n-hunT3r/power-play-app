const isTokenValid = (token) => {
  if (!token || !token.length) {
    return false;
  }

  const tokenParts = token.split(".");

  if (tokenParts.length !== 3) {
    return false;
  }

  const [, payload] = tokenParts;

  try {
    const decodedPayload = JSON.parse(atob(payload));
    const currentTimestamp = Math.floor(Date.now() / 1000);

    return decodedPayload.iat
      ? currentTimestamp - decodedPayload.iat < 3600
      : false;
  } catch (error) {
    return false;
  }
};

export default isTokenValid;
