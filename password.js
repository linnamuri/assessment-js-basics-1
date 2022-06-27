
let password = "assignment1"
if(password.length>=10)
{
    let passwordArray = password.split('')
    console.log(passwordArray)
for (i=0;i<passwordArray.length;i++)
{
    if(65<=passwordArray.charCodeAt[i]&&passwordArray.charCodeAt[i]<=122)
    {
console.log("found a character and looking for a number")
//passwordArray.isFinite[i]=== true
//console.log("Found a number")
console.log("pasword is set successfully")
    }
}
}
else
console.log("You failed to create a proper password. Atleast 10 characters are necessary to create a successful password.")


