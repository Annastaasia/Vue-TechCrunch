export function getPlanets({ page = 1, search } = {}) {
    const url = new URL("https://techcrunch.com/wp-json/wp/v2/posts");
    Object.entries({
        page,
        search,
    }).forEach(([key, value]) => {
        if (value !== null) {
            url.searchParams.append(key, value);
        }
    });
    return fetch(url).then((r) => r.json());
}

// export function getCategories({ page = 1, filters = {} } = {}) {
//     const url = new URL("https://techcrunch.com/wp-json/wp/v2/categories");
//     return fetch(url).then((r) => r.json());
// }