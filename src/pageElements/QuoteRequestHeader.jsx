import React, { Fragment } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const QuoteRequestHeader = () => (
  <Fragment>
    <Flex align="center" direction="column">
      <Box>
        <FontAwesomeIcon icon={faCommentsDollar} size="5x" />
        <Text fontsize={{ base: '5x', md: '7x' }}>Let's get you a quote!</Text>
      </Box>
    </Flex>
  </Fragment>
);

export default QuoteRequestHeader;
