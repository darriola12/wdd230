function setSubmissionTime() {
    var submissionTimeInput = document.querySelector("#date");
    submissionTimeInput.value = Date.now();
}
window.onload = setSubmissionTime;