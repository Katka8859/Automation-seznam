const saveScreenshot = (name) => {
    const getCorrectFormat = () => {
        let date = new Date();
        let year = date.getFullYear(); //vrati 2020
        let month = date.getMonth() + 1; // leden je 0, unor 1, atd., tak proto pridavame +1
        let day = date.getDay();
    
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let format = year + '-'+ month +'-' + day + '-' + hours + '-' + minutes + '-' + seconds + '-'
        return format 
    }
    browser.saveScreenshot('./' + getCorrectFormat() + name + '.png')
  }
  module.exports = saveScreenshot