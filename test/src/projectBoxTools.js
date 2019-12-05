export function timeBetweenTwoDatesInPercent() {
  let projectTime = startAndEndTimeProject();
  let start = projectTime.start;
  let end = projectTime.end;
  let today = new Date();
  if (today < start) {
    console.log('not start');
  }
  else if (today > end) {
    console.log('pass');
  }
  else if (today >= start && today <= end) {
    let percentageOfTime = Math.round(((today - start) / (end - start)) * 100);
    // console.log(percentageOfTime);
    return percentageOfTime;
  }
}

export function startAndEndTimeProject() {
  // need to get from planner
  return { start: new Date(2019, 8 - 1, 15), end: new Date(2019, 8 - 1, 24) };
}

export function strDateToShowInBox() {
  let date = startAndEndTimeProject();
  let strStart = date.start.getDate() + '/' + (date.start.getMonth() + 1) + '/' + date.start.getFullYear();
  let strEnd = date.end.getDate() + '/' + (date.end.getMonth() + 1) + '/' + date.end.getFullYear();
  return { strStart: strStart, strEnd: strEnd }
}

export function pointsDone() {
  // need to get from trello
  return 300;
}

export function getAllPoints() {
  // need to get from scoper or trello
  return 1000;
}

// Expects start date to be before end date
// start and end are Date objects
export function dateDifference(start, end) {

  // Copy date objects so don't modify originals
  let s = new Date(start.y, start.m, start.d);
  let e = new Date(end.y, end.m, end.d);
  console.log('s; ', s);
  console.log('e: ', e);
  // Set time to midday to avoid dalight saving and browser quirks
  s.setHours(12, 0, 0);
  e.setHours(12, 0, 0);

  // Get the difference in whole days
  let totalDays = Math.round((e - s) / 8.64e7);
  console.log('totalDays, ', totalDays);
  // Get the difference in whole weeks
  let wholeWeeks = totalDays / 7 | 0;
  console.log('wholeWeeks, ', wholeWeeks);
  // Estimate business days as number of whole weeks * 5
  let days = wholeWeeks * 5;
  console.log('days, ', days)
  // If not even number of weeks, calc remaining weekend days
  if (totalDays % 7) {
    s.setDate(s.getDate() + wholeWeeks * 7);

    while (s < e) {

      s.setDate(s.getDate() + 1);

      // If day isn't a Sunday or Saturday, add to business days
      if (s.getDay() !== 5 && s.getDay() !== 6) {
        ++days;
      }
    }
  }
  console.log('days, ', days);
  return days;
}

export function getProject() {
  let project1 = { type: 'agile' };
  let project2 = { type: 'TM' };
}