import { useState } from "react";
import useFoods from "./usefoods";


const useFoodType=(name)=>{
    const {breakfasts,lunches,dinners}=useFoods();
    const[food,setFoods]=useState(breakfasts);
    const [isBreakfast, setIsBreakfast]=useState(true);
    const [isLunch, setIsLunch]=useState(false);
    const [isDinner, setIsDinner]=useState(false);

    if(name==='breakfast'){
        setIsBreakfast(true)
        setIsLunch(false)
        setIsDinner(false)
        setFoods(breakfasts)

    }
    else if(name==='lunch'){
        setIsBreakfast(false)
        setIsLunch(true)
        setIsDinner(false)
        setFoods(lunches)

    }
    else if(name==='dinner'){
        setIsBreakfast(false)
        setIsLunch(false)
        setIsDinner(true)
        setFoods(dinners)

    }
    return{
        isBreakfast,
        isLunch,
        isDinner,
        food
    }
}

export default useFoodType;