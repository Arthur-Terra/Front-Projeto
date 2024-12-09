const BASE_URL = 'http://localhost:5287/api/Biblioteca'; // Certifique-se de que esse URL é correto

// Função para fazer GET
export const getRequest = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`GET request failed with status ${response.status}`);
    }

    const textData = await response.text();
    const data = JSON.parse(textData);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};








export const getRequestId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    if (!response.ok) {
      throw new Error(`GET request failed with status ${response.status}`);
    }

    const textData = await response.text();
    const data = JSON.parse(textData);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};








//item



// Função para fazer POST
export const postRequest = async (title, desc) => {
  try {
    let myBody = {
      id: id,
      title: title,
      description: desc,
    };

    const response = await fetch(BASE_URL/locar/{id}, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    });

    if (!response.ok) {
      throw new Error("Post request failed!");
    }

    const textData = await response.text(); // Corrigido
    return JSON.parse(textData);

  } catch (error) {
    console.error(error);
    throw error;
  }
};









// Função para fazer DELETE
export const deleteRequest = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    if (!response.ok) {
      throw new Error("Delete request failed!");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
