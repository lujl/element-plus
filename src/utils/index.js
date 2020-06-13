export function toPropsKeys (arr, props) {
  return arr.map(item => {
    const newObj = cloneDeep(item)
    Object.keys(props).forEach(key => {
    	const propsKey = props[key]
      if ((key === 'label' || key === 'value') && newObj[propsKey]) {
        newObj[key] = newObj[propsKey]
      } else if (key === 'options' && newObj[propsKey]) {
        newObj[key] = toPropsKeys(newObj[propsKey], props)
      }
      delete newObj[propsKey]
    })
    return newObj
  })
}

// 移除对象keys
export function deleteObjKeys (obj, keys) {
  if (!isArray(keys)) return obj
  const objCopy = Object.assign({}, obj)
  keys.forEach(key => {
    delete objCopy[key]
  })
  return objCopy
}

// 深拷贝
export function cloneDeep (obj) {
  const newObj = {}
  for (const key in obj) {
    if (isArray(obj[key])) {
      newObj[key] = [...obj[key]]
    } else if (isObject(obj[key])) {
      newObj[key] = cloneDeep(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 合并对象
export function merge (target, ...arg) {
  return Object.assign.apply(target, arg)
}

export function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isArray (val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}
