import React from 'react';
import { Fragment } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Icon,
} from '@chakra-ui/react';

// colorScheme
// Type
// "whiteAlpha" | "blackAlpha" | "gray" | "red"
// "orange" | "yellow" | "green" | "teal" | "blue"
// "cyan" | "purple" | "pink" | "linkedin" | "facebook"
//  "messenger" | "whatsapp" | "twitter" | "telegram"
// Default : "blue"
// status args: info (blue), success (green), warning (yellow) and error (red)
// variant args: subtle, solid, left-accent and top-accent
// https./chakra-ui.com/docs/feedback/alert

const AlertBox = ({
  title,
  desc,
  status,
  variant,
  size,
  maxWidth,
  boxSize,
  onClose,
  ...rest
}) => {
  return (
    <Fragment>
      <Alert status={status} variant={variant} size={size} {...rest}>
        <AlertIcon boxSize={boxSize} />
        <AlertTitle mr={2} maxWidth={maxWidth}>
          {title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">{desc}</AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={onClose}
        />
      </Alert>
    </Fragment>
  );
};

export default AlertBox;
