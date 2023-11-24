'use client'

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModal from "./create.modal-popup";
import { useState } from "react";
import UpdateModal from "./update.modal";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import { resolveSoa } from "dns";
import { toast } from "react-toastify";

interface IProps {
  blogs: IBlog[];
}

const Tables = (props: IProps) => {
  const { blogs } = props;

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [blog, setBlog] = useState<IBlog | null>(null);

  function handleDeleteBlog(id: number) {
    if (confirm(`Do you want to delete this blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Delete blog succeed!");
            mutate("http://localhost:8000/blogs");
          }
        });
    }
  }

  return (
    <>
      <div
        className="m-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link className="btn btn-primary" href={`blogs/${item.id}`}>
                    View
                  </Link>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteBlog(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />

      <UpdateModal
        blog={blog}
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        setBlog={setBlog}
      />
    </>
  );
};

export default Tables;
