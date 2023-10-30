export const getElementById = (productId) => {
    const url = `http://18.220.229.238/products/find/${productId}`;
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          return data;
        } else {
          throw new Error(`Product with id ${productId} not found`);
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };