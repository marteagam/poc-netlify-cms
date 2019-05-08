export const isBrowser = () => typeof window !== "undefined"

export const getInscriptions = () =>
  isBrowser() && window.localStorage.getItem("inscriptions")
    ? JSON.parse(window.localStorage.getItem("inscriptions"))
    : []

const saveInscription = form => {
    var inscriptions = getInscriptions();
    inscriptions.push(form);
    window.localStorage.setItem("inscriptions", JSON.stringify(inscriptions))
}

export const handleInscription = (form) => {
    return saveInscription(form)
}