import axios from 'axios';

export const getUsers = (userParams: any) =>
  axios
    .get('https://api.github.com/users')
    .then((response) => {
      let responseData = undefined;
      if (response.status === 200) {
        responseData = response.data;
      }
      return responseData;
    })
    .catch((error) => {
      console.log('error');
    });

// export const getUser = (username) =>
//   axios
//     .get(`https://api.github.com/users/${username}`)
//     .then((response) => {
//       let responseData = undefined;
//       if (response.status === 200) {
//         responseData = response.data;
//       }
//       return responseData;
//     })
//     .catch((error) => {
//       console.log("error");
//     });
