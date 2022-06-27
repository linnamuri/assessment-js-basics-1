    let passwordArray = "assignment1"

    if (passwordArray === "password"||passwordArray === "letmein")
        console.log("Not a valid password")
    else if (passwordArray.indexOf(" ")>=0)
        console.log("Password should not have spaces")
    else if(passwordArray.length>=10 && passwordArray.length<=20)
        {
            var foundAplhabet=0;
            var foundNumber=0;
            for (i=0;i<passwordArray.length;i++)
                {
                    if(foundAplhabet===0)
                        {
                            if((passwordArray.charCodeAt(i)>=65 && passwordArray.charCodeAt(i)<=90) || (passwordArray.charCodeAt(i)>=97 && passwordArray.charCodeAt(i)<=122))
                                {
                                    foundAplhabet=1;
                                }
                        }
                    if(isFinite(passwordArray[i])===true && foundNumber===0)
                        {
                            foundNumber=1;
                        }
                }
            if(foundAplhabet===1 && foundNumber===1)
            {
                console.log("Password is set successfully")
            }
            else
            {
                console.log("Password does not meet criteria")
            }
   
        }
    else 
        console.log("You failed to create a proper password. Password length should be between 10-20 characters.")


  