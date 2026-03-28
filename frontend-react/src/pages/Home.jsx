import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Container,
  Grid,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <RocketLaunchIcon fontSize="large" />,
    title: "Fast",
    description: "Optimized for performance",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Clean",
    description: "Simple & maintainable code",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Secure",
    description: "Authentication ready",
  },
];

export default function Home() {

  const navigate=useNavigate();
  return (
    <Box sx={{ bgcolor: "#fafafa" }}>
      
      {/* HERO */}
      <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            React Starter
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Minimal & Clean
          </Typography>

          <Button variant="contained" sx={{ borderRadius: 3, px: 4 }} onClick={()=>{
              navigate("/todo")
          }}>
            Open Todo
          </Button>
        </motion.div>
      </Container>

      {/* FEATURES */}
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Grid container spacing={3} justifyContent="center">
          {features.map((f, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    py: 4,
                    borderRadius: 4,
                    border: "1px solid #eee",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{f.icon}</Box>

                    <Typography fontWeight={600}>{f.title}</Typography>

                    <Typography variant="body2" color="text.secondary">
                      {f.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ textAlign: "center", pb: 10 }}>
        <Typography fontWeight={600} sx={{ mb: 2 }}>
          Start building today
        </Typography>

        <Button variant="outlined" sx={{ borderRadius: 3 }}>
          Create Project
        </Button>
      </Box>
    </Box>
  );
}

