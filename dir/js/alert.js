      function showNotification() {
        if ('Notification' in window) {
            var notification = new Notification('알림 제목', {
              body: '알림 내용',
            });
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function(permission) {
              if (permission === 'granted') {
                var notification = new Notification('알림 제목', {
                  body: '알림 내용',
                });
              }
            });
          }
        }