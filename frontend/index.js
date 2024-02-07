async function userDetails(event){
    event.preventDefault();
    let name=event.target.name.value
    let email=event.target.email.value;
    let tel=event.target.tel.value;

    // console.log(name);
    // console.log(email);

    let obj={
        name:name,
        email:email,
        tel:tel
    }
    // console.log(obj,obj.name)

    try {
        let res = await axios.post('http://localhost:1234/add-appointment', obj);
        // console.log(res.data)
        showUser(res.data.newUserDetail)

    } catch (err) {
        console.log(err);
    }
}
   
async function getUser(){
    try{
        let res= await axios.get('http://localhost:1234/get-appointment')
        for(let i=0;i<res.data.allusers.length;i++){
            showUser(res.data.allusers[i])
        }
        // console.log(res.data)
    }
    catch(err){
        console.log(err)
    }
}
getUser()


function showUser(obj){
    let parentNode=document.getElementById('listItem');
    let li=document.createElement('li')
    li.textContent=`${obj.name}--${obj.email}--${obj.phone}`
    
    let deletebut=document.createElement('input');
    deletebut.type="button";
    deletebut.value="delete"

    let editbut=document.createElement('input');
    editbut.type='button';
    editbut.value='edit';

     li.appendChild(editbut)
    li.appendChild(deletebut);
    parentNode.appendChild(li)


    deletebut.addEventListener('click',deleteuser);
    

    async function deleteuser(){
        try{
            await axios.delete(`http://localhost:1234/delete-apointment/${obj.id}`)
            parentNode.removeChild(li)
        }
        catch(err){
            console.log(err)
        }
    }
}

