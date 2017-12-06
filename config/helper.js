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
  return { date, time }
}

const postJobItem = dataStore => {
  return new Promise((resolve, reject) => {
    firebase.database().ref('jobs').push(dataStore).then(() => resolve('บันทึกข้อมูลสำเร็จ')).catch(() => reject('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง'))
  })
}

export { getJobItems, getCurrentDate, postJobItem }
