import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImage from '/public/d30f680e-ced0-40b6-9994-9ceb1ebb3ac1.jpeg';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0f172a', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img 
                src={logoImage} 
                alt="Bat Cave Studio Logo" 
                style={{ width: 32, height: 32, borderRadius: '4px' }}
              />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                Bat Cave Studio LLC
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.6 }}>
              Dynamic gaming publisher committed to delivering captivating entertainment experiences 
              through innovative 3D and 2D games for iOS and Android platforms.
            </Typography>
            <Typography variant="body2" sx={{ color: '#f59e0b', fontWeight: 'bold' }}>
              Over $200K Revenue in 2025
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" sx={{ color: '#94a3b8', '&:hover': { color: '#f59e0b' } }}>
                Home
              </Link>
              <Link href="#" color="inherit" sx={{ color: '#94a3b8', '&:hover': { color: '#f59e0b' } }}>
                Our Games
              </Link>
              <Link 
                href="https://play.google.com/store/apps/dev?id=7021697916398714880" 
                target="_blank"
                color="inherit" 
                sx={{ color: '#94a3b8', '&:hover': { color: '#f59e0b' } }}
              >
                Play Store
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone size={16} color="#f59e0b" />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  +1-848-350-4870
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Mail size={16} color="#f59e0b" />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  admin@batcavestudio.org
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <MapPin size={16} color="#f59e0b" style={{ marginTop: '2px' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.4 }}>
                  110 16th Street, Suite 1460<br />
                  Denver, CO 80202, USA
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: '#334155' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            © 2025 Bat Cave Studio LLC. All rights reserved. | Crafting exceptional gaming experiences since inception.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;