const img = document.querySelector('.img');
const descriptionH4 = document.querySelector('.description h4');
const descriptionP = document.querySelector('.description p');
const profileImg = document.querySelector('.profile .profile_img');
const profileInfo = document.querySelector('.profile .profile_info');
const backgroundAdder = function (tag) {
    // tag.innerHTML='';
    const div = document.createElement('div');
    div.className = 'placeholder';
    tag.append(div);
}
const backgroundRemover = function (tag) {
    const div = tag.querySelector('div:last-of-type');
    div.remove();
}
const placeholder = (tag) => {
    const span = document.createElement('span');
    span.className = 'span';
    tag.append(span);
}
const placeholderRemover = (tag) => {
    tag.querySelector('span:last-of-type').remove();
}
const elemmentPasser = (AdderOrRemover) => {
    AdderOrRemover(img);
    AdderOrRemover(descriptionH4);
    AdderOrRemover(descriptionP);
    AdderOrRemover(profileImg);
    AdderOrRemover(profileInfo);
}

window.addEventListener('load', () => {
    elemmentPasser(backgroundAdder);
    elemmentPasser(placeholder);
})

setTimeout(() => {
    elemmentPasser(backgroundRemover);
    elemmentPasser(placeholderRemover)
}, 6000);

// here at 6th second it will celar so for 6th second it will not run