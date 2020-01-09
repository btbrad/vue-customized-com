/**
 * 由一个组件，向上找到最近的组件
 */

export const findComponentUpward = (context, componentName) => {
  let parent = context.$parent
  // let name = parent.$options.name
  // while (parent && (!name || [componentName].indexOf(name) === -1)) {
  //   parent = parent.$parent
  //   if (parent) {
  //     name = parent.$options.name
  //   }
  // }
  let res = null
  while (parent) {
    if (parent.$options.name === componentName) {
      res = parent
      parent = false
    }
    parent = parent.$parent
  }
  return res
}

/**
 * 由一个组件，向上找到所有的制定组件
 * @param {*} context
 * @param {*} componentName
 */
export const findComponentsUpward = (context, componentName) => {
  let parents = []
  let parent = context.$parent
  // let res = []

  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
      return parents.concat(findComponentsUpward(parent, componentName))
    } else {
      return []
    }
  }
  // while (parent) {
  //   console.log(parent.$options.name)
  //   if (parent.$options.name === componentName) {
  //     res.push(parent)
  //   }
  //   parent = parent.$parent
  // }
  // return res
}
