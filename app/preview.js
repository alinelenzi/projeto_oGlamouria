let previewContainer = document.querySelector('.preview__produtos');
let previewBox = previewContainer.querySelectorAll('.preview__produtos__card');

document.querySelectorAll('.box__produtos__card').forEach(produto => {
    produto.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = produto.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
