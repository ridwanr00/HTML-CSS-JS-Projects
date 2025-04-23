function show(id) {
    const style = document.getElementById(id)
    if (style.style.maxHeight == '0px') {
        style.setAttribute("style", "overflow: auto; max-height: 40px;")
    } else {
        style.setAttribute("style", "overflow: hidden; max-height: 0px;")
    }
}