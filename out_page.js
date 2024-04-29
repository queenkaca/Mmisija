document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "happy_page.html";
});

const shrinkButton = document.getElementById('noBtn');

function shrinkButtonOnClick() {
    const currentWidth = shrinkButton.offsetWidth;
    const currentHeight = shrinkButton.offsetHeight;
    const newWidth = currentWidth * 0.9;
    const newHeight = currentHeight * 0.9;

    const currentFontSize = window.getComputedStyle(shrinkButton).fontSize;
    const currentPadding = window.getComputedStyle(shrinkButton).padding;
    const newFontSize = parseFloat(currentFontSize) * 0.9;
    const newPadding = parseFloat(currentPadding) * 0.9;

    shrinkButton.style.width = newWidth + 'px';
    shrinkButton.style.height = newHeight + 'px';
    shrinkButton.style.fontSize = newFontSize + 'px';
    shrinkButton.style.padding = newPadding + 'px';
}

shrinkButton.addEventListener('click', shrinkButtonOnClick);