import { api } from './axios';

const adminHeaders = {
	Authorization: localStorage.getItem('adminToken'),
};

const nurseHeaders = {
	Authorization: localStorage.getItem('nurseToken'),
};

export const CreateChat = async (chatData, user) => {
	try {
		const headers = user === 'admin' ? adminHeaders : nurseHeaders;

		const res = await api.post('/chat/create', chatData, { headers });

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetChatsByUserId = async (userId, user) => {
	try {
		const headers = user === 'admin' ? adminHeaders : nurseHeaders;

		const res = await api.get(`/chat?userId=${userId}`, { headers });

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetChatById = async (chatId, user) => {
	try {
		const headers = user === 'admin' ? adminHeaders : nurseHeaders;

		const res = await api.get(`/chat/${chatId}`, { headers });

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const SearchUsers = async (keyword, searchingUserId, user) => {
	try {
		const headers = user === 'admin' ? adminHeaders : nurseHeaders;

		const res = await api.get(
			`/chat/users/search?searchingUser=${searchingUserId}&keyword=${keyword}`,
			{ headers }
		);

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const DeleteChat = async (chatId, userId, user) => {
	try {
		const headers = user === 'admin' ? adminHeaders : nurseHeaders;

		const res = await api.delete(
			`/message/chat/delete?chatId=${chatId}&userId=${userId}`,
			{ headers }
		);

		return res;
	} catch (error) {
		return { error: error.message };
	}
};
