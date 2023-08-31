/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {SUN, MON, TUE, WED, THU, FRI, SAT };

function isWeekend(day: DayOfWeek): boolean {
  if (day === DayOfWeek.SAT || day === DayOfWeek.SUN) {
    console.log("true");
    return true;
  };
      return false;
}

isWeekend(DayOfWeek.SUN)
export {};