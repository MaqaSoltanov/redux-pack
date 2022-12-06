export default function deleteGoodFromCart(id)
{
    console.log("Delete action");
    return{
        type: "DELETE_GOOD_FROM_CART",
        payload:
        {
            id: id
        }
    }
}