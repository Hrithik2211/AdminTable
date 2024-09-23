import Chance from "chance"
// chance is a js lib that generates random names, phone no., addresses, etc
// here I created an instance from chance lib to use the methods from it
const chance = Chance()

export const fakeUserData = () => {
    // accessing the name member from chance library
    return chance.name({middle:true})
}