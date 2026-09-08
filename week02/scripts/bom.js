const input=document.querySelector('#favchap');
const buttom=document.querySelector('buttom');
const list=document.querySelector('#list');

buttom.addEventListener('click',function(){
    if(input.value!=''){
        const li= document.createElement('li');
        li.textContent=input.value;
        const deleteButtom=document.createElement('buttom');
        deleteButtom.textContent='X';
        deleteButtom.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteButtom);
        list.appendChild(li);
        input.value='';

    }
    input.focus();
});



