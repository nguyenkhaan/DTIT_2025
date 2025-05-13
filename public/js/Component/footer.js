export default function footer(name, link) {
    return `
        <footer class="app__footer mt-6">
        <div class="grid wide" style="width: 1200px">
            <div class="app__footer__content">
                <p class = "roboto-font-light">&copy; 2025 ${name}. All Rights Reserved.</p>
                <div class="footer-links">
                    <a class = "roboto-font-light" href="#">Privacy Policy</a> | 
                    <a class = "roboto-font-light" href="${link}">Nguyen Kha An</a>
                </div>
            </div>
        </div>
    </footer>
    `
}