export default function footer(name , link) {
    return `
        <footer class="app__footer">
        <div class="grid wide" style="width: 1200px">
            <div class="app__footer__content">
                <p>&copy; 2025 ${name}. All Rights Reserved.</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a> | 
                    <a href="${link}">Nguyen Kha An</a>
                </div>
            </div>
        </div>
    </footer>
    `
}