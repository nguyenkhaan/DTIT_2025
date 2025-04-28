import navItem from "./Component/nav_item.js";
function item(content) 
{
    const element = document.createElement('div'); 
    element.innerHTML = navItem(content); 
    return element; 
}
export default function makeNavbar() 
{
    const navbarList = document.querySelector('.app__navbar-list'); 
    navbarList.append(item('Trang chủ'))
    navbarList.append(item('Thực hành'))
    navbarList.append(item('Tài liệu'))
    navbarList.append(item('Liên hệ'))
}