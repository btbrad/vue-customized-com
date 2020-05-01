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

/**
 * 由一個組件，向下找到最近的指定的組件
 */
export const findComponentDownward = (context, componentName) => {
  let children = context.$children
  let com = null
  for (let i = 0; i < children.length; i++) {
    if (children[i].$options.name === componentName) {
      com = children[i]
      break
    }
    if (children[i].$children.length) {
      com = findComponentDownward(children[i], componentName)
    }
  }
  return com
}

/**
 * 向下找到所有指定的组件
 */
export const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((a, b) => {
    if (b.$options.name === componentName) {
      a.push(b)
    }
    const foundChildren = findComponentsDownward(b, componentName)
    return a.concat(foundChildren)
  }, [])
}

/**
 * 找到指定组件的兄弟组件
 */
export const findBrotherComponents = (context, componentName, exceptMe = true) => {
  let parent = context.$parent
  let children = parent.$children
  let bro = null
  const res = children.filter(child => {
    if (child.$options.name === componentName) {
      bro = child
    }
  })
  if (exceptMe) {
    let index = res.findIndex(item => item._uid === context._uid)
    res.splice(index, 1)
  }
  return bro
}

const typeOf = function (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}
/**
 * 深拷贝
 */
// deepCopy
export const deepCopy = function (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
