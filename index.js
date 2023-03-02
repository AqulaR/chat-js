const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const router = require('./routes/main-router.js')

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`)
})

app.use(express.static(__dirname))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.use((err, req, res, next) => {
	logger.error(err.stack);
	res.status(500).send("Вы сломали сервер!");
});

app.use((err, req, res, next) => {
	if (error instanceof ForbiddenError) {
		return res.status(403).send({
			status: "forbidden",
			message: error.message,
		});
	}
});

let EmojiConvertor = require('emoji-js');

let emoji = new EmojiConvertor();

console.log(emoji.replace_colons("Hello :smile:"));

let users = 0

io.on('connection', (S) => {
  let user = false

  S.on('new message', (message) => {
    S.broadcast.emit('new message', {
      username: S.username,
      message
    })
  })

  S.on('add user', (username) => {
    if (user) return
    console.log(users);
    S.username = username
    ++users
    user = true
    S.emit('login', {
      users
    })

    

    S.broadcast.emit('user joined', {
      username: S.username,
      users
    })
  })

  S.on('typing', () => {
    S.broadcast.emit('typing', {
      username: S.username
    })
  })

  S.on('stop typing', () => {
    S.broadcast.emit('stop typing', {
      username: S.username
    })
  })

  S.on('disconnect', () => {
    if (user) {
      --users

      S.broadcast.emit('user left', {
        username: S.username,
        users
      })
    }
  })
})

app.use('/', router);

module.exports = app