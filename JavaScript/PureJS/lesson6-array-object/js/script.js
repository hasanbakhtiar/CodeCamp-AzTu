// const phoneBrands = [];

// const phoneBrandsNew = new Array("Samsung","Xiaomi","OnePlus","Oppo");

// phoneBrands[0] = "Oppo";
// phoneBrands[1] = "OnePlus";
// phoneBrands[2] = "Xiaomi";
// phoneBrands[3] = "Samsung";


// phoneBrands[0]= null;
// phoneBrands[4] = "Zenphone";





















// console.log(phoneBrands.length);

// for(let i in phoneBrands){
//     console.log(phoneBrands[i] +" "+ i);

// }


// for(let i of phoneBrands){
//     console.log(i);
// }




// const phoneBrands = ["Samsung", "Xiaomi",["Redmi","Honor",["Blackview",[0,1,2,3,[true,false]]]], "OnePlus", "Oppo", "Zenphone"]


// console.log(phoneBrands);
// console.log(phoneBrands[2]);
// console.log(phoneBrands[2][2]);
// console.log(phoneBrands[2][2][1]);
// console.log(phoneBrands[2][2][1][4]);
// console.log(phoneBrands[2][2][1][4][0]);
// phoneBrands['myphone'] = 'LG';
// console.log(phoneBrands['myphone']);




// const phoneBrands = ["Samsung", "Xiaomi", "OnePlus", "Oppo", "Zenphone"];

// phoneBrands.pop()//sondan silir
// phoneBrands.shift()//evvelden silir

// phoneBrands.push()//sona elave edir
// phoneBrands.unshift()//evvele elave edir


// console.log(phoneBrands);








// console.log(phoneBrands.length);



const carData = [
    {
        brand: "BMW",
        model: "M3",
        year: 2017,
        newCar: true,
        price:30000,
        color: ['red', 'blue', 'black']
    },
    {
        brand: "Mercedes",
        model: "SLS",
        year: 2023,
        newCar: true,
        price:5000000,
        color: ['black', 'gold', 'silver']
    },
    {
        brand: "Audi",
        model: "Q7",
        year: 2001,
        newCar: false,
        color: ['red', 'blue', 'black']
    },
    {
        brand: "Audi",
        model: "A4",
        year: 2001,
        newCar: false,
        color: ['red', 'blue', 'black']
    }
]

const filterData = prompt();

for ( let count in carData){
    if (carData[count].brand == filterData) {
        // console.log("Car name:" + carData[count].brand+ " " + carData[count].model);
        console.log(`Car name:${carData[count].brand} ${carData[count].model}  | price: ${carData[count].price}$`);
    }
}

