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
  let datetime = new Date()
  let date = datetime.toISOString('YYYY-MM-DD').substring(0, 10)
  let time = datetime.getHours() + ':' + datetime.getMinutes()
  console.log('date=', date)
  console.log('time=', time)
  return { date, time }
}

export { getJobItems, getCurrentDate }
