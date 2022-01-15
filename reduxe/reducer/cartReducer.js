let defaultState = {
    selectedItems: { items: [], strMeal: "", image:"" },
  };

let CartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        let newState = { ...state }; 
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            strMeal: action.payload.strMeal,
            image: action.payload.image,
          };       
        console.log(newState, "👉");
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default CartReducer;