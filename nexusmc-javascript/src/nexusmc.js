const axios = require('axios');

class NexusMCDefault {
    constructor(apiBaseUrl = 'https://api.nexusmc.world') {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getUserByUuid(uuid) {
        const url = `${this.apiBaseUrl}/user/uuid/${uuid}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async getUserByUsername(username) {
        const url = `${this.apiBaseUrl}/user/username/${username}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async _getWithRateLimitNotification(url) {
        const response = await axios.get(url);
        if (response.status === 429) {
            console.log('You are being rate-limited. Please try again later.');
            const retryAfter = parseInt(response.headers['retry-after'] || 3, 10);
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            return this._getWithRateLimitNotification(url);
        }
        return response;
    }
}

class NexusMCRanks {
    constructor(apiBaseUrl = 'https://api.nexusmc.world') {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getPlayerRankByUsername(username) {
        const url = `${this.apiBaseUrl}/rank/username/${username}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async getPlayerRankByUuid(uuid) {
        const url = `${this.apiBaseUrl}/rank/uuid/${uuid}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async _getWithRateLimitNotification(url) {
        const response = await axios.get(url);
        if (response.status === 429) {
            console.log('You are being rate-limited. Please try again later.');
            const retryAfter = parseInt(response.headers['retry-after'] || 3, 10);
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            return this._getWithRateLimitNotification(url);
        }
        return response;
    }
}

class NexusMCFriends {
    constructor(apiBaseUrl = 'https://api.nexusmc.world') {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getUserFriendsByUuid(uuid) {
        const url = `${this.apiBaseUrl}/user/friends/uuid/${uuid}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async getUserFriendsByUsername(username) {
        const url = `${this.apiBaseUrl}/user/friends/username/${username}`;
        const response = await this._getWithRateLimitNotification(url);
        return response.data;
    }

    async _getWithRateLimitNotification(url) {
        const response = await axios.get(url);
        if (response.status === 429) {
            console.log('You are being rate-limited. Please try again later.');
            const retryAfter = parseInt(response.headers['retry-after'] || 3, 10);
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            return this._getWithRateLimitNotification(url);
        }
        return response;
    }
}

module.exports = {
    NexusMCDefault,
    NexusMCRanks,
    NexusMCFriends
};
