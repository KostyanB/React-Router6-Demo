import { useParams } from 'react-router-dom';
import makePageWithTitle from '../../components/Hocs/makePageWithTitle';

const EditPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit post {id}</h1>
    </div>
  );
};
export default EditPost;

// const WithTitleEditPost = makePageWithTitle(EditPost, {
//   title: 'Edit post ',
// });
// export default WithTitleEditPost;
