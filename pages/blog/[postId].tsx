import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import PortalLayout from "../../Components/Layouts/Portal";

interface IProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

function PostItem({ post }: IProps) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">{post.id}</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"> {post.title}</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

PostItem.getLayout = (
  page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined
) => {
  return (
    <PortalLayout
      meta={{
        title: "Blog",
        name: "description",
        description: "Create next app project",
      }}>
      {page}
    </PortalLayout>
  );
};
export default PostItem;

export async function getServerSideProps(context: { params: { postId: string } }) {
  const { params } = context;
  const { postId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
