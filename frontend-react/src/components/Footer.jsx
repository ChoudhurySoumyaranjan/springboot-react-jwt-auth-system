// src/components/Footer.jsx
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: { xs: 4, md: 6 },
        bgcolor: "grey.50",
        borderTop: "1px solid",
        borderColor: "divider",
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        {/* Main content area */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={{ xs: 3, sm: 2 }}
          sx={{ mb: 4 }}
        >
          {/* Left / Brand + Description */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight={700}
              gutterBottom
              sx={{ letterSpacing: "-0.02em" }}
            >
              My App
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 360, opacity: 0.8 }}>
              Building better experiences, one feature at a time.
            </Typography>
          </Box>

          {/* Right / Quick links */}
          <Stack
            direction="row"
            spacing={{ xs: 3, sm: 5 }}
            sx={{ textAlign: "center" }}
          >
            <Stack spacing={1}>
              <Typography variant="subtitle2" color="text.primary" fontWeight={600}>
                Product
              </Typography>
              <Link href="/features" color="inherit" underline="hover" variant="body2">
                Features
              </Link>
              <Link href="/pricing" color="inherit" underline="hover" variant="body2">
                Pricing
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2" color="text.primary" fontWeight={600}>
                Company
              </Typography>
              <Link href="/about" color="inherit" underline="hover" variant="body2">
                About
              </Link>
              <Link href="/contact" color="inherit" underline="hover" variant="body2">
                Contact
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2" color="text.primary" fontWeight={600}>
                Legal
              </Typography>
              <Link href="/privacy" color="inherit" underline="hover" variant="body2">
                Privacy
              </Link>
              <Link href="/terms" color="inherit" underline="hover" variant="body2">
                Terms
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: "grey.300" }} />

        {/* Bottom bar */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} My App. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{ "&:hover": { color: "#0a66c2" } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Twitter / X"
              sx={{ "&:hover": { color: "#1da1f2" } }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              color="inherit"
              href="#"
              aria-label="Email"
              sx={{ "&:hover": { color: "error.main" } }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}