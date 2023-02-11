import { useRequest } from 'src/service';

describe('API test for retrieving posts', () => {
  it('should check if the API works', async () => {
    const { getPosts } = useRequest();
    getPosts().then((value) => {
      expect(Array.isArray(value)).to.be.true;
    });
  });
  it('Get Information', async () => {
    const { getPost } = useRequest();
    getPost('1').then((value) => {
      expect(value.title).toEqual(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      );
    });
  });
});

describe('API test for post posts', () => {
  it('should check if the API Posts', async () => {
    const { sendPost } = useRequest();
    sendPost({
      id: '101',
      userId: '101',
      title: 'test',
      body: 'test',
    }).then((value) => {
      expect(value.title).toEqual('test');
    });
  });
  it('should check if the API Posts Different ID', async () => {
    const { sendPost } = useRequest();
    sendPost({
      id: '55',
      userId: '101',
      title: 'test',
      body: 'test',
    }).then((value) => {
      expect(value.title).toEqual('test');
    });
  });
});

describe('API test for update posts', () => {
  it('should check if the API Updates', async () => {
    const { updatePost } = useRequest();
    updatePost('2', {
      id: '101',
      userId: '101',
      title: 'test',
      body: 'test',
    }).then((value) => {
      expect(value.title).toEqual('test');
    });
  });
  it('should check if the API Updates Id that doesnt exists', async () => {
    const { updatePost } = useRequest();
    updatePost('101', {
      id: '103',
      userId: '101',
      title: 'test',
      body: 'test',
    }).then((value) => {
      expect(value.title).toEqual('test');
    });
  });
});

describe('API test for Delete posts', () => {
  it('should check if the API Deletes', async () => {
    const { deletePost } = useRequest();
    deletePost('2').then((value) => {
      expect(value.id).toEqual('2');
    });
  });
});
