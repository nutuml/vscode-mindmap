import * as mindmap from './mindmap';

function init() {

    // Delete existing mermaid outputs
    for (const possibleMermaidErrorOut of document.getElementsByTagName('svg')) {
        const parent = possibleMermaidErrorOut.parentElement;
        if (parent && parent.id.startsWith('nutmap')) {
            parent.remove();
        }
    }

    let i = 0;
    for (const mermaidContainer of document.getElementsByClassName('nutmap')) {
        const id = `nutmap-${Date.now()}-${i++}`;
        const source = mermaidContainer.textContent;

        const out = document.createElement('div');
        out.id = id;
        mermaidContainer.innerHTML = '';
        mermaidContainer.appendChild(out);
        console.log("mindmap-------",mindmap);
        out.innerHTML = mindmap.render(source);
    }
}


window.addEventListener('vscode.markdown.updateContent', init);

init();