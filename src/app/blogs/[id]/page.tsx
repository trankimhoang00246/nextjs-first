'use client'

import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, {Fetcher} from "swr";

const ShowDetailPost = ({ params }: { params: { id: number } }) => {
    const fetcher: Fetcher<IBlog | null, string> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
      `http://localhost:8000/blogs/${params.id}`,
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
    );

    if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Link href={"/blogs"}>Go Back</Link>
      <Card className="text-center">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
      </Card>
    </>
  );
};

export default ShowDetailPost;