export function useFilterable({ loadItems, filters }, { $watch }) {
    const page = 1;
    // const filters = Vue.observable({});

    $watch(() => page, () => {
        console.log('page changed')
    })

    $watch(() => filters, () => {
        console.log('filter changed')
    })
    return { page, filters }


}