import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// 6-18-2021 - note: this component is not finished - contains dummy values (very misleading, but looks cool...)
// todo: find a source for actual reviews, connect API or manually copy values
const property = {
  reviewCount: 34,
  rating: 5,
};

const StarRatings = ({ bgColor, fontSize, ...rest }) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p="5"
    bgColor={bgColor}
    {...rest}
  >
    <Text fontSize={fontSize}>Customer Reviews:</Text>
    <Box d="flex" mt="2" alignItems="center" justifyContent="center">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <FontAwesomeIcon
            icon={faStar}
            key={i}
            color={i < property.rating ? 'gold' : '#4A5568'}
          />
        ))}
      <Box as="span" ml="2" fontSize="sm">
        {property.reviewCount} reviews
      </Box>
    </Box>
  </Box>
);

export default StarRatings;
