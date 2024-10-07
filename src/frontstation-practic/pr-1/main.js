
function updateDateTime() {
   
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    document.querySelector('#datetime').innerHTML = currentDateTime;
    console.log(currentDateTime);

}
setInterval(updateDateTime,1000);
