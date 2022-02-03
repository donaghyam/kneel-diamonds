import { getOrders, getMetals } from "./database.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()

    const foundMetal = metals.find(metal => metal.id === order.metalId)

    const totalCost = foundMetal.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    const orderHTML = 
    `<li>
        Order #${order.id} cost ${costString}
    </li>`
    // <li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`

    return orderHTML
}

//Function creates html list of orders, then joins list into string
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    //Makes new array of html list
    const listItems = orders.map(buildOrderListItem)

    //Joins ^listItems into a string
    html += listItems.join("")
    html += "</ul>"

    return html
}
