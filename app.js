const img = document.querySelector('.img');
const descriptionH4 = document.querySelector('.description h4');
const descriptionP = document.querySelector('.description p');
const profileImg = document.querySelector('.profile .profile_img');
const profileB = document.querySelector('.profile b');
const profileSpan = document.querySelector('.profile span');
let timer;
const backgroundAdder = function (tag)
{
    // tag.innerHTML='';
    const div = document.createElement('div');
    div.className= 'placeholder';
    tag.append(div);
}
const backgroundRemover = function (tag)
{
    const div= tag.querySelector('div:last-of-type');
    div.remove();
}

const elemmentPasser = (AdderOrRemover) =>
{
    AdderOrRemover(img);
    AdderOrRemover(descriptionH4);
    AdderOrRemover(descriptionP);
    AdderOrRemover(profileImg);
    AdderOrRemover(profileB);
    AdderOrRemover(profileSpan);
}

window.addEventListener('load',() =>
{
    elemmentPasser(backgroundAdder);
    const span = document.createElement('span');
    span.className='span';
    img.append(span);
    timer = setInterval(() => {
        // span.style.transform='translateX(350px)';
        // span.style.transform='translateX(0)';
   },1000);
})

setTimeout(() => {
    clearInterval(timer);
    elemmentPasser(backgroundRemover);
}, 6000);

// here at 6th second it will celar so for 6th second it will not run