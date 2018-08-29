async function getUser(id) {
    return  { id: 1 };
}

class DataService{
     async getUser(id) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await response.json();
            return data;
        } catch (e) {
            throw new Error('Не удалось получить данные от сервера')
        }

        // let refetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(response => response.json());
    }
};

(async () => {
    let dataService = new DataService();

    try {
        let user = await dataService.getUser(1);
        console.log(user);
    } catch (e) {
        console.error(e);
    }
})();

