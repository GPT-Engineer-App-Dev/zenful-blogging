import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl">Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <Button type="submit" colorScheme="teal" size="md">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;