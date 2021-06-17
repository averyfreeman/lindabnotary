import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Circle, Square, Text, useColorModeValue } from '@chakra-ui/react';

const NavButton = ({
  className,
  fontSize,
  icon,
  label,
  ml,
  to,
  width,
  ...rest
}) => {
  const bgColor = useColorModeValue('gray.400', 'gray.800');
  const circleBgColor = useColorModeValue('gray.500', 'black');
  const textColor = useColorModeValue('black', 'gray.200');

  return (
    <Box>
      <NavLink to={to}>
        <Square
          flex="1"
          direction="row"
          alignItems="center"
          justify="center"
          to={to}
          bgColor={bgColor}
          borderTop="3px solid #666"
          borderRight="3px solid #333"
          borderBottom="3px solid #333"
          borderLeft="3px solid #666"
          boxShadow="2px 2px 4px #333"
          color={textColor}
          height="3.5rem"
          width={width}
          opacity="0.9"
          _hover={{
            opacity: 1,
            transform: 'scale(1.001)',
          }}
          sx={{
            transition: 'all 0.2s ease',
          }}
          {...rest}
        >
          <Circle bg={circleBgColor} height="3.1rem" width="3.1rem">
            {icon}
          </Circle>

          <Text
            className={className}
            fontSize={fontSize}
            ml={ml}
            display={{ base: 'none', lg: 'block' }}
          >
            {label}
          </Text>
        </Square>
      </NavLink>
    </Box>
  );
};

export default NavButton;
