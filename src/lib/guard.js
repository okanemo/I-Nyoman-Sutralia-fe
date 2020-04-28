const guard = function(to, from, next) {
    // check for valid auth token
    let token = localStorage.getItem('token')
    if (!token && to.name !=='login') next({ name: 'login' })
    else next()
  };

  export default {
      guard
  }