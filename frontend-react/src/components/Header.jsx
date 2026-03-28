import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/service/authService";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = useSelector((state) => state.auth.user?.roles);
  const handleLogout = async () => {
    try {
      dispatch(logout());
      await logoutUser();         
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, md: 72 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Left - Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "1.35rem", sm: "1.5rem" },
            "&:hover": { color: "#dbeafe" },
            transition: "color 0.2s",
          }}
        >
          
          My App
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2, md: 2.5 },
          }}
        >
          {isAuthenticated ? (
            <>
              
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  display: { xs: "none", md: "block" },
                }}
              >
                Hi, {user?.name?.split(" ")[0] || "User"}
              </Typography>

              <Button
                component={Link}
                to="/profile"
                variant="outlined"
                size="medium"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  borderRadius: "10px",
                  px: 3,
                  fontWeight: 600,
                  textTransform: "none",
                  transition: "all 0.22s",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    transform: "translateY(-1px)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Profile
              </Button>

              {roles?.includes("ADMIN") && (
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => navigate("/users")}
                  sx={{
                    backgroundColor: "white",
                    color: "#1d4ed8",
                    borderRadius: "10px",
                    px: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "all 0.22s",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                    },
                  }}
                >
                  All Users
                </Button>
              )}

              <Button
                  variant="contained"
                  size="medium"
                  onClick={() => navigate("/todo")}
                  sx={{
                    backgroundColor: "white",
                    color: "#1d4ed8",
                    borderRadius: "10px",
                    px: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "all 0.22s",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                    },
                  }}
                >
                  Open Todo
                </Button>

              <Button
                variant="contained"
                size="medium"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "#dc2626",
                  color: "white",
                  borderRadius: "10px",
                  px: 3,
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 2px 8px rgba(220,38,38,0.3)",
                  transition: "all 0.22s",
                  "&:hover": {
                    backgroundColor: "#b91c1c",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 14px rgba(220,38,38,0.4)",
                  },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                size="medium"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.65)",
                  borderRadius: "10px",
                  px: 3,
                  fontWeight: 600,
                  textTransform: "none",
                  transition: "all 0.22s",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Log In
              </Button>

              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "white",
                  color: "#1d4ed8",
                  borderRadius: "10px",
                  px: 3.5,
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  transition: "all 0.22s",
                  "&:hover": {
                    backgroundColor: "#f8fafc",
                    transform: "translateY(-1px)",
                    boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
