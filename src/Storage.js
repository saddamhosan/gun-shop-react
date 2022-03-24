const addToStorage=({id})=>{
    let shoppingCart=getToStorage()
    
     const quantity=shoppingCart[id]
     if(quantity){
         shoppingCart[id]= quantity + 1
     }else{
         shoppingCart[id]= 1
     }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getToStorage=()=>{
let shoppingCart = {};
    const getStorageItem = localStorage.getItem("shopping-cart");
    if (getStorageItem) {
    shoppingCart = JSON.parse(getStorageItem);
    }
    return shoppingCart
}
export { addToStorage, getToStorage }

