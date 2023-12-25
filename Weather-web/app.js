setInterval(() => {
    document.getElementById('time').innerText = new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'});
    document.getElementById('day').innerText = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    document.getElementById('date').innerText = new Date().toLocaleDateString('en-US', {dateStyle: 'medium'});
}, 1000);

const timeDate = document.querySelector('.time-date');
timeDate.innerText = `${new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'})} - ${new Date().toLocaleDateString('en-US', {weekday: 'long'})}  ${new Date().toLocaleDateString('en-US', {dateStyle: 'medium'})}`;