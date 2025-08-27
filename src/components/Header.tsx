import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon, Zap } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Games', id: 'games' },
    // About removed
    { name: 'Contact', id: 'contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: '#0f172a', height: '100%' }}>
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <img 
            src="/d30f680e-ced0-40b6-9994-9ceb1ebb3ac1.jpeg" 
            alt="Bat Cave Studio Logo" 
            style={{ width: 40, height: 40, borderRadius: '8px' }}
          />
        </Box>
        <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 700 }}>
          Bat Cave Studio
        </Typography>
      </Box>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <ListItemText 
              primary={item.name} 
              onClick={() => scrollToSection(item.id)}
              sx={{ 
                textAlign: 'center',
                cursor: 'pointer',
                '& .MuiTypography-root': {
                  color: '#e2e8f0',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)'
                  }
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : 'none'
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: 2,
              px: 2,
              py: 1,
              border: '1px solid rgba(245, 158, 11, 0.2)',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('home')}
            >
              <img 
                src="/d30f680e-ced0-40b6-9994-9ceb1ebb3ac1.jpeg" 
                alt="Bat Cave Studio Logo" 
                style={{ 
                  width: 36, 
                  height: 36, 
                  borderRadius: '6px',
                  marginRight: '8px'
                }}
              />
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 800, 
                  color: 'white',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}
              >
                Bat Cave Studio
              </Typography>
            </Box>
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: 2,
                '&:hover': {
                  background: 'rgba(245, 158, 11, 0.2)',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
               <Button 
                 key={item.name} 
                 color="inherit" 
                 onClick={() => scrollToSection(item.id)}
                 sx={{ 
                   color: 'white',
                   fontWeight: 600,
                   px: 3,
                   py: 1,
                   borderRadius: 2,
                   transition: 'all 0.3s ease',
                   '&:hover': { 
                     color: '#f59e0b',
                     backgroundColor: 'rgba(245, 158, 11, 0.1)',
                     transform: 'translateY(-2px)'
                   } 
                 }}
               >
                  {item.name}
                </Button>
              ))}
              
              <Button
                variant="contained"
                startIcon={<Zap size={16} />}
                sx={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  ml: 2,
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4)'
                  }
                }}
                href="https://play.google.com/store/apps/dev?id=7021697916398714880"
                target="_blank"
              >
                Play Now
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: '#0f172a',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;