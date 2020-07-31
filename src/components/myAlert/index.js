import Alert from './myAlert'

let myAlert = new Alert()
console.log(1111, myAlert)

export default {
  show: () => {
    myAlert.show()
  }
}
