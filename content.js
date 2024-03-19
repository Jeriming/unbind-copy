var script = document.createElement("script");

script.innerHTML = `
(function() {
    $("#content_views").unbind("copy").bind("copy", function(e) {
        let text = window.getSelection().toString();
        if(text) {
            e.preventDefault();
            navigator.clipboard.writeText(text);
        }
    })
    
    const arr = document.querySelectorAll("#content_views pre,code");
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        item.style.userSelect = "text";
    }
})()
`;

document.body.appendChild(script)