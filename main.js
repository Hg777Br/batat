import { div, renderAt, h1, routerAt, h3, button, routerPath, input } from "/ot.js"


function HomePage(){
    const goTO = input({type: "text", placeholder: "Enter a URL"})
    goTO.onkeyup = (e) => {
        if(e.code == "Enter"){
            routerPath.goto(goTO.value)
        }
    }

    const goBtn = button("Go")
    goBtn.onclick = () => {
        routerPath.goto(goTO.value)
    }

    return div({id: "homepage", class: "page"},
        h1({class: "title"}, "Hello World"),
        h3("Built using Xtify!"),
        goTO, goBtn
    )
}

function NotFound(){
    const homeBtn = button("Return to HomePage.")
    homeBtn.onclick = () => {
        routerPath.goto("/")
    }

    return div({id: "notfound", class: "page"},
        h1({id: "title"}, "404"),
        h3("Page not found"),
        homeBtn
    )
}

routerAt({
    "/": HomePage,
    "/*": NotFound
})
