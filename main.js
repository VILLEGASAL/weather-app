
function showPosition(position) {
  let lat = position.coords.latitude 
  let lon = position.coords.longitude 
  let apiKey = '00fa0f9e0d1da4a50d8227de70d25795'
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

  fetch(endpoint)
  .then((response) => {

    return response.json()
  })
  .then((data) => {
    let loc = document.querySelector('.loc')
    let weath = document.querySelector('.weath')

    loc.textContent = `Location : ${data.name.toUpperCase()}`
    weath.textContent = `Weather Description : ${data.weather[0].description.toUpperCase()}`

    loc.style.display = 'block'
    weath.style.display = 'block'
    
  })
}

document.querySelector('.btn').addEventListener('click', (event) => {

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        // Success function
        showPosition, 
        // Error function
        null, 
        // Options
        {
           enableHighAccuracy: true,
           timeout: 5000,
           maximumAge: 0
        });

        document.querySelector('.container .btn').style.display = 'none'
  } else { 
      alert("Geolocation is not supported by this browser.")
  }
})





