export function searchImages(searchWord, myGallery) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: '43249627-6464a1b02c37cf8fbedd51288',
        q: searchWord, // Використовуємо значення змінної searchWord
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .catch(error => {
            throw new Error('Failed to fetch images');
        });
}
