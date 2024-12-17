


let groceryStack = [];


function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        console.log("Top of stack:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}


function push(item) {
    groceryStack.push(item);
    console.log(`Item '${item}' added to the stack.`);
    console.log("Updated Stack:", groceryStack);
    peek(); 
}

function pop() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty. Nothing to pop.");
        return null;
    } else {
        const removedItem = groceryStack.pop();
        console.log(`Item '${removedItem}' removed from the stack.`);
        console.log("Updated Stack:", groceryStack);
        peek(); 
    }
}


for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item);
}

// Example pop operation
console.log("Performing a pop operation:");
pop();
