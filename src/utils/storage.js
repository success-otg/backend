/*class Storage {
  constructor() {
    this.age = ''
  }

  setAge(age) {
    this.age = age + new Date().getTime()
  }

  setItems(key, value) {
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
}*/

export default {
  // 过期时间，默认30天
  age: 60*3,
  /**
   * 设置过期时间
   * @param age
   * @returns {exports}
   */
  setAge: function(age){
    this.age = age;
    return this;
  },
  /**
   * 设置 localStorage
   * @param key
   * @param value
   */
  set: function(key, value){
    localStorage.removeItem(key);
    let isObject = value instanceof Object,
      _time = new Date().getTime(),
      _age = this.age;

    // 如果不是对象，新建一个对象把 value 存起来
    if(!isObject) {
      let b = value;
      value = {};
      value._value = b;
    }
    // 加入时间
    value._time = _time;
    // 过期时间
    value._age = _time + _age;
    // 是否一个对象
    value._isObject = isObject;
    localStorage.setItem(key, JSON.stringify(value));
    return this;
  },
  /**
   * 判断一个 localStorage 是否过期
   * @param key
   * @returns {boolean}
   */
  isExpire: function(key) {

    let isExpire = true,
      value = localStorage.getItem(key),
      now = new Date().getTime();

    if(value) {
      value = JSON.parse(value);
      // 当前时间是否大于过期时间
      isExpire = now > value._age;
    } else {
      // 没有值也是过期
    }
    return isExpire;
  },
  /**
   * 获取某个 localStorage 值
   * @param key
   * @returns {*}
   */
  get: function(key) {
    let isExpire = this.isExpire(key),
      value = null;
    if(!isExpire) {
      value = localStorage.getItem(key);
      value = JSON.parse(value);
      if(!value._isObject) {
        value = value._value;
      }
    }
    return value;
  }
};
