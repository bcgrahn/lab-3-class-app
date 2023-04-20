// Private
let list = []

// const storedList = window.localStorage.getItem('list')
// if (storedList) {
//   list = JSON.parse(storedList)
// }

// Public
module.exports = {
  add: function (student) {
    list.push(student)
    // window.localStorage.setItem('list', JSON.stringify(list))
  },
  edit: function (student, index) {
    list[index] = student
    // window.localStorage.setItem('list', JSON.stringify(list))
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
    // window.localStorage.setItem('list', JSON.stringify(list))
  },
  all: function () {
    return list
  }
}