 
    const container = document.querySelector('.container');
	
	const movies = document.querySelector('#movie');
	
	const seats = document.querySelectorAll('.row .seat:not(.occupied)');
	
	let seatCount = document.querySelector('#count');
	
	let total = document.querySelector('#total');

    let moviePrice = +movies.value;
    
   
   
   // Populate The UI interface
   popuplateUI();
 
   // Update Seat and Movie Price
   function updateCountTotal(){
	   let getSelectedSeats = document.querySelectorAll('.row .seat.selected');
	   seatCount.innerText = getSelectedSeats.length;
	   total.innerText = getSelectedSeats.length * moviePrice;
	   let seatIndex =  [...getSelectedSeats].map((item)=>{
		   return [...seats].indexOf(item);
	   })
	   localStorage.setItem('selectedSeat', JSON.stringify(seatIndex));	   
   }

   // Choose movie 
    movies.addEventListener('change', (e)=>{
		  moviePrice = +e.target.value;
		  //console.log(e.target.selectedIndex, e.target.value);
		  updateCountTotal();
	});

   // Select movie seat
   container.addEventListener('click', (e)=>{
	    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
			e.target.classList.toggle('selected');
		}
		updateCountTotal();
   });
      
   // Initialize App
     function popuplateUI(){
	   let getLocalStorage = JSON.parse(localStorage.getItem('selectedSeat'));
       if(getLocalStorage !== null && getLocalStorage.length > 0){
		    seats.forEach((item, index)=>{
				if(getLocalStorage.indexOf(index) > -1){
					item.classList.add('selected');
				}
			})
	   }
      updateCountTotal();
    }   
	  
	  
	  
   
  