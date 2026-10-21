const form = document.querySelector('form')
//this usecase will give u empty values
// const weight = parseIbt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height<0 || Number.isNaN(height)){
        results.innerHTML = `<h6>Please give a valid height ${height}</h6>`
        results.style.color = "#254454"
    }
    if(weight<0 || Number.isNaN(weight)){
        results.innerHTML = `<h6>Please give a valid weight ${weight}</h6>`
        
    }
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span><h5>${bmi}</h5></span>`
    results.style.color = "#254454"
})

