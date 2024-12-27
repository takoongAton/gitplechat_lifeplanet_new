/* local test */


/* 왼쪽 메뉴 테스트 */
let alSidebarList = document.querySelector(".al-sidebar-list");
let alSidebarSublist =  alSidebarList.querySelectorAll(".al-sidebar-sublist");
let asideMenus = document.querySelectorAll(".al-sidebar-list > li a.aside-list-link");
asideMenus.forEach(function(itemA){
    itemA.addEventListener("click", () => {
        
        let li = itemA.closest("li");
        let liSubList = li.querySelector(".al-sidebar-sublist");

        if(li.classList.contains("active")) { // active 활성화 확인

            if(liSubList && liSubList.classList.contains("open")) { // 서브메뉴가 있고 오픈되어있는 경우 닫기
                liSubList.classList.remove("open");
                closeAside();
            } else if(liSubList && !liSubList.classList.contains("open")) { // 서브메뉴가 있고 오픈되어있지 않은 경우 오픈
                liSubList.classList.add("open");
                openAside();
            }
        } else { // active가 활성화 되지 않은 메뉴 클릭시
            alSidebarSublist.forEach(function(alSidebarSublist_item){
                alSidebarSublist_item.classList.remove("open");
            })
            asideMenus.forEach(function(itemLi){
                itemLi.closest("li").classList.remove("active"); // 기존에 열려있는 메뉴 전부 닫기
            })
            closeAside();

            li.classList.add("active"); // 클릭된 메뉴 활성화
            if(liSubList) { // 활성화된 메뉴에 서브메뉴가 있으면 
                liSubList.classList.add("open");
                openAside();
            }
        }
    })
})

function closeAside(){
    document.querySelector(".container_wrap .page_wrap").style.paddingLeft = "";
}

function openAside(){
    document.querySelector(".container_wrap .page_wrap").style.paddingLeft = "calc(200px + 1em)";
}
/* // 왼쪽 메뉴 테스트 */