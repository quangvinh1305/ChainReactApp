import PushNotification from 'react-native-push-notification';
import NotificationActions from '../Redux/NotificationRedux';
export default {
    // dispatch is passed in from App.js after creating store
    configure: (dispatch) => {
        // https://github.com/zo0r/react-native-push-notification
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: (token) => {
                if (__DEV__)
                    console.log('TOKEN:', token);
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification) => {
                dispatch(NotificationActions.addNotification(notification.message));
            },
            // ANDROID ONLY: (optional) GCM Sender ID.
            senderID: 'YOUR GCM SENDER ID',
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            // Should the initial notification be popped automatically
            // default: true
            // Leave this off unless you have good reason.
            popInitialNotification: true,
            /**
              * IOS ONLY: (optional) default: true
              * - Specified if permissions will requested or not,
              * - if not, you must call PushNotificationsHandler.requestPermissions() later
              * This example app shows how to best call requestPermissions() later.
              */
            requestPermissions: true
        });
    }
};
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map 
//# sourceMappingURL=PushConfig.js.map