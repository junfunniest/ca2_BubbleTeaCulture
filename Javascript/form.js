

const textarea = document.getElementById("message");
const wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", function () {
    const words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = `${words.length} words`;
});


const exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('hidden.bs.modal', function () {
    // Refresh the page
    location.reload();
});