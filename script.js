window.addEventListener("load",()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change",(e)=>{
        let fileName = e.target.files[0].name;
        let filetype= e.target.value.split(".").pop();
        fileshow(fileName,filetype);
    })

    const fileshow=(fileName,file)=>{
        const showfileboxElem= document.createElement("div");
        showfileboxElem.classList.add("showfilebox");

        filewrapper.append(showfileboxElem);
    }
})