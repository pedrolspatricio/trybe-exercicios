function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createCalendar() {
    
    const mounthDays = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    
    mounthDays.appendChild(dayListItem);
    dayListItem.className = 'day';
    

    if (day === 24 || day === 31) {
        dayListItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
        dayListItem.className = 'day friday';
    } else if (day ===25) {
        dayListItem.className = 'day holiday friday';
    } else {
        dayListItem.className = 'day';
    }
    }

    }

createCalendar();
  
function createHolidayButton (buttonName) {
let holidayButton = document.createElement('button');
let buttonContainer = document.getElementsByClassName('buttons-container')[0];
holidayButton.id = 'btn-holiday';
holidayButton.innerHTML = buttonName;
buttonContainer.appendChild(holidayButton);

}

createHolidayButton('Feriados');

function colorHoliday () {
    let newColor = 'white';
    let normalColor = 'rgb(238,238,238)';
    

}

  