document.addEventListener('DOMContentLoaded', function(){
    const dialog = document.getElementById('main');
    const openButton = document.getElementById('openButton');
    const parrafo = document.getElementById('text');
    const closeButton = document.getElementById('closeButton');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("La geoloc no es compatiblew con este browser");
    }
    function showPosition(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(position);
        console.log(latitude, longitude);

        parrafo.textContent = `Esta es la ubic del user ${latitude}, ${longitude}`;

        const mapOptions = {
            center: {lat: latitude, lng: longitude},
            zoom: 15
        }

        const map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            map: map,
            title: 'Tu ubic actual'
        })
        dialog.showModal();
    }

    closeButton.onclick = ()=>{
        dialog.classList.add("close-animate");

        setTimeout(()=>{
            dialog.close();
            dialog.classList.remove("close-animate");

        },300)
    }
    openButton.onclick = ()=>{
        dialog.showModal()
    }
});