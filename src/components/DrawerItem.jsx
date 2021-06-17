import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Circle,
  Square,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DrawerItem = ({
  className,
  label,
  icon,
  iconSize,
  iconColor,
  onClick,
  to,
  ...rest
}) => {
  const squareBgColor = useColorModeValue('gray.400', 'gray.600');
  const circleBgColor = useColorModeValue('gray.500', 'black');

  return (
    <NavLink to={to} textDecoration="none" m="0" onClick={onClick}>
      <HStack spacing={{ base: 0, sm: 4 }} m={{ base: 0, sm: 1 }}>
        <Square
          size={{ base: '4rem', sm: '4.4rem' }}
          bg={squareBgColor}
          boxShadow="2px 2px 5px black"
          borderRadius="lg"
          width={{ base: '14rem', sm: '16.5rem' }}
          textShadow="1px 2px 5px black"
          {...rest}
        >
          <Circle
            bg={circleBgColor}
            ml={2}
            size={{ base: '4rem', sm: '4.4rem' }}
            // border="1px solid #666"
          >
            <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
          </Circle>
          <Text
            className={className}
            fontSize={{ base: 'lg', sm: 'xl' }}
            pt="3"
            pb="3"
            width={{ base: '170px', sm: '180px' }}
            textAlign="center"
            textShadow="1px 1px 2px black"
          >
            {label}
          </Text>
        </Square>
      </HStack>
    </NavLink>
  );
};

export default DrawerItem;
