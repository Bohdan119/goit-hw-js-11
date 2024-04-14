
export function renderGallery(receivedObject) {
const neccesaryArray = receivedObject.hits;
return neccesaryArray
    .map(
    ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => `
        <li class="card">
            <div>
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" class="picture"/>
                </a>
            </div>
            <ul class='descriptions'>
                <li class='descriptions_item'>
                    <span>Likes</span>
                    <span>${likes}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Views</span>
                    <span>${views}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Comments</span>
                    <span>${comments}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Downloads</span>
                    <span>${downloads}</span>
                </li>
            </ul>
        </li>`
    )
    .join('');
}


