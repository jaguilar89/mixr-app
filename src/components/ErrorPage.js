import { ErrorOutlineOutlined } from "@mui/icons-material";
import { 
    Container,
    Grid,
    Typography
 } from "@mui/material";

export default function ErrorPage({ error }) {
    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#1b3b79', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" sx={{ color: '#f5f5f5' }}>
                Oops! Something went wrong.
              </Typography>
              <Typography variant="body1" sx={{ color: '#f5f5f5' }}>
                Error: {error}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ErrorOutlineOutlined sx={{ fontSize: 100, color: '#f5f5f5' }} />
            </Grid>
          </Grid>
        </Container>
      );
}