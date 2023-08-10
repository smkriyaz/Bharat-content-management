const contentForm = document.getElementById('contentForm');
const submittedContent = document.getElementById('submittedContent');

contentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contentForm.name.value;
    const description = contentForm.description.value;
    const image = contentForm.image.files[0];
    const video = contentForm.video.files[0];

    const contentContainer = createContentContainer(name, description, image, video);
    submittedContent.appendChild(contentContainer);

    contentForm.reset();
});

function createContentContainer(name, description, image, video) {
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-item';

    const contentHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        ${image ? `<img src="${URL.createObjectURL(image)}" alt="Uploaded Image">` : ''}
        ${video ? `
            <video controls>
                <source src="${URL.createObjectURL(video)}" type="video/mp4">
                Your browser does not support the video tag.
            </video>` : ''}
    `;

    contentContainer.innerHTML = contentHTML;
    return contentContainer;
}
