

function urlBring() {
  
    const urlshort = localStorage.getItem("urlshort")
    window.location = `https://${urlshort}`
    
}

function onLoadBring() {
    urlBring()
}
