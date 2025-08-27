import { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Chip, IconButton } from '@mui/material';
import { Play, Star, Download, Heart, Share2, TrendingUp, Zap, Award, ImageOff } from 'lucide-react';

// Import images to let Vite handle the paths correctly
import ambulanceImage from '/public/embulance.webp';
import monsterImage from '/public/monster.webp';
import firefighterImage from '/public/firefighter.webp';
import topRoofImage from '/public/toproof.webp';
import carDriftImage from '/public/cardrift.webp';
import decorateRoomImage from '/public/decorateroom.webp';

interface Game {
  title: string;
  description: string;
  image?: string | { default: string }; // Updated to allow imported image assets
  rating: number | string;
  downloads: string;
  type: string;
  playStoreUrl: string;
  reviews?: string;
  contentRating?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

const Games = () => {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  const games: Game[] = [
    {
      title: "Rescue Ambulance Doctor Games",
      description: "Greetings and welcome to the Ambulance Rescue Doctor Games universe of ambulance games. Playing these games immerses players in the high-stakes world of emergency medical services while also being informative and fun. This emergency game features a city ambulance simulator game, rescue simulator games, doctor simulator games 3D, and hospital games offline simulator. Ambulance Rescue combines the best elements of open-world exploration in the ultimate ambulance game and doctor hospital games simulator offline with action-packed ambulance driving games like an emergency ambulance game simulator.",
      image: ambulanceImage,
      rating: 3.9,
      downloads: "1M+",
      type: "Role Playing",
      reviews: "839 reviews",
      contentRating: "Teen",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.ambulance.simulator.driving.games",
      isTrending: true
    },
    {
      title: "Extreme Monster Truck 4x4 Game",
      description: "Experience the thrill of extreme monster truck driving with realistic 4x4 physics and challenging terrain. Navigate through tough obstacles and showcase your driving skills in this action-packed monster truck simulator.",
      image: monsterImage,
      rating: 3.2,
      downloads: "500K+",
      type: "Racing",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.thunder.roads.monster.rally"
    },
    {
      title: "US Firefighter Truck Rescue 3D",
      description: "Step into the boots of a heroic firefighter and drive emergency rescue trucks through challenging scenarios. Save lives, extinguish fires, and become the ultimate emergency responder in this realistic 3D firefighter simulation.",
      image: firefighterImage,
      rating: 3.6,
      downloads: "750K+",
      type: "Simulation",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.firetruck.us.rescue",
      isNew: true
    },
    {
      title: "Going up Rooftop 3D Parkour",
      description: "Master the art of parkour in this thrilling 3D rooftop adventure. Jump, climb, and navigate through urban landscapes with realistic physics and stunning city environments.",
      image: topRoofImage,
      rating: "New",
      downloads: "100K+",
      type: "Action",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.going.up.rooftop.adventure.parkour.games",
      isNew: true
    },
    {
      title: "Car Drifting Game Car Driving",
      description: "Perfect your drifting skills in this realistic car driving simulator. Experience authentic physics, multiple car models, and challenging drift tracks that will test your driving abilities.",
      image: carDriftImage,
      rating: "New",
      downloads: "250K+",
      type: "Racing",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.extreme.drift.drive.simulator"
    },
    {
      title: "Decorate House Design Games 3D",
      description: "Unleash your creativity in this immersive 3D house design and decoration game. Choose from thousands of furniture pieces, colors, and decorative items to create your dream home.",
      image: decorateRoomImage,
      rating: "New",
      downloads: "300K+",
      type: "Casual",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.batcave.decorate.house.makeover.design.game"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      'Role Playing': { bg: '#3b82f6', text: 'white', border: '#1d4ed8' },
      'Racing': { bg: '#ef4444', text: 'white', border: '#dc2626' },
      'Simulation': { bg: '#06b6d4', text: 'white', border: '#0891b2' },
      'Action': { bg: '#f97316', text: 'white', border: '#ea580c' },
      'Casual': { bg: '#10b981', text: 'white', border: '#059669' }
    };
    return colors[type] || { bg: '#6b7280', text: 'white', border: '#4b5563' };
  };

  return (
    <Box sx={{ 
      py: { xs: 10, md: 16 }, 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
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
      
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 12 }, position: 'relative' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 900,
              fontSize: { xs: '3.5rem', md: '5rem' },
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            Our Amazing Games
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#ffffff',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 500,
              lineHeight: 1.6,
              mb: 8,
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Discover our collection of award-winning games that have captivated millions of players worldwide
          </Typography>
          
          {/* Stats */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 4, md: 8 }, 
            flexWrap: 'wrap',
            mb: 6
          }}>
            <Box sx={{ 
              textAlign: 'center',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: 4,
              px: 5,
              py: 4,
              backdropFilter: 'blur(10px)',
              minWidth: '140px'
            }}>
              <Typography variant="h2" sx={{ color: '#3b82f6', fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3rem' } }}>6+</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>Games</Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 4,
              px: 5,
              py: 4,
              backdropFilter: 'blur(10px)',
              minWidth: '140px'
            }}>
              <Typography variant="h2" sx={{ color: '#10b981', fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3rem' } }}>2.8M+</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>Downloads</Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 4,
              px: 5,
              py: 4,
              backdropFilter: 'blur(10px)',
              minWidth: '140px'
            }}>
              <Typography variant="h2" sx={{ color: '#f59e0b', fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3rem' } }}>4.8★</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>Average Rating</Typography>
            </Box>
          </Box>
        </Box>

        {/* Games Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {games.filter(game => !game.title.includes('Decorate House Design')).map((game, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={index}>
              <Card
                onMouseEnter={() => setHoveredGame(index)}
                onMouseLeave={() => setHoveredGame(null)}
                sx={{
                  height: '100%',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredGame === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredGame === index 
                    ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                    : '0 10px 25px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'rgba(245, 158, 11, 0.5)',
                  }
                }}
              >
                {/* Badges */}
                <Box sx={{ position: 'absolute', top: 8, left: 8, zIndex: 2, display: 'flex', gap: 0.5 }}>
                  {game.isNew && (
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        px: 1.5,
                        py: 0.25,
                        borderRadius: 1.5,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)',
                        textTransform: 'uppercase'
                      }}
                    >
                      New
                    </Box>
                  )}
                  {game.isTrending && (
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: 'white',
                        px: 1.5,
                        py: 0.25,
                        borderRadius: 1.5,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        boxShadow: '0 2px 8px rgba(245, 158, 11, 0.4)',
                        textTransform: 'uppercase'
                      }}
                    >
                      <TrendingUp size={10} />
                      Trending
                    </Box>
                  )}
                </Box>

                {/* Action buttons */}
                <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, display: 'flex', gap: 0.5 }}>
                  <IconButton
                    size="small"
                    sx={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: 28,
                      height: 28,
                      opacity: hoveredGame === index ? 1 : 0,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        background: 'rgba(245, 158, 11, 0.9)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Heart size={14} />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: 28,
                      height: 28,
                      opacity: hoveredGame === index ? 1 : 0,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        background: 'rgba(245, 158, 11, 0.9)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Share2 size={14} />
                  </IconButton>
                </Box>

                <CardMedia
                  component="img"
                  height="180"
                  image={typeof game.image === 'string' ? game.image : game.image}
                  alt={game.title}
                  sx={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    transform: hoveredGame === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />

                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#ffffff',
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      mb: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {game.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={game.type}
                      size="small"
                      sx={{
                        background: getTypeColor(game.type).bg,
                        color: getTypeColor(game.type).text,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: 24,
                        '& .MuiChip-label': { px: 1 }
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Star size={14} fill="#fbbf24" color="#fbbf24" />
                      <Typography variant="body2" sx={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 600 }}>
                        {typeof game.rating === 'number' ? game.rating : 'New'}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 'auto' }}>
                    <Download size={14} color="#94a3b8" />
                    <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                      {game.downloads}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    component="a"
                    href={game.playStoreUrl}
                    target="_blank"
                    startIcon={<Play size={16} />}
                    sx={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: 'white',
                      fontWeight: 600,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(245, 158, 11, 0.6)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          
          {/* Featured Game - Decorate House Design */}
          {games.find(game => game.title.includes('Decorate House Design')) && (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(245, 158, 11, 0.5)',
                  }
                }}
              >
                {/* Featured badge */}
                <Box sx={{ position: 'absolute', top: 8, left: 8, zIndex: 2 }}>
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      boxShadow: '0 2px 8px rgba(245, 158, 11, 0.4)',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    <Award size={12} />
                    Featured
                  </Box>
                </Box>

                {/* Placeholder instead of image */}
                <Box
                  sx={{
                    height: 180,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.15)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                    <ImageOff size={28} />
                    <Typography variant="caption" sx={{ mt: 1, fontWeight: 700, letterSpacing: '0.02em' }}>
                      Preview coming soon
                    </Typography>
                  </Box>
                </Box>
                
                {/* Content */}
                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'white',
                      fontSize: '0.9rem',
                      mb: 2,
                      lineHeight: 1.3
                    }}
                  >
                    Decorate House Design Games 3D
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label="Casual"
                      size="small"
                      sx={{
                        background: getTypeColor('Casual').bg,
                        color: getTypeColor('Casual').text,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: 24,
                        '& .MuiChip-label': { px: 1 }
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Star size={14} fill="#fbbf24" color="#fbbf24" />
                      <Typography variant="body2" sx={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 600 }}>
                        New
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    component="a"
                    href={games.find(game => game.title.includes('Decorate House Design'))?.playStoreUrl}
                    target="_blank"
                    startIcon={<Play size={16} />}
                    sx={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: 'white',
                      fontWeight: 600,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                      mt: 'auto',
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(245, 158, 11, 0.6)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 16 }}>
          <Button
            variant="outlined"
            size="large"
            href="https://play.google.com/store/apps/dev?id=7021697916398714880"
            target="_blank"
            startIcon={<Zap size={24} />}
            sx={{
              borderColor: '#f59e0b',
              color: '#f59e0b',
              borderWidth: 3,
              px: 8,
              py: 3,
              fontWeight: 800,
              fontSize: '1.2rem',
              borderRadius: 4,
              textTransform: 'none',
              background: 'rgba(245, 158, 11, 0.05)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                borderColor: '#d97706', 
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                color: '#d97706',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 30px rgba(245, 158, 11, 0.4)'
              }
            }}
          >
            View All Games on Play Store
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Games;