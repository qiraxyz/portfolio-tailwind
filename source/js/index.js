document.addEventListener('DOMContentLoaded', function () {
    const btnDownload = document.querySelector('.btn-download');
    const toast = document.querySelector('.toast');
    const btn = document.querySelector('.navbar button');
    const nav = document.querySelector('.navbar .w-full');
    const downloadBtn = document.querySelector('.navbar .download-cv');

    btn.addEventListener('click', function () {
        nav.classList.toggle('hidden');
    });

    btnDownload.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Show the toast notification
        toast.classList.add('show');

        // Hide the toast notification after 3 seconds
        setTimeout(function () {
            toast.classList.remove('show');
        }, 2400);
    });
});