# chat-js на SocketIO
1) Библиотека используется для создания приложений, работающих в режиме реального времени, имеющих двунаправленный канал связи и основанных на событиях. 

2) Постоянное общение сервера и клиента

3) Устройство может в любой момент времени и передавать, и принимать информацию. Передача и приём ведутся устройством одновременно по двум физически разделённым каналам связи 

4)  Node.js, Deno, Java, Python, Golang, C++, Swift, Dart, .Net, Rust, Kotlin

5) - В отличие от WebSocket, Socket.IO позволяет транслировать сообщение всем подключенным клиентам.
   - Socket.IO поддерживает прокси-серверы и балансировщики из коробки.
   - Socket.IO может использовать технологии, отличные от WebSockets, если клиент не поддерживает WebSockets.
   - Если соединение WebSocket разрывается, оно не будет автоматически переподключаться.

6) Long Polling — это технология, которая позволяет получать информацию о новых событиях с помощью «длинных запросов». Сервер получает запрос, но отправляет ответ на него не сразу, а лишь тогда, когда произойдет какое-либо событие, либо истечет заданное время ожидания.

7) Broadcasting - обмен данными в режиме реального времени

8) Multiplexing - позволяет иметь несколько каналов соединений на одном базовом соединении

9) Пространства имен позволяют разделить логику вашего приложения по одному общему соединению. Это может быть полезно, например, если вы хотите создать канал администратора, к которому могут присоединиться только авторизованные пользователи.