import Constants from './Constants'

function getBooksFromApiAsync(param, callback) {
  let url = `${Constants.searchAPI}?q=${param}&count=20`;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.books);
        callback(responseJson.books);
      })
      .catch((error) => {
        console.error(error);
      });
  }

export {
  getBooksFromApiAsync
};
