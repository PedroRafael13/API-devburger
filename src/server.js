import app from './app'
import 'dotenv/config'

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`O serve runnig at port 3001 ${port}!`))