var say = "手の中にある";
var html = htmlEscape`<div>私はこのように:${say}</div>`;

function htmlEscape(literals: TemplateStringsArray, ...placeholders: string[]) {
    let result = "";

    for (let i = 0; i < literals.length; i++){
        result += literals[i];
        result += placeholders[i].replace(/&/g, '&amp;')
    }

    result += literals[literals.length - 1];
    return result;
}
