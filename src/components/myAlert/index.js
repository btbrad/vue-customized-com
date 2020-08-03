// <!--
//  * @Author: btbrad
//  * @Date: 2020-07-31 23:45:58
//  * @LastEditors: btbrad
//  * @LastEditTime: 2020-08-01 16:23:44
//  * @Description:
// -->
import MyAlert from './myAlert'

// let myAlert = new Alert().component
// console.log(1111, Alert)

export default {
  show: () => {
    new MyAlert().show()
  }
}
