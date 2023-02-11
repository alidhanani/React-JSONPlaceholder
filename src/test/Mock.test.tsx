import { Post } from 'src/model';
import { useRequest } from 'src/service';

describe('Mock Data Retrieve', () => {
  const posts: Post[] = [];

  it('should check if the API works', async () => {
    const { getPosts } = useRequest();
    getPosts().then((value) => {
      expect(Array.isArray(value)).to.be.true;
    });
  });

  it('check if localstorage do return value', async () => {
    expect(posts.length).toBeGreaterThanOrEqual(0);
  });

  it('check to add value in Post', async () => {
    posts.push({
      userId: '1',
      id: '1',
      title: 'test',
      body: 'test',
    });
    expect(posts.findIndex((value) => value.id == '1')).not.toEqual(-1);
  });

  it('check for value update', async () => {
    posts.push({
      userId: '1',
      id: '1',
      title: 'test',
      body: 'test',
    });
    const index = posts.findIndex((value) => value.id == '1');
    posts[index].title = 'test1';
    expect(posts.find((value) => value.id == '1')?.title).toEqual('test1');
  });

  it('check to see if wrong id value didint exist', async () => {
    posts.push({
      userId: '1',
      id: '1',
      title: 'test',
      body: 'test',
    });
    expect(posts.findIndex((value) => value.id == '2')).toEqual(-1);
  });

  it('check to see if value delete', async () => {
    posts.push({
      userId: '3',
      id: '3',
      title: 'test',
      body: 'test',
    });
    const index = posts.findIndex((value: Post) => value.id === '3');
    posts.splice(index, 1);
    expect(posts.findIndex((value) => value.id === '3')).toEqual(-1);
  });

  it('check to see value delete index', async () => {
    posts.push({
      userId: '3',
      id: '4',
      title: 'test',
      body: 'test',
    });
    const index = posts.findIndex((value: Post) => value.id === '3');
    const value = posts.splice(index, 1);
    expect(value.findIndex((value) => value.id === '4')).toEqual(0);
  });
});
