import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  Divider,
  Chip,
  CircularProgress,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SecurityIcon from '@mui/icons-material/Security';

export default function Profile() {
  const navigate = useNavigate();
  const { user, isAuthenticated, enabled } = useSelector((state) => state.auth);

  // Redirect if not authenticated or account disabled
  useEffect(() => {
    if (!isAuthenticated || enabled === false) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, enabled, navigate]);

  // Loading state
  if (!user) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} />
          <Typography variant="h6" sx={{ mt: 3, color: 'text.secondary' }}>
            Loading your profile...
          </Typography>
        </Box>
      </Box>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const role = user.roles?.[0] || 'User';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'grey.50',
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Header / Cover */}
          <Box
            sx={{
              height: 140,
              bgcolor: 'primary.main',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontSize: '3.5rem',
                  border: '4px solid white',
                  boxShadow: 3,
                }}
              >
                {user.name?.charAt(0)?.toUpperCase() || '?'}
              </Avatar>
            </Box>
          </Box>

          {/* Main Content */}
          <Box sx={{ pt: 9, pb: 6, px: { xs: 3, sm: 6 } }}>
            <Typography
              variant="h4"
              fontWeight={700}
              align="center"
              gutterBottom
            >
              {user.name || 'Your Profile'}
            </Typography>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Chip
                icon={<SecurityIcon fontSize="small" />}
                label={role}
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600, fontSize: '1rem', px: 2 }}
              />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<EmailIcon />}
                  label="Email"
                  value={user.email || '—'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<PhoneIcon />}
                  label="Phone"
                  value={user.phoneNumber || 'Not provided'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<CalendarTodayIcon />}
                  label="Created"
                  value={formatDate(user.createAt || user.createdAt)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<CalendarTodayIcon />}
                  label="Last Updated"
                  value={formatDate(user.updateAt || user.updatedAt)}
                />
              </Grid>

              <Grid item xs={12}>
                <InfoItem
                  icon={<PersonIcon />}
                  label="Account Status"
                  value={
                    <Chip
                      label={user.isEnabled ? 'Active' : 'Disabled'}
                      color={user.isEnabled ? 'success' : 'error'}
                      size="medium"
                      sx={{ fontWeight: 600 }}
                    />
                  }
                />
              </Grid>
            </Grid>

            {/* Optional: future actions */}
            {/* <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Button variant="outlined" color="primary" size="large">
                Edit Profile
              </Button>
            </Box> */}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

// Reusable small component
function InfoItem({ icon, label, value }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <Box sx={{ color: 'primary.main', mr: 1.5 }}>{icon}</Box>
          <Typography variant="subtitle2" color="text.secondary">
            {label}
          </Typography>
        </Box>
        <Typography variant="h6" fontWeight={600}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}