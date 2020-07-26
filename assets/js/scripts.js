(function () {
    const share = document.getElementById('share');
    const shareSocial = document.getElementById('share-social');
    
    share.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(share.classList.contains('active'));
        if(!share.classList.contains('active')) {
            shareSocial.classList.add('active');
            share.classList.add('active');
        }else{
            shareSocial.classList.remove('active');
            share.classList.remove('active');
        }
    })
})();