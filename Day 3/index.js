const faveFoods = {
    breakfast: 'potato taquitos',
    lunch: 'yellow curry and vegetables',
    supper: 'salmon and ginger on rice'
}

const { breakfast, lunch, supper } = faveFoods;

const dailyNosh = document.getElementById("meals")

dailyNosh.innerHTML = `
        <h1>My favorite foods</h1>
        <div class="meal-container">
            <p>For breakfast, I like ${breakfast} from Whataburger.</p> 
            <img src="images/taquitos.png" alt="Whataburger taquitos wrapped in yellow paper" >
        </div>
        <div class="meal-container">
            <p>For lunch I really love ${lunch}!</p>
            <img src="images/curry.png" alt="yellow curry with vegetables and tofu" >
        </div>
        <div class="meal-container">
            <p>And for dinner, ${supper} is amazing.</p>
            <img src="images/salmon.png" alt="a bowl of yellow rice with a juicy piece of salmon on top">
        </div>
`