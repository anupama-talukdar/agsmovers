// Topbar Active-Deactive function Start//

//let activelink = document.querySelectorAll('.leftgroup>ul>li>a')
//activelink.forEach(a => {//
    //a.addEventListener('click', function(){
        //activelink.forEach(anc => anc.classList.remove('active'));
        //this.classList.add('active');
    //});
//});
// Topbar Active-Deactive function Start//

//mega menu active on click section start//
function showhide(){
    let click=document.getElementById("mega-menu");
    if(click.style.display == 'none'){
        click.style.display = 'block';
    }
    else{
        click.style.display = 'none';
    }
}
//mega menu active on click section end//