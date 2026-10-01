const input=document.querySelector('#favchap');
const buttom=document.querySelector('buttom');
const list=document.querySelector('#list');

let chaptersArray=getChapterList() || []

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttom.addEventListener('click',function(){
    if(input.value!=''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value='';
        input.focus();

    }
});

function displayList(item){
    let li=document.createElement('li');
    let deleteButtom=document.createElement('buttom');
    li.textContent=item;
    deleteButtom.textContent='❌';
    deleteButtom.classList.add('delete');
    li.append(deleteButtom);
    list.append(li);
    deleteChapter(li.textContent);
    input.focus();

}

function setChapterList(){
    localStorage.setItem('myFavBOMList',JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItemetItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter=chapter.slice(0,chapter.length - 1);
    chaptersArray=chaptersArray.filter(item=>item!==chapter);
    setChapterList();
}

