class Storage {
  constructor() {
    this.age = ''
  }

  setAge(age) {
    this.age = age + new Date().getTime()
  }

  set(key, value) {
    let storage = {}
    let isObject = value instanceof Object, _time = new Date().getTime(), _age = this.age
    //非对象存储
    if (!isObject) {
      storage._value = value
    }
    storage._time = _time
    storage._age = _age
    storage._isObject = isObject
    localStorage.setItem(key, JSON.stringify(value))
    return this
  }

  get(key) {
    let isExpire = this.isExpire(key), storage = {}
    if (!isExpire){
      storage = JSON.parse(localStorage.getItem(key))
      if (!storage._isObject){
        storage = storage._value
      }
    }
    return storage
  }

  isExpire(key) {
    let isExpire = true, value = localStorage.getItem(key), now = new Date().getTime()
    if (value) {
      value = JSON.parse(value)
      isExpire = now > value._age
      if (isExpire){
        localStorage.removeItem(key)
      }
    }
    return isExpire
  }
}

export default Storage