const parseData = (datum) => {
    const splittedDate = datum.split("."); // ['21', '12', '2023']
    
    const objekt = {
      day: splittedDate[0],
      month: splittedDate[1],
      year: splittedDate[2],
    }
    return objekt
  }
  
  const datum = parseData('20.12.2023') 
  
  document.body.innerHTML+= `Day: ${datum.day}, `
  document.body.innerHTML+= `Month: ${datum.month}, `
  document.body.innerHTML+= `Year: ${datum.year}.`
