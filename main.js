var coursName=document.querySelector('#coursName');
var coursCategory=document.getElementById("coursCategory");
var coursPrice=document.getElementById("coursPrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapcity=document.getElementById("courseCapcity");
var addbtn=document.querySelector("#addbtn");
var data =document.getElementById("data");
var delbtn=document.querySelector("#delbtn");
var search=document.getElementById("search");


// console.log(coursName,coursCategory,coursPrice,courseDescription,courseCapcity);
var courses=[];

addbtn.onclick=function (e){
    e.preventDefault()
if(addbtn.value='Add Course')
addbtn1();
else
updateCourse();
showData();
clearData();
  // create data
}
function addbtn1(){ var course={
  coursName:coursName.value,
  coursCategory:coursCategory.value,
  coursPrice:coursPrice.value,
  courseDescription:courseDescription.value,
  courseCapcity:courseCapcity.value
}
// console.log(course);
courses.push(course);
console.log(courses);
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Added successfully',
  showConfirmButton: false,
  timer: 1500
})
showData();
clearData();}
// clear data
function clearData(){
    coursName.value="";
    coursCategory.value="";
    coursPrice.value="";
courseDescription.value="";
courseCapcity.value="";
}

// show data
function showData(){
    var result="";
    for(var i=0;i<courses.length;i++)
    {
        result+=`
        <tr>
            <td>${i+1}</td>
            <td>${courses[i].coursName}</td>
            <td>${courses[i].coursCategory}</td>
            <td>${courses[i].coursPrice}</td>
            <td>${courses[i].courseDescription}</td>
            <td>${courses[i].courseCapcity}</td>
            <td><button class="btn btn-danger" onclick=deletCourse(${i})>delete</button></td>
            <td><button class="btn btn-info" onclick=getCourse(${i})>update</button></td>
        </tr>
        `
    }
    data.innerHTML=result;
}
function deletCourse(i){
  // console.log(i);
 

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        courses.splice(i,1)
        showData();
      Swal.fire(
        'Deleted!',
        'course has been deleted.',
        'success'
      )
    }
  })
}

delbtn.onclick=function dellAll(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            courses=[];
            data.innerHTML="";
            Swal.fire(
            'Deleted!',
            'All course has been deleted.',
            'success'
          )
        }
      })
}

// search   
search.onkeyup=function(){
    var sresult="";
    for(var i=0;i<courses.length;i++)
    {
        if(courses[i].coursName.toLowerCase().includes(search.value.toLowerCase()))
        {
          sresult += `
          <tr>
            <td>${i+1}</td>
            <td>${courses[i].coursName}</td>
            <td>${courses[i].coursCategory}</td>
            <td>${courses[i].coursPrice}</td>
            <td>${courses[i].courseDescription}</td>
            <td>${courses[i].courseCapcity}</td>
            <td><button class="btn btn-danger" onclick=deletCourse(${i})>delete</button></td>
            <td><button class="btn btn-info" >update</button></td>
          </tr>
        `;
        
        }
    }
    data.innerHTML=sresult;
}



function getCourse(i){
  var courseNew=courses[i]; 
  console.log(addbtn.value);
  coursName.value=courseNew.coursName;
  coursCategory.value=courseNew.coursCategory;
  coursPrice.value=courseNew.coursPrice;
  courseDescription.value=courseNew.courseDescription;
  courseCapcity.value=courseNew.courseCapcity;
  addbtn.value='Update course';
  console.log(addbtn.value);
 
}
