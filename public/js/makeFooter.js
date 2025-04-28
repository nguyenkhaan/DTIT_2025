const body = document.querySelector('body')
import footer from "./Component/footer.js";
export default function makeFooter() 
{
    const _footer = document.createElement('footer'); 
    _footer.innerHTML = footer('Nguyen Kha An' , 'https://www.facebook.com/profile.php?id=61552231689913&locale=vi_VN'); 
    body.append(_footer); 
}