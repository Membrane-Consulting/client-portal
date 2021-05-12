//create formatted data

export const formatDate = (s:string) => {
  let d = new Date(s)
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  
  return(`${da}-${mo}-${ye}`)
}

