import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:4000/v1/login', (req, res, ctx) => {
    const { email, password } = req.body;

    if (email === 'samarth123@gmail.com' && password === 'Samarth@123') {
      return res(
        ctx.status(200),
        ctx.json({ data: { token: 'fake-token', name: 'username', email: 'user@gmail.com' } })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Bad Credentials' })
      );
    }
  }),
];
