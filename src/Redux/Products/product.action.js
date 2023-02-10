let Add = "Add";
let Sub = "Sub";

let addAction = () => {
    return {type : Add }
}

let subAction = () => {
    return { type: Sub}
}

export {addAction, subAction, Add, Sub}