
var state = {
    
}

function handleCategory(state = {category : ""},action) {
    switch (action.type) {
        case "SelectedCategory":
            return Object.assign({},state,{category: action.value})
            
            break;
    
        default:
        return state
            break;
    }
}


export default handleCategory