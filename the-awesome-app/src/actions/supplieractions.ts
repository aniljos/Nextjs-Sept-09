'use server'

export async function checkForUniqueId(id: number){

    console.log("checkForUniqueId", id);
    //logic
    if(id < 100){
        return {status: 1, message: "The id is not available"}
    }
    else{
        return {status: 0, message: "The id is available"}
    }
}

export async function saveForm(prevState: any, formData: FormData){

    //read the form values
    const data = {
        id: formData.get("sid"),
        name: formData.get("name"),
        person: formData.get("person"),
        email: formData.get("email"),
        location: formData.get("location"),
    }

    if(!data.id ){
        return {status:1, message: "The Id is required."};
    }
    console.log("saveForm", data);
     //validates

    return {status:0, message: "Saved Form"};
    
   


}