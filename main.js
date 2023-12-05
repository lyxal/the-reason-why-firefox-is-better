function doStuff() {
    setTimeout(() => {
        alert("Finished!")
    }, 1000);
}

function doStuffWithWorker() {
    let worker = new Worker('./worker.js');
    worker.onmessage = function (e) {
        console.log("STUFF!");
    }
    worker.postMessage("");

    setTimeout(() => {
        worker.terminate()
        alert("Finished!")
    }, 1000);
}