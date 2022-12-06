export default function addGoodToCart(id)
{    
    console.log("AddGoodToCart");
    return{
        type: "ADD_GOOD_TO_CART",
        payload:
        {
            id: id
        }
    }
}