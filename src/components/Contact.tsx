import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={32} />,
      title: "WhatsApp",
      info: "+1-848-350-4870",
      action: "Message Us",
      link: "https://wa.me/18483504870"
    },
    {
      icon: <Mail size={32} />,
      title: "Email",
      info: "admin@batcavestudio.org",
      action: "Send Email",
      link: "mailto:admin@batcavestudio.org"
    },
    {
      icon: <MapPin size={32} />,
      title: "Address",
      info: "110 16th Street, Suite 1460\nDenver, CO 80202, USA",
      action: "View Map",
      link: "https://maps.google.com/?q=110+16th+Street+Suite+1460+Denver+CO+80202"
    }
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{
            fontWeight: 900,
            color: 'transparent',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            letterSpacing: '-0.02em',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            Get In Touch
          </Typography>
          <Typography variant="h6" sx={{ color: '#e2e8f0', maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}>
            Ready to discuss your next gaming project or have questions about our services? 
            We'd love to hear from you!
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((contact, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  borderRadius: 4,
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                    borderColor: 'rgba(245, 158, 11, 0.5)'
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: '#f59e0b', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {contact.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff', mb: 2 }}>
                    {contact.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#e2e8f0', 
                      mb: 3, 
                      whiteSpace: 'pre-line',
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}
                  >
                    {contact.info}
                  </Typography>
                  <Button
                    variant="contained"
                    href={contact.link}
                    target="_blank"
                    sx={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: 'white',
                      fontWeight: 700,
                      px: 3,
                      py: 1.2,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                      '&:hover': { background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }
                    }}
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card
          sx={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 6, textAlign: 'center' }}>
            <MessageCircle size={48} style={{ marginBottom: '16px' }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Let's Create Something Amazing Together
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
              Whether you're a developer looking to publish your game or a player with feedback, 
              we're here to listen and collaborate.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="https://wa.me/18483504870"
                target="_blank"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                  px: 4,
                  py: 1.5,
                }}
              >
                WhatsApp Us
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="mailto:admin@batcavestudio.org"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  px: 4,
                  py: 1.5,
                }}
              >
                Send Email
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;