// Needed to run this command from the root folder (not src) to generate a runtime server http://localhost:1234
// `npx parcel index.html` 

import { User } from "./models/User";
const user = new User({name:'myName',age:20})
user.on("change", ()=>{
  console.log('change #1')
})
user.on("change", ()=>{
  console.log('change #2')

})
user.on("save", ()=>{
  console.log('save was triggered  ')

})
user.trigger('change')
user.trigger('save')
console.log(user)