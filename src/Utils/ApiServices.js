export const ApiServices = {
  CREATE_CONTACT: async ({
    full_name,
    email_address,
    phone_number,
    address,
    notes,
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      full_name: full_name,
      email_address: email_address,
      phone_number: phone_number,
      address: address,
      notes: notes,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://127.0.0.1:9443/api/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //  console.log(result);
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  },
};
