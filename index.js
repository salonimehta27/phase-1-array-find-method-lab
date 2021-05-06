const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 
  function superbowlWin(arrayOfObjects)
  {
   const win=arrayOfObjects.find(element=>element.result==='W');
   if(!!win)
   {
     return win.year;
   }
  }

// superbowlWin(record);

  //Another method for practice 
  

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ] 
// function superbowlWin(record)
// {
//   function winningyear(element)
//   {
//     return element.result==='W'     
//   }
//   const win =record.find(winningyear);
//   if(!!win)
//   {
//     return win.year;
//   }
// }

// function superbowlWin(record)
  // {
  //   for(const element of record)
  //   { 
  //      if(element.result==='W')
  //        {
  //            return (element.year);
  //        }
  //   }
  // }
  // record.find(superbowlWin);