self.addEventListener('message', function (e) {
    while (true) {
        this.postMessage("");
    }
})