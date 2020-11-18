import UserController from '@controllers/UserController';

test('it should return a JSON with a message more the name', () => {
  const userController = new UserController();
  let req: any = { query: { name: 'jana' } };

  const res: any = { json: jest.fn() };

  userController.index(req, res);

  expect(req.query.name).toEqual('jana');
  expect(res.json).toHaveBeenCalledWith({ message: 'Hello jana' });
})