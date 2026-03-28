import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Paper
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  getAllTodos,
  addTodo as addTodoApi,
  editTodo,
  deleteTodo as deleteTodoApi
} from "../api/service/todoService";
import { useSelector } from "react-redux";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const userId = useSelector((state) => state.auth.user?.id);

  // ✅ Fetch Todos
  const fetchTodos = async () => {
    if (!userId) return;

    try {
      setLoading(true);
      const res = await getAllTodos(userId);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchTodos();
  }, [userId]);

  // ✅ Add Todo
  const handleAddTodo = async () => {
    if (!title.trim()) return;

    const tempTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    setTodos((prev) => [tempTodo, ...prev]);
    setTitle("");

    try {
      const res = await addTodoApi(
        { title, description: "", completed: false },
        userId
      );

      setTodos((prev) =>
        prev.map((t) => (t.id === tempTodo.id ? res.data : t))
      );
    } catch (error) {
      console.log(error);
      fetchTodos();
    }
  };

  // ✅ Toggle (FIXED 🔥)
  const toggleTodo = async (todo) => {
    const updated = { ...todo, completed: !todo.completed };

    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? updated : t))
    );

    try {
      await editTodo(
        {
          title: updated.title,
          description: updated.description || "",
          completed: updated.completed
        },
        todo.id
      );
    } catch (error) {
      console.log(error);
      fetchTodos();
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    const prev = todos;
    setTodos((prev) => prev.filter((t) => t.id !== id));

    try {
      await deleteTodoApi(id);
    } catch (error) {
      console.log(error);
      setTodos(prev);
    }
  };

  // ✅ Start Edit
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  // ✅ Save Edit (FIXED 🔥)
  const saveEdit = async (todo) => {
    const updated = { ...todo, title: editText };

    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? updated : t))
    );

    setEditId(null);

    try {
      await editTodo(
        {
          title: editText,
          description: todo.description || "",
          completed: todo.completed
        },
        todo.id
      );
    } catch (error) {
      console.log(error);
      fetchTodos();
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5">📝 Todo App</Typography>

        {/* Add */}
        <Box sx={{ display: "flex", gap: 1, my: 2 }}>
          <TextField
            fullWidth
            label="Add Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={handleAddTodo} variant="contained">
            Add
          </Button>
        </Box>

        {loading && <Typography>Loading...</Typography>}

        {/* List */}
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  <IconButton onClick={() => startEdit(todo)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </>
              }
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo)}
              />

              {editId === todo.id ? (
                <>
                  <TextField
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    size="small"
                  />
                  <Button onClick={() => saveEdit(todo)}>Save</Button>
                  <Button onClick={() => setEditId(null)}>Cancel</Button>
                </>
              ) : (
                <ListItemText
                  primary={todo.title}
                  sx={{
                    textDecoration: todo.completed
                      ? "line-through"
                      : "none"
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Todo;