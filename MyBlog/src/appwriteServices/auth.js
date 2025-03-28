import config from "../config/config";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            if(userAccount) {
                return userAccount;
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async currentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;