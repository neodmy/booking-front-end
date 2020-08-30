const fetchData = async (requestBody, token) => {
  const request = {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) request.headers.Authorization = `Bearer ${token}`;

  const res = await fetch(process.env.REACT_APP_BOOKING_API_URL, request);
  if (res.status !== 200 && res.status !== 201) {
    throw new Error("Failed");
  }

  const { data } = await res.json();
  return data;
};

export default fetchData;
