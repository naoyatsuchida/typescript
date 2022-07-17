function loadItem(id: number): Promise<{ outid: number }>{
    return new Promise((res) => {
        console.log('loading item', id);
        setTimeout(() => {
            res({ outid: id })
        }, 1000);
    });
}


let item1, item2;


loadItem(1).then((res) => {
    item1 = res;
    return loadItem(2);
}).then((res) => {
    item2 = res;
    console.log('done');
});


Promise.all([loadItem(1), loadItem(2)]).then((res) => {
    [item1, item2] = res;
    console.log('done');
})
