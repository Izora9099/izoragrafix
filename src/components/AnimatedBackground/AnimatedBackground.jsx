import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1000px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
`;

const Bubble = styled(Box)(({ size, delay, startX }) => ({
  position: 'absolute',
  bottom: '-100px',
  left: `${startX}%`,
  width: size,
  height: size,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(1px)',
  borderRadius: '50%',
  animation: `${floatAnimation} 15s infinite linear`,
  animationDelay: `${delay}s`,
}));

const AnimatedBackground = () => {
  const bubbles = Array.from({ length: 20 }, () => ({
    size: Math.random() * 60 + 20,
    delay: Math.random() * 10,
    startX: Math.random() * 100,
  }));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          size={bubble.size}
          delay={bubble.delay}
          startX={bubble.startX}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
