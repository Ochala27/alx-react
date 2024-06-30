import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from './actionTypes';

// Action creator for setting loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

// Action creator for setting notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

// Action creator for fetching notifications
export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch('/notifications.json');
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

