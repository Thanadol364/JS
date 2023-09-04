// topbar.js
function createTopBar() {
    const topBar = document.createElement('div');
    topBar.classList.add('top-bar');
    topBar.innerHTML = `
        <div class="left-content">
            <div class="logo">Mini-Project-Javascript</div>
        </div>
        <div class="right-content">
            <nav>
                <ul>
                    <li><a href="#">ธนดล โพธิ์ศรี</a></li>
                    <li><a href="#">6330300364</a></li>
                </ul>
            </nav>
        </div>
    `;
    return topBar;
}
