let email = {
    get adress(){return $('[placeholder="Komu…"]')},
    get subject() { return $('[placeholder="Předmět…"]')},
    get text(){return $('[placeholder="Text e-mailu…"]')},
    
    sendEmail(adress, subject, text) {
        this.adress.setValue(adress)
        this.subject.setValue(subject)
        this.text.setValue(text)
    }
  }

  module.exports = email