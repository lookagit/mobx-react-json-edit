
const isDate = (date: string): boolean => {
  const  myDate = new Date(date);
  console.log("WE ARE DATE ", myDate, myDate instanceof Date, myDate.toString(), myDate.toString() !== 'Invalid Date');
  if(myDate instanceof Date && myDate.toString() !== 'Invalid Date'){
    return true;
  }
  return false;
}

export default isDate;