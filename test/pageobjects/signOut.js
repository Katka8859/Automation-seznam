let signOut = {
    get btnUser(){return $('[data-dot="button-main-closed"]')},
    get btnLogout() { return $('[data-dot="logout"]')},
    get btnName(){return $('[name="username"]')},

    signOutprocess(){
        this.btnUser.click()
        this.btnLogout.click()

    }
  }

  
  
  module.exports = signOut