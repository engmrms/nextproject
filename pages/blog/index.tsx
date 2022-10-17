import Link from "next/link";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import PortalLayout from "../../Components/Layouts/Portal";

interface IProps {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

function Blog({ posts }: IProps) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {posts.map(item => (
              <div key={item.id} className="relative">
                <dt>
                  <Link href={`blog/${item.id}`}>
                    <a href={`blog/${item.id}`} className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.title}
                    </a>
                  </Link>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = (
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
export default Blog;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
