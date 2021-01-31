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
         list.push(x.value);
         const r = [...container.children];
         let newDiv = document.createElement("p");
         newDiv.className = 'notes';
         newDiv.textContent = list[count];
         newDiv.append();
         container.append(newDiv);
         x.value = "";
         localStorage.setItem("list", JSON.stringify(list));

     }
 };

 function del() {
     localStorage.clear();
     location.reload();
 };

 document.addEventListener('DOMContentLoaded', parse);

 function parse() {
     if (localStorage.getItem("list") !== null) {
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
             count = -1 + (list.length);

         }
     }


 };