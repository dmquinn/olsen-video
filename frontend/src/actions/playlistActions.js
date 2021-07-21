import axios from "axios";
import {
	ADD_PLAYLIST_ITEM_REQUEST,
	ADD_PLAYLIST_ITEM_SUCCESS,
	ADD_PLAYLIST_ITEM_FAIL,
	LIST_PLAYLIST_ITEMS_REQUEST,
	LIST_PLAYLIST_ITEMS_SUCCESS,
	LIST_PLAYLIST_ITEMS_FAIL,
} from "../reducers/playlistReducer";

export const addPlaylistItem = (videoSrc) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_PLAYLIST_ITEM_REQUEST,
		});

		const { data } = await axios.post("http://localhost:5000/playlist/", {
			videoSrc,
		});

		dispatch({
			type: ADD_PLAYLIST_ITEM_SUCCESS,
			payload: data,
		});
		localStorage.setItem("playlistItem", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: ADD_PLAYLIST_ITEM_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listPlaylistItems = () => async (dispatch) => {
	try {
		dispatch({
			type: LIST_PLAYLIST_ITEMS_REQUEST,
		});

		const { data } = await axios.get("http://localhost:5000/playlist", {});
		console.log("got", data);

		dispatch({
			type: LIST_PLAYLIST_ITEMS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === "Not authorized, token failed") {
		}
		dispatch({
			type: LIST_PLAYLIST_ITEMS_FAIL,
			payload: message,
		});
	}
};