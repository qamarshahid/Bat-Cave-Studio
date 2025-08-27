import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, IconButton } from '@mui/material';
import { Play, Download, Star, Users, TrendingUp, ArrowRight, Zap, Gamepad2, Smartphone, Globe, Banknote, Target, Sparkles } from 'lucide-react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gaming Animated Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)',
        opacity: 0.3
      }}>
        
        {/* Gaming Icons Rain Effect */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden'
        }}>
          {[...Array(20)].map((_, i) => (
            <Box key={i} sx={{
              position: 'absolute',
              top: '-50px',
              left: `${i * 5}%`,
              fontSize: '20px',
              animation: `gamingRain ${4 + Math.random() * 3}s linear infinite ${Math.random() * 3}s`,
              '@keyframes gamingRain': {
                '0%': { 
                  transform: 'translateY(-100px) rotate(0deg)',
                  opacity: 0
                },
                '10%': { opacity: 1 },
                '90%': { opacity: 1 },
                '100%': { 
                  transform: 'translateY(100vh) rotate(360deg)',
                  opacity: 0
                }
              }
            }}>
              {['🎮', '🎯', '⚔️', '🛡️', '🏆', '💎', '🔥', '⚡', '🌟', '🎲', '🎪', '🎨', '🎭', '🎪', '🎯', '🎲', '🏅', '💫', '✨', '🎊'][i % 20]}
            </Box>
          ))}
        </Box>

        {/* Floating Gaming Elements */}
        <Box sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))',
          borderRadius: '50%',
          border: '2px solid rgba(239, 68, 68, 0.3)',
          animation: 'gamingFloat 8s ease-in-out infinite',
          '&::before': {
            content: '"⚔️"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '28px'
          },
          '@keyframes gamingFloat': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: 0.6 },
            '50%': { transform: 'translateY(-25px) rotate(10deg)', opacity: 1 }
          }
        }} />

        <Box sx={{
          position: 'absolute',
          top: '65%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))',
          borderRadius: '50%',
          border: '2px solid rgba(59, 130, 246, 0.3)',
          animation: 'gamingFloat 6s ease-in-out infinite reverse',
          '&::before': {
            content: '"🛡️"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '28px'
          }
        }} />

        <Box sx={{
          position: 'absolute',
          top: '40%',
          left: '75%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.2))',
          borderRadius: '50%',
          border: '2px solid rgba(168, 85, 247, 0.3)',
          animation: 'gamingFloat 10s ease-in-out infinite 2s',
          '&::before': {
            content: '"🏆"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '28px'
          }
        }} />

        {/* Gaming Stats Bars */}
        {[...Array(5)].map((_, i) => (
          <Box key={i} sx={{
            position: 'absolute',
            top: `${20 + i * 15}%`,
            left: `${5 + i * 8}%`,
            width: '100px',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden',
            animation: `statsBar ${5 + i}s ease-in-out infinite ${i * 0.6}s`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '0%',
              background: `linear-gradient(90deg, rgba(${239 + i * 20}, ${68 + i * 15}, ${68 - i * 10}, 0.8) 0%, rgba(${59 + i * 30}, ${130 + i * 10}, ${246 - i * 20}, 0.8) 100%)`,
              animation: `statsFill ${5 + i}s ease-in-out infinite ${i * 0.6}s`,
              '@keyframes statsFill': {
                '0%': { width: '0%' },
                '50%': { width: `${70 + i * 6}%` },
                '100%': { width: '100%' }
              }
            },
            '@keyframes statsBar': {
              '0%, 100%': { opacity: 0.3 },
              '50%': { opacity: 1 }
            }
          }} />
        ))}

        {/* Floating Gaming Terms */}
        {[...Array(8)].map((_, i) => (
          <Box key={i} sx={{
            position: 'absolute',
            top: `${10 + i * 10}%`,
            left: `${15 + i * 10}%`,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '600',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            animation: `gamingTerm ${7 + i}s ease-in-out infinite ${i * 0.8}s`,
            '@keyframes gamingTerm': {
              '0%, 100%': { 
                transform: 'translateY(0px) translateX(0px)',
                opacity: 0.4
              },
              '50%': { 
                transform: 'translateY(-20px) translateX(15px)',
                opacity: 1
              }
            }
          }}>
            {[
              'LEVEL UP!',
              'BOSS FIGHT',
              'POWER UP',
              'MULTIPLAYER',
              'ACHIEVEMENT',
              'COLLECTION',
              'STRATEGY',
              'ADVENTURE'
            ][i]}
          </Box>
        ))}

        {/* Gaming Power Icons */}
        <Box sx={{
          position: 'absolute',
          bottom: '25%',
          left: '20%',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))',
          borderRadius: '50%',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          animation: 'powerIcon 6s ease-in-out infinite',
          '&::before': {
            content: '"💎"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px'
          },
          '@keyframes powerIcon': {
            '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.6 },
            '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1 }
          }
        }} />

        <Box sx={{
          position: 'absolute',
          bottom: '30%',
          right: '25%',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(45deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2))',
          borderRadius: '50%',
          border: '2px solid rgba(245, 158, 11, 0.3)',
          animation: 'powerIcon 8s ease-in-out infinite 1s',
          '&::before': {
            content: '"🔥"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px'
          }
        }} />

        {/* Premium Game Characters & Vehicles */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden'
        }}>
          {/* Premium Racing Cars */}
          {[...Array(4)].map((_, i) => (
            <Box key={`premium-car-${i}`} sx={{
              position: 'absolute',
              top: '-80px',
              left: `${10 + i * 20}%`,
              width: '70px',
              height: '35px',
              background: `linear-gradient(135deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][i]} 0%, ${['#ee5a24', '#00b894', '#0984e3', '#00b894'][i]} 100%)`,
              borderRadius: '20px 8px 8px 20px',
              boxShadow: `0 4px 15px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)`,
              animation: `premiumCarFloat ${8 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 5}s`,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '8px',
                left: '12px',
                width: '16px',
                height: '16px',
                background: 'radial-gradient(circle, #2c3e50 0%, #34495e 100%)',
                borderRadius: '50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.5), 30px 0 0 radial-gradient(circle, #2c3e50 0%, #34495e 100%), 30px 2px 4px rgba(0,0,0,0.5)',
                animation: 'wheelSpin 2s linear infinite'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '12px',
                right: '8px',
                width: '12px',
                height: '8px',
                background: 'linear-gradient(90deg, #f39c12 0%, #e67e22 100%)',
                borderRadius: '4px',
                boxShadow: '0 0 8px rgba(243, 156, 18, 0.6)',
                animation: 'headlightGlow 1.5s ease-in-out infinite alternate'
              },
              '@keyframes premiumCarFloat': {
                '0%, 100%': { 
                  transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                  opacity: 0.8
                },
                '25%': { 
                  transform: 'translateY(-15px) translateX(10px) rotate(2deg)',
                  opacity: 1
                },
                '50%': { 
                  transform: 'translateY(-25px) translateX(-5px) rotate(-1deg)',
                  opacity: 0.9
                },
                '75%': { 
                  transform: 'translateY(-10px) translateX(15px) rotate(3deg)',
                  opacity: 1
                }
              },
              '@keyframes wheelSpin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              },
              '@keyframes headlightGlow': {
                '0%': { boxShadow: '0 0 8px rgba(243, 156, 18, 0.6)' },
                '100%': { boxShadow: '0 0 15px rgba(243, 156, 18, 0.9)' }
              }
            }} />
          ))}

          {/* Premium Emergency Vehicles */}
          {[...Array(2)].map((_, i) => (
            <Box key={`premium-emergency-${i}`} sx={{
              position: 'absolute',
              top: '-90px',
              left: `${60 + i * 25}%`,
              width: '80px',
              height: '40px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
              borderRadius: '25px 10px 10px 25px',
              border: '3px solid #dc3545',
              boxShadow: `0 6px 20px rgba(220, 53, 69, 0.3), inset 0 2px 4px rgba(255,255,255,0.4)`,
              animation: `emergencyFloat ${10 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 4}s`,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '10px',
                left: '15px',
                width: '18px',
                height: '18px',
                background: 'radial-gradient(circle, #495057 0%, #6c757d 100%)',
                borderRadius: '50%',
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), 35px 0 0 radial-gradient(circle, #495057 0%, #6c757d 100%), 35px 3px 6px rgba(0,0,0,0.4)',
                animation: 'wheelSpin 1.8s linear infinite'
              },
              '&::after': {
                content: '"🚑"',
                position: 'absolute',
                top: '5px',
                right: '8px',
                fontSize: '20px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                animation: 'emergencyPulse 1s ease-in-out infinite alternate'
              },
              '@keyframes emergencyFloat': {
                '0%, 100%': { 
                  transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                  opacity: 0.9
                },
                '33%': { 
                  transform: 'translateY(-20px) translateX(8px) rotate(1deg)',
                  opacity: 1
                },
                '66%': { 
                  transform: 'translateY(-30px) translateX(-12px) rotate(-2deg)',
                  opacity: 0.8
                }
              },
              '@keyframes emergencyPulse': {
                '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' },
                '100%': { transform: 'scale(1.1)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }
              }
            }} />
          ))}

          {/* Premium Superhero Characters */}
          {[...Array(3)].map((_, i) => (
            <Box key={`premium-hero-${i}`} sx={{
              position: 'absolute',
              top: '-70px',
              left: `${15 + i * 25}%`,
              width: '25px',
              height: '45px',
              background: `linear-gradient(180deg, ${['#e74c3c', '#3498db', '#f39c12'][i]} 0%, ${['#c0392b', '#2980b9', '#e67e22'][i]} 100%)`,
              borderRadius: '12px',
              boxShadow: `0 4px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)`,
              animation: `heroFloat ${9 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 3}s`,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '2px',
                width: '21px',
                height: '15px',
                background: `${['#e74c3c', '#3498db', '#f39c12'][i]}`,
                borderRadius: '10px',
                border: '2px solid #2c3e50',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                animation: 'heroHeadBob 2s ease-in-out infinite'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '3px',
                left: '4px',
                width: '7px',
                height: '10px',
                background: '#2c3e50',
                borderRadius: '4px',
                boxShadow: '10px 0 0 #2c3e50',
                animation: 'heroLegs 1.5s ease-in-out infinite'
              },
              '@keyframes heroFloat': {
                '0%, 100%': { 
                  transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                  opacity: 0.8
                },
                '25%': { 
                  transform: 'translateY(-18px) translateX(12px) rotate(3deg)',
                  opacity: 1
                },
                '50%': { 
                  transform: 'translateY(-28px) translateX(-8px) rotate(-2deg)',
                  opacity: 0.9
                },
                '75%': { 
                  transform: 'translateY(-15px) translateX(18px) rotate(4deg)',
                  opacity: 1
                }
              },
              '@keyframes heroHeadBob': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-2px)' }
              },
              '@keyframes heroLegs': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-1px)' }
              }
            }} />
          ))}

          {/* Premium Transformer Robots */}
          {[...Array(3)].map((_, i) => (
            <Box key={`premium-robot-${i}`} sx={{
              position: 'absolute',
              top: '-85px',
              left: `${70 + i * 15}%`,
              width: '30px',
              height: '50px',
              background: `linear-gradient(180deg, ${['#e67e22', '#9b59b6', '#1abc9c'][i]} 0%, ${['#d35400', '#8e44ad', '#16a085'][i]} 100%)`,
              borderRadius: '10px',
              border: '3px solid #2c3e50',
              boxShadow: `0 6px 18px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)`,
              animation: `robotFloat ${11 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 4}s`,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-8px',
                left: '5px',
                width: '20px',
                height: '12px',
                background: '#2c3e50',
                borderRadius: '6px',
                border: '2px solid #34495e',
                boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                animation: 'robotHeadScan 3s ease-in-out infinite'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                width: '8px',
                height: '12px',
                background: '#34495e',
                borderRadius: '4px',
                boxShadow: '12px 0 0 #34495e',
                animation: 'robotLegs 2s ease-in-out infinite'
              },
              '@keyframes robotFloat': {
                '0%, 100%': { 
                  transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                  opacity: 0.9
                },
                '20%': { 
                  transform: 'translateY(-22px) translateX(10px) rotate(2deg)',
                  opacity: 1
                },
                '40%': { 
                  transform: 'translateY(-35px) translateX(-15px) rotate(-3deg)',
                  opacity: 0.8
                },
                '60%': { 
                  transform: 'translateY(-25px) translateX(20px) rotate(4deg)',
                  opacity: 1
                },
                '80%': { 
                  transform: 'translateY(-15px) translateX(-8px) rotate(-1deg)',
                  opacity: 0.9
                }
              },
              '@keyframes robotHeadScan': {
                '0%, 100%': { 
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4), inset 0 0 0 rgba(52, 152, 219, 0)' 
                },
                '50%': { 
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4), inset 0 0 10px rgba(52, 152, 219, 0.6)' 
                }
              },
              '@keyframes robotLegs': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-2px)' }
              }
            }} />
          ))}
        </Box>

        {/* Gaming Journey Flow */}
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '250px',
          height: '120px',
          opacity: 0.4
        }}>
          <Box sx={{
            position: 'absolute',
            top: '20px',
            left: '0',
            width: '50px',
            height: '50px',
            background: 'rgba(34, 197, 94, 0.3)',
            borderRadius: '50%',
            border: '2px solid rgba(34, 197, 94, 0.5)',
            animation: 'journeyFlow 10s ease-in-out infinite',
            '&::before': {
              content: '"🎯"',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '20px'
            }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '20px',
            left: '100px',
            width: '50px',
            height: '50px',
            background: 'rgba(59, 130, 246, 0.3)',
            borderRadius: '50%',
            border: '2px solid rgba(59, 130, 246, 0.5)',
            animation: 'journeyFlow 10s ease-in-out infinite 2s',
            '&::before': {
              content: '"⚔️"',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '20px'
            }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '20px',
            right: '0',
            width: '50px',
            height: '50px',
            background: 'rgba(168, 85, 247, 0.3)',
            borderRadius: '50%',
            border: '2px solid rgba(168, 85, 247, 0.5)',
            animation: 'journeyFlow 10s ease-in-out infinite 4s',
            '&::before': {
              content: '"🏆"',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '20px'
            }
          }} />
          
          {/* Connecting Lines */}
          <Box sx={{
            position: 'absolute',
            top: '45px',
            left: '50px',
            width: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)',
            borderRadius: '2px',
            animation: 'journeyLine 10s ease-in-out infinite 1s',
            '@keyframes journeyLine': {
              '0%, 100%': { opacity: 0.3, transform: 'scaleX(0.8)' },
              '50%': { opacity: 1, transform: 'scaleX(1.2)' }
            }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '45px',
            left: '150px',
            width: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, rgba(168, 85, 247, 0.6) 100%)',
            borderRadius: '2px',
            animation: 'journeyLine 10s ease-in-out infinite 3s',
            '@keyframes journeyLine': {
              '0%, 100%': { opacity: 0.3, transform: 'scaleX(0.8)' },
              '50%': { opacity: 1, transform: 'scaleX(1.2)' }
            }
          }} />
          
          <Box sx={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '600',
            textAlign: 'center',
            animation: 'journeyText 10s ease-in-out infinite',
            '@keyframes journeyText': {
              '0%, 30%': { content: '"START"', opacity: 1 },
              '33%, 63%': { content: '"BATTLE"', opacity: 1 },
              '66%, 96%': { content: '"VICTORY"', opacity: 1 },
              '100%': { content: '"START"', opacity: 1 }
            }
          }}>
            START → BATTLE → VICTORY
          </Box>
        </Box>

        {/* Gaming Grid Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gamingGrid 30s linear infinite',
          '@keyframes gamingGrid': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(40px, 40px)' }
          }
        }} />
      </Box>
      
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box 
              sx={{ 
                color: 'white', 
                mb: 4,
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    mb: 2
                  }}
                >
                  Gaming Studio
                </Box>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.5rem', md: '5.5rem' },
                  fontWeight: 900,
                  mb: 3,
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  animation: 'titleGlow 3s ease-in-out infinite',
                  '@keyframes titleGlow': {
                    '0%, 100%': { 
                      filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                    },
                    '50%': { 
                      filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.6))'
                    }
                  }
                }}
              >
                BAT CAVE STUDIO
              </Typography>
              
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  color: '#ffffff', 
                  lineHeight: 1.3,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  animation: 'subtitleFloat 4s ease-in-out infinite',
                  '@keyframes subtitleFloat': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-3px)' }
                  }
                }}
              >
                Creating Epic Gaming Experiences
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 6, 
                  color: '#ffffff', 
                  fontSize: '1.4rem',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  fontWeight: 500,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  animation: 'descriptionFade 5s ease-in-out infinite',
                  '@keyframes descriptionFade': {
                    '0%, 100%': { opacity: 0.9 },
                    '50%': { opacity: 1 }
                  }
                }}
              >
                We craft immersive 3D and 2D games that challenge, inspire, and entertain millions of players worldwide. 
                Experience the future of mobile gaming with our award-winning titles.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Play size={24} />}
                  endIcon={<ArrowRight size={22} />}
                  sx={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: 'white',
                    fontWeight: 800,
                    px: 5,
                    py: 2,
                    fontSize: '1.3rem',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(245, 158, 11, 0.5)',
                    transition: 'all 0.3s ease',
                    animation: 'buttonPulse 2s ease-in-out infinite',
                    '@keyframes buttonPulse': {
                      '0%, 100%': { 
                        boxShadow: '0 10px 30px rgba(245, 158, 11, 0.5)',
                        transform: 'scale(1)'
                      },
                      '50%': { 
                        boxShadow: '0 15px 40px rgba(245, 158, 11, 0.7)',
                        transform: 'scale(1.02)'
                      }
                    },
                    '&:hover': { 
                      background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 20px 50px rgba(245, 158, 11, 0.8)'
                    }
                  }}
                  href="https://play.google.com/store/apps/dev?id=7021697916398714880"
                  target="_blank"
                >
                  Explore Games
                </Button>
              </Box>

              {/* Platform badges */}
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mt: 2 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  background: 'rgba(255, 255, 255, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <Smartphone size={24} color="#f59e0b" />
                  <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
                    iOS & Android
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  background: 'rgba(255, 255, 255, 0.1)',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <Globe size={24} color="#f59e0b" />
                  <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
                    Global Release
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box
              sx={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              <Grid container spacing={3}>
                {/* Revenue Card - Full Width Top */}
                <Grid item xs={12} {...({} as any)}>
                  <Card 
                    sx={{ 
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
                        borderColor: 'rgba(168, 85, 247, 0.5)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ 
                            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)',
                            animation: 'float 3s ease-in-out infinite',
                            '@keyframes float': {
                              '0%, 100%': { transform: 'translateY(0px)' },
                              '50%': { transform: 'translateY(-3px)' }
                            }
                          }}>
                            <Banknote size={24} color="white" />
                          </Box>
                          <Box>
                            <Typography variant="h3" sx={{ fontWeight: 800, color: '#a855f7', mb: 0.5 }}>
                              $200K+
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 500 }}>
                              Revenue in 2025
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1, fontSize: '0.75rem' }}>
                            Growth Trend
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'end', gap: 1, height: 40 }}>
                            <Box sx={{ 
                              background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                              width: 4,
                              borderRadius: 1,
                              animation: 'growBar1 2s ease-out infinite',
                              '@keyframes growBar1': {
                                '0%': { height: '8px' },
                                '50%': { height: '16px' },
                                '100%': { height: '8px' }
                              }
                            }} />
                            <Box sx={{ 
                              background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                              width: 4,
                              borderRadius: 1,
                              animation: 'growBar2 2s ease-out infinite 0.3s',
                              '@keyframes growBar2': {
                                '0%': { height: '12px' },
                                '50%': { height: '24px' },
                                '100%': { height: '12px' }
                              }
                            }} />
                            <Box sx={{ 
                              background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                              width: 4,
                              borderRadius: 1,
                              animation: 'growBar3 2s ease-out infinite 0.6s',
                              '@keyframes growBar3': {
                                '0%': { height: '16px' },
                                '50%': { height: '32px' },
                                '100%': { height: '16px' }
                              }
                            }} />
                            <Box sx={{ 
                              background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                              width: 4,
                              borderRadius: 1,
                              animation: 'growBar4 2s ease-out infinite 0.9s',
                              '@keyframes growBar4': {
                                '0%': { height: '20px' },
                                '50%': { height: '36px' },
                                '100%': { height: '20px' }
                              }
                            }} />
                            <Box sx={{ 
                              background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                              width: 4,
                              borderRadius: 1,
                              animation: 'growBar5 2s ease-out infinite 1.2s',
                              '@keyframes growBar5': {
                                '0%': { height: '24px' },
                                '50%': { height: '40px' },
                                '100%': { height: '24px' }
                              }
                            }} />
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Active Players and Rating Cards - Side by Side */}
                <Grid item xs={12} sm={6} {...({} as any)}>
                  <Card 
                    sx={{ 
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)',
                        borderColor: 'rgba(236, 72, 153, 0.5)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Box sx={{ 
                          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
                          animation: 'glow 4s ease-in-out infinite',
                          '@keyframes glow': {
                            '0%, 100%': { boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)' },
                            '50%': { boxShadow: '0 4px 20px rgba(236, 72, 153, 0.5)' }
                          }
                        }}>
                          <Target size={28} color="white" />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#ec4899', mb: 1 }}>
                          1M+
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 500 }}>
                          Active Players
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        background: 'rgba(236, 72, 153, 0.1)',
                        borderRadius: 2,
                        p: 1.5,
                        textAlign: 'center'
                      }}>
                        <Typography variant="body2" sx={{ color: '#ec4899', fontWeight: 600, fontSize: '0.8rem' }}>
                          Worldwide Community
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} {...({} as any)}>
                  <Card 
                    sx={{ 
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)',
                        borderColor: 'rgba(34, 197, 94, 0.5)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Box sx={{ 
                          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                          animation: 'twinkle 2s ease-in-out infinite',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '50%',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            '@keyframes pulse': {
                              '0%, 100%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1)' },
                              '50%': { opacity: 0.8, transform: 'translate(-50%, -50%) scale(1.2)' }
                            }
                          },
                          '@keyframes twinkle': {
                            '0%, 100%': { 
                              transform: 'rotate(0deg) scale(1)',
                              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3), 0 0 20px rgba(34, 197, 94, 0.2)'
                            },
                            '25%': { 
                              transform: 'rotate(5deg) scale(1.05)',
                              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.4)'
                            },
                            '50%': { 
                              transform: 'rotate(0deg) scale(1.1)',
                              boxShadow: '0 4px 25px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.5)'
                            },
                            '75%': { 
                              transform: 'rotate(-5deg) scale(1.05)',
                              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.4)'
                            }
                          }
                        }}>
                          <Star size={28} color="white" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))', strokeWidth: 3, fill: 'white' }} />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#22c55e', mb: 1 }}>
                          4.8★
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 500 }}>
                          Average Rating
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: 2,
                        p: 1.5,
                        textAlign: 'center'
                      }}>
                        <Typography variant="body2" sx={{ color: '#22c55e', fontWeight: 600, fontSize: '0.8rem' }}>
                          From thousands of players
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;