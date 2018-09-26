const BASE = 'http://localhost:3000';

let getApartments = function(){
  console.log("in getApartments");
  return fetch(BASE + '/apartments')
  .then((res) => {
    console.log("running fetch all apartments");
    let json = res.json();
    console.log(json);
    return json;
  }).catch(err => {
    console.log(err);
    return err;
  });
}

let getApartment = function(id){
  console.log("in getApartment");
  return fetch(BASE + '/apartments/' + id)
  .then((res) => {
    console.log("running fetch 1 apartment");
    let json = res.json();
    console.log(json);
    return json;
  }).catch(err => {
    console.log(err);
    return err;
  });
}

let createApartment = function(apartment){
  console.log("creating apartment", apartment);
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apartment),
    headers: {
      'Content-Type':'application/json',
    },
    method: 'POST'
  })
  .then((res) => {
    let json = res.json();
    return json;
  }).catch(err => {
    alert(err);
    return err;
  })
}

let editApartment = function(apartment){
  console.log("editing apartment", apartment, apartment.id);
  return fetch(BASE + '/apartments/' + apartment.id, {
    body: JSON.stringify(apartment),
    headers: {
      'Content-Type':'application/json',
    },
    method: 'PATCH'
  })
  .then((res) => {
    let json = res.json();
    return json;
  }).catch(err => {
    alert(err);
    return err;
  })
}

let deleteApartment = function(id){
  console.log("delete apartment by id...", id);
  return fetch(BASE + '/apartments/' + id, {
    headers: {
      'Content-Type':'application/json',
    },
    method: 'DELETE'
  })
}

let getUserApartments = function(user_id){
  console.log("in getUserApartments");
  return fetch(BASE + '/user/' + user_id +'/apartments')
  .then((res) => {
    console.log("running fetch user apartments");
    let json = res.json();
    console.log(json);
    return json;
  }).catch(err => {
    console.log(err);
    return err;
  });
}

let getUser = function(id){
  console.log("getting user info...");
  return fetch(BASE + '/users/' + id)
  .then((res) => {
    console.log("running fetch user info");
    console.log(res);
    let json = res.json();
    console.log(json);
    return json;
  }).catch(err => {
    console.log("error", err);
    return err;
  });
}



export {
  getApartments,
  getApartment,
  createApartment,
  editApartment,
  deleteApartment,
  getUserApartments,
  getUser
}
