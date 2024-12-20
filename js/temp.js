


/* 왼쪽 메뉴 테스트 */
let asideMenus = document.querySelectorAll(".al-sidebar-list > li a");
asideMenus.forEach(function(itemA){
    itemA.addEventListener("click", () => {
        
        let li = itemA.closest("li");

        if(li.classList.contains("active")) {
            asideMenus.forEach(function(itemLi){
                itemLi.closest("li").classList.remove("active");
                document.querySelector(".container_wrap .page_wrap").style.paddingLeft = "";
            })
        } else {
            asideMenus.forEach(function(itemLi){
                itemLi.closest("li").classList.remove("active");
            })
            li.classList.add("active");
            document.querySelector(".container_wrap .page_wrap").style.paddingLeft = "calc(200px + 1em)";
        }

        
        // asideMenus.closest("li").classList.remove("active")
        
        
        
        // item.closest("li").classList.add("active");
    })
})
/* // 왼쪽 메뉴 테스트 */