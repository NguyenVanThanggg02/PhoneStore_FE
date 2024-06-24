import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import {
  PencilFill,
  SendFill,
  ThreeDotsVertical,
  TrashFill,
} from "react-bootstrap-icons";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { InputText } from "primereact/inputtext";

const Comments = () => {
  const [listComments, setListComments] = useState([]);
  const { pid } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [text, setText] = useState("");
  const [editComment, setEditComment] = useState("");
  const [selectedComment, setSelectedComment] = useState(null);
  const [updateInput, setUpdateInput] = useState(false);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9999/comments/" + pid)
      .then((res) => {
        const sortedComments = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setListComments(sortedComments);
        console.log(sortedComments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleDeleteComment = (e, index) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete" + index + "?")) {
      axios
        .delete("http://localhost:9999/comments/" + index)
        .then(() => {
          toast.success("Comment deleted successfully");
          setListComments(listComments.filter((t) => t._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/comments", {
        text: text,
        userId: user._id,
        productId: pid,
      })
      .then((response) => {
        if (response.status === 201) {
          const newCommentId = response.data.comment._id; // Lấy _id từ phản hồi của máy chủ
          console.log(newCommentId);
          setListComments([
            { _id: newCommentId, userId: user, text: text },
            ...listComments,
          ]);
          setText("");
          console.log(response.data);
        } else {
          console.log("Comment thất bại");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleUpdateComment = (index) => {
    axios
      .put("http://localhost:9999/comments/" + index, {
        text: editComment,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Edit comment successfully");
          axios
            .get("http://localhost:9999/comments/" + pid)
            .then((res) => {
              const sortCmt = res.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              );
              setListComments(sortCmt);
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          toast.error("Edit comment failed");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    setEditComment("");
    setSelectedComment(null);
    setUpdateInput(false);
  };
  const handleEditCmt = (index, currentText) => {
    setEditComment(currentText);
    setSelectedComment(index);
    setUpdateInput(true);
  };

  const handleSelectComment = (index) => {
    setSelectedCommentIndex(index === selectedCommentIndex ? null : index);
  };

  return (
    <Container fluid>
      <Row
        style={{
          border: "solid #CCC 1px",
          margin: "20px",
          boxShadow: "5px 10px 10px 5px #C0C0C0",
          height: "85px",
          borderRadius: "20px",
        }}
      >
        <Col>
          <Form className="d-flex align-items-center mt-4">
            <Image
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              roundedCircle
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Form.Group controlId="commentInput" className="flex-grow-1 mr-2">
              {user && (
                <Form.Control
                  type="text"
                  placeholder="Write a comment..."
                  value={text}
                  rows={2}
                  cols={30}
                  onChange={(e) => setText(e.target.value)}
                />
              )}
            </Form.Group>
            <div>
              {user && (
                <Button
                  type="submit"
                  style={{ backgroundColor: "#D3D3D3", border: "none" }}
                  onClick={handleCreate}
                >
                  <SendFill style={{ fontSize: "20px", color: "#696969" }} />
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4 " style={{ margin: "20px", marginLeft: "60px" }}>
        <Col>
          {listComments.map((l, index) => (
            <div className="d-flex ">
              <Image
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                roundedCircle
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ marginBottom: "20px" }}
              >
                <div className="bg-light p-2 rounded">
                  <strong className="d-flex justify-content-start">
                    {l.userId?.username}
                  </strong>
                  {updateInput && selectedComment === index ? (
                    <>
                      <InputText
                        className="text-muted"
                        style={{
                          width: "auto",
                          border: "none",
                          height: "40px",
                        }}
                        value={editComment}
                        rows={2}
                        cols={30}
                        onChange={(e) => setEditComment(e.target.value)}
                        // onBlur={() => {
                        //   setEditComment("");
                        //   setSelectedComment(null);
                        //   setUpdateInput(false);
                        // }}
                      ></InputText>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => handleUpdateComment(l._id)}
                        style={{
                          backgroundColor: "#EEEEEE",
                          borderRadius: "50%",
                          border: "none",
                          marginLeft: "20px",
                          marginBottom: "7px",
                        }}
                      >
                        <SendFill
                          style={{ fontSize: "20px", color: "#0099FF" }}
                        />
                      </Button>
                    </>
                  ) : (
                    <p className="d-flex justify-content-start">{l.text}</p>
                  )}
                </div>
                <div>
                  {user && l.userId?._id === user._id && (
                    <>
                      <Button
                        style={{ border: "none", backgroundColor: "#FFFF" }}
                        onClick={() => handleSelectComment(index)}
                      >
                        <ThreeDotsVertical style={{ color: "#777777" }} />
                      </Button>
                    </>
                  )}
                  {user &&
                    l.userId?._id === user._id &&
                    selectedCommentIndex === index && (
                      <>
                        <Button
                          style={{
                            border: "none",
                            backgroundColor: "#FFFF",
                            marginLeft: "10px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteComment(e, l._id);
                          }}
                        >
                          <TrashFill
                            style={{ color: "#FF0000", fontSize: "20px" }}
                          />
                        </Button>
                        <Button
                          style={{
                            border: "none",
                            backgroundColor: "#FFFF",
                            marginLeft: "10px",
                          }}
                          onClick={() => handleEditCmt(index, l.text)}
                        >
                          <PencilFill
                            style={{ color: "#0066FF", fontSize: "20px" }}
                          />
                        </Button>
                      </>
                    )}
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
