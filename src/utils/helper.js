export function filterDatas(searchText, restaruntListFromState) {

    const filterData = restaruntListFromState.filter(restaurant => {
        return restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
    return filterData;

}