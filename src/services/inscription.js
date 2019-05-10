import axios from 'axios';

export const isBrowser = () => typeof window !== "undefined"

export const getInscriptions = () =>
  isBrowser() && window.localStorage.getItem("inscriptions")
    ? JSON.parse(window.localStorage.getItem("inscriptions"))
    : []

const saveInscription = form => {
    var inscriptions = getInscriptions();
    inscriptions.push(form);
    window.localStorage.setItem("inscriptions", JSON.stringify(inscriptions))
    // send to strapi
    axios.post(`http://localhost:1337/inscriptions`, form)
      .then(res => {
        console.log('axios post: ', res);
        console.log('axios data: ', res.data);
      })
}

export const handleInscription = (form) => {
    return saveInscription(form)
}

