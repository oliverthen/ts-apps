import express from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
const app = express();
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({ keys: ['dsdasd']}));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log('Listening on port 3000');
})