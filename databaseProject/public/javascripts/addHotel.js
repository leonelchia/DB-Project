async function addHotel(url) {
    let name = prompt("Provide the new hotel's name");
    let hotelLocation= prompt ("Provide the new hotel's location")
    await fetch(url, {
        method: 'POST',
        headers: {
           'Content-type': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            Location: hotelLocation,
        }),
    }). then((response) => {
        if(response.ok) {
             const resData = 'Create a new hotel';
             location.reload()
             return Promise.resolve(resData);
            }
            return Promise.reject(response)
    })
    .catch((response) => {
        alert (response.statusText);
    });;
}