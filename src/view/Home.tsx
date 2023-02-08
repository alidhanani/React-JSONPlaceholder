import { useEffect, useState } from 'react';

import { Post } from 'src/model';
import { useRequest } from 'src/service';

// import BalanceDetailForm from './Home.form';
import BalanceTable from './Home.table';

const Home = () => {
  const { getPosts } = useRequest();
  const [post, setPost] = useState<Post[]>();

  useEffect(() => {
    getPosts().then((value) => setPost(value));
  }, []);

  return (
    <>
      {/* <BalanceDetailForm data={data} /> */}
      <BalanceTable data={post} />
    </>
  );
};

export default Home;
