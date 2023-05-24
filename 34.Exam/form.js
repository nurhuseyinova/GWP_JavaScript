let API_URL=`http://localhost:8000/data`;
let form=document.querySelector("form");
let input =document.querySelectorAll("input")
let editStatus=true
let id=new URLSearchParams(window.location.search).get("id")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        title:input[0].value,
        price:input[1].value,
        photo:`./assets/image/${input[2].value.split("\\")[2]}`
    }
    if(input[0].value&&input[1].value&&input[2].value){
        if(!editStatus){
        axios.post(API_URL,obj)
        }else{
            axios.patch(`${API_URL}/${id}`,obj)
            editStatus=false

        }
        window.location="index.html"
    }


})

 async function editBtn(id){
    let res= await axios(`${API_URL}/${id}`,)
    let data=await res.data
    editStatus=true
    input[0].value=data.title;
    input[1].value=data.price;
    // input[2].value=data.photo;



}
editBtn()




