function saveUser(user){
    //load old data
    let data=readUsers();
    //merge
    data.push(user);
    //save
    let val=JSON.stringify(data);
    localStorage.setItem("users",val);
}

function readUsers(){
    let data = localStorage.getItem("users");
    if(!data){//not data
        return[];
}else{
    let list=JSON.parse(data);//parse
    //string back into object
    return list;

    }
}