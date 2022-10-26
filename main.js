let form = document.querySelector('.form')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch(' http://localhost:3000/users' , {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            Name: e.target[0].value,
            FulName: e.target[1].value,
        })
    }).then((res) => alert('succsess', res))
    .catch((err) => console.log(err))
})