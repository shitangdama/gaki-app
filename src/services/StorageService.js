class StorageService {
    constructor() {
        this.storage = window.localStorage;
        this.token_key = 'Token'
        this.user_key = "User"
    } 

    getToken() {
        return this.storage.getItem(this.token_key) || false;
    }

    setToken(token) {
        if (token) {
            this.storage.setItem(this.token_key, token);
        }
    }

    getUser() {
        const user = JSON.parse(this.storage.getItem(this.user_key))
        return user || false;
    }

    setUser(user) {
        if (user) {
            const user_string = JSON.stringify(user)
            this.storage.setItem(this.user_key, user_string);
        }
    }

    removeToken() {
        this.storage.removeItem(this.token_key);
    }

    removeAll() {
        this.storage.removeItem(this.token_key);
        this.storage.removeItem(this.user_key);
    }
}

export default new StorageService()