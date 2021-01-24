 let list = [];
 let count = -1;
 localStorage.setItem('items', JSON.stringify(list));

 function save() {
     count++;

     console.log(count);
     const container = document.querySelector('.container');
     let x = document.getElementById('text_uzer');
     if (list.includes(x.value)) {
         alert("УЖЕ БЫЛО!");
         console.log("-")
         count--;
     } else {

         list.push(x.value);
         console.log('+');
         const r = [...container.children];

         let newDiv = document.createElement("p");
         newDiv.className = 'notes';
         newDiv.textContent = list[count];
         newDiv.append();
         container.append(newDiv);
         x.value = "";


     }
 };