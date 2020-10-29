export default {
    loaf(words) {
        let breadBag = document.getElementById("breadbag");
        let slice = document.getElementById("slice");
        let toast = document.getElementById("toast");

        toast.textContent = words;

        breadBag.classList.add("show");
        slice.classList.add("fade-in");

        setTimeout(function() {
            setTimeout(function() {
                breadBag.classList.remove("show");
            }, 1000);
            slice.classList.remove("fade-in");
        }, 5000)
    }
}