const BASE = 'http://localhost:3000'

let getApartments = function(){
  //console.log ("in getApartments");
  return fetch(BASE + '/apartments')
  .then((res)=> {
    console.log("running fetch:");
    let json = res.json();
    console.log(json);
    return json;
  }).catch(err => {
    console.log(err);
    return err;
    });
  }

export {
  getApartments
  }
