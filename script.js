 let list = [];
 let count = -1;

 function save() {
     count++;
     const container = document.querySelector('.container');
     let x = document.getElementById('text_uzer');
     if (list.includes(x.value)) {
         alert("УЖЕ БЫЛО!");
         count--;
     } else {
         localStorage.setItem("list", JSON.stringify(list));
         list = JSON.parse(localStorage.getItem("list"));

         list.push(x.value);
         const r = [...container.children];
         let newDiv = document.createElement("p");
         newDiv.className = 'notes';
         newDiv.textContent = list[count];
         newDiv.append();
         container.append(newDiv);
         x.value = "";
         return parse;


     }
 };


 function parse() {

     list = JSON.parse(localStorage.getItem("list"));
     for (let i = 0; i < list.length; i++) {
         const container = document.querySelector('.container');
         let x = document.getElementById('text_uzer');
         const r = [...container.children];
         let newDiv = document.createElement("p");
         newDiv.className = 'notes';
         newDiv.textContent = list[i];
         newDiv.append();
         container.append(newDiv);
         x.value = "";

     }
 };


 function del() {
     localStorage.clear();
     location.reload();
 };