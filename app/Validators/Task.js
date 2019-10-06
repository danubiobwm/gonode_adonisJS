'use strict'

class Task {
  get rules () {
    return {
      title: 'required',
      due_data: 'date'
    }
  }
}

module.exports = Task
