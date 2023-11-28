document.addEventListener('DOMContentLoaded',function(){
    const puzzleContainer = document.getElementById('puzzle-container');
    const successMessage = document.getElementById('success-message');

    let cards = generateCards();
    renderPuzzle();

    function shuffle(array){
        for(let i = array.lenght-1;i>0;i--){
            const j = Math.floor(Math.random()*i+1);
            [array[i], array[j]]=[array[j],array[i]];
        }
        return array;
    }

    function generateCards(){
        const images = ['1','2','3','4','5','6','7','8','9'];
        return shuffle(images);
    }

    function renderPuzzle(){
        puzzleContainer.innerHTML = '';

        cards.forEach((card,index) => {
            const puzzleCard = document.createElement('div');
            puzzleCard.classList.add('puzzle-card');
            puzzleCard.draggable = true;
            puzzleCard.dataset.card = card;
            puzzleCard.textContent = card;

            puzzleCard.addEventListener('dragstart',handlerDragStart);
            puzzleCard.addEventListener('dragover',handlerDragOver);
            puzzleCard.addEventListener('drop',handlerDrop);

            puzzleContainer.appendChild(puzzleCard);
        })

        function handlerDragStart(event){
            event.dataTransfer.setData('text/plain',event.target.dataset.card);
        }
        
        function handlerDragOver(event){
            event.preventDefault();
        }
        
        function handlerDrop(event){
            event.preventDefault();

            const draggedCard = event.dataTransfer.getData('text/plain');
            const targetCard = event.target.dataset.card;

            const draggedIndex = cards.indexOf(draggedCard);
            const targetIndex = cards.indexOf(targetCard);

            [cards[draggedIndex],cards[targetIndex]] = [cards[targetIndex],cards[draggedIndex]];
            
            renderPuzzle();
            
            if(cards.join(''==='123456789')){
                successMessage.style.display='block';

                setTimeout(()=>{
                    successMessage.style.display='none';
                    cards = generateCards();
                    renderPuzzle();
                },60000);
            }
        }
    }
});