const form = document.getElementById('fdate');
const day = form.elements['fday'];
const month = form.elements['fmonth'];
const year = form.elements['fyear'];
const dayError = document.getElementById('day-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')

const now = new Date()
const yearNow = now.getUTCFullYear()
const monthNow = now.getMonth()
const currDay = now.getUTCDate()

const showY = document.getElementById('digit-Y')
const showM = document.getElementById('digit-M')
const showD = document.getElementById('digit-D')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(day.value > 31 || day.value < 0){
        dayError.style.display = 'flex'
        day.style.border = '1px solid #CA6A6D';

    }
    else if(month.value > 12 || month.value < 0){
        monthError.style.display = 'flex'
        month.style.border = '1px solid #CA6A6D'

    }
    else if(year.value > yearNow){
        yearError.style.display = 'flex'
        year.style.border = '1px solid #CA6A6D'
    }
    else {
        let yearAge = yearNow - year.value;
        let monthAge;
        let daysAge

        if(monthNow >= month.value){
            monthAge = monthNow - month.value
            daysAge = currDay - day.value;
        } else {
            yearAge--;
            monthAge = 12 + monthNow - month.value
            daysAge = daysInMonth(monthNow, yearNow) - day.value + currDay;
        }

        showY.innerText = yearAge
        showM.innerText = monthAge
        showD.innerText = daysAge
    }

});

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}