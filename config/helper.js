import firebase from './firebase'

const getJobItems = (email, password) => {
  return new Promise((resolve, reject) => {
    let jobItems = []

    firebase
      .database()
      .ref('jobs')
      .orderByChild('date')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          jobItems.push(childSnapshot.val()) // AESC
        })
      })
      .then(() => {
        resolve({ jobItems: jobItems.reverse(), isLoading: false })
      })
      .catch(error => {
        reject({ jobItems: [], isLoading: false })
      })
  })
}

const getCurrentDate = () => {
  let date = new Date()
  date = date.toISOString('YYYY-MM-DD').substring(0, 10)
  return date
}

export { getJobItems, getCurrentDate }
