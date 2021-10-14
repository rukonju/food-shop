import {useState, useEffect} from 'react' 
const useFoods=()=>{
    const [foods, setFoods]=useState([]);
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[]);

    const breakfasts=foods?.filter(food=>food.catagory==="breakfast");
    const lunches=foods?.filter(food=>food.catagory==="lunch");
    const dinners=foods?.filter(food=>food.catagory==="dinner");
    const vegetable=foods?.filter(food=>food.catagory==="vegetable");
    return {
        breakfasts,
        lunches,
        dinners,
        vegetable
    }
}

export default useFoods;