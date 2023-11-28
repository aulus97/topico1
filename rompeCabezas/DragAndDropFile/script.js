document.addEventListener('DOMContentLoaded',function(){
    const dropArea = document.getElementById('dropArea');
    const fileInputBtn = document.getElementById('fileInputBtn');
    const fileInput = document.getElementById('fileInput')
    const fileList = document.getElementById('fileList')
    const saveButton = document.getElementById('saveButton')

    const filesArray = [];

    dropArea.addEventListener('dragover',handlerDragOver);
    dropArea.addEventListener('drop',handlerDrop);

    fileInputBtn.addEventListener('click',()=>fileInput.click());

    fileInput.addEventListener('change',handlerFileSelect);

    saveButton.addEventListener('click',saveFilesToLocalStorage);
});