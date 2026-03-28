// src/pages/Dashboard.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Dashboard() {
  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Welcome Header */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Welcome back, Soumya!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's a quick overview of your app today
          </Typography>
        </Box>

        {/* Stat Cards */}
        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    <PeopleIcon />
                  </Avatar>
                  <Typography variant="h6" color="text.secondary">
                    Total Users
                  </Typography>
                </Box>
                <Typography variant="h3" fontWeight={700}>
                  2,847
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  +124 this month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                    <TrendingUpIcon />
                  </Avatar>
                  <Typography variant="h6" color="text.secondary">
                    Active Sessions
                  </Typography>
                </Box>
                <Typography variant="h3" fontWeight={700}>
                  381
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  +42 today
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                    <AttachMoneyIcon />
                  </Avatar>
                  <Typography variant="h6" color="text.secondary">
                    Total Revenue
                  </Typography>
                </Box>
                <Typography variant="h3" fontWeight={700}>
                  $18,920
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  +15% from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Simple Recent Activity Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Recent Activity
          </Typography>

          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              {[
                { time: '2 hours ago', text: 'New user registered – Priya S.' },
                { time: '5 hours ago', text: 'Payment received – ₹1,499' },
                { time: 'Yesterday', text: 'Profile updated – Rahul K.' },
                { time: '2 days ago', text: 'Subscription upgraded to Pro' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    py: 2,
                    borderBottom: index < 3 ? '1px solid' : 'none',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body1">{item.text}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.time}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}