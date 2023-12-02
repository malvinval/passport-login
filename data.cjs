let users = [];

const storeUser = (data) => {
    users.push(data);
}

module.exports = {users, storeUser};