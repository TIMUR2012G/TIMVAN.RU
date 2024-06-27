document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelector('button, a');
    let i = 0
    
    array.from(mediaFiles).forEach((file, index.html) => {
        file.onload = () => {
            i++
            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })
})