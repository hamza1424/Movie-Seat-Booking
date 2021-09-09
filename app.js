const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const counts = document.getElementById('count');
const total = document.getElementById('total');
const movie_select = document.getElementById('movie');

let ticket_price = +movie_select.value;

// Function for update total and count
function update_selected_counts()
{
const selected_seats = document.querySelectorAll('.row .seat.selected');

const selected_seats_counts = selected_seats.length;

count.innerText = selected_seats_counts;
total.innerText = selected_seats_counts*ticket_price;  
}

// Movie Select 

movie_select.addEventListener('change', e => {
    ticket_price = +e.target.value;
    update_selected_counts();
})
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied '))
    {
    e.target.classList.toggle('selected'); 

    update_selected_counts();
    }
})



