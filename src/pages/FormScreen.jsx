import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import { useInput } from '../hooks/useInput';

const FormScreen = props => {
  const [change, setChange] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const { bind, reset, value } = useInput('');

  useEffect(() => {
    console.log(`current change: ${change}`);
  }, [change, submitted]);

  const handleChange = e => {
    e.persist();
    setChange(e.target.value);
  };

  const handleSubmit = e => {
    sendValue(value);
    e.preventDefault();
    setSubmitted({ form1: change, form2: value });
    console.log(`form submitted: ${submitted}`);
    sendValue(submitted);
    setChange('');
    reset();
    setSubmitted(null);
  };

  const sendValue = async value => {
    try {
      (await fetch('http://localhost/php/testvars2.php', {
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: value,
      })) && console.log(`sent ${value} to testvars.php`);
    } catch (error) {
      console.error(error);
    }
  };

  /* eslint-disable no-unused-vars */
  const location = useLocation();
  return (
    <Box h="100vh">
      <div style={{ position: 'absolute', left: 50, top: 150 }}>
        <form
          onSubmit={handleSubmit}
          // action="http://192.168.1.244/php/testvars2.php"
          // action="php/testvars.php"
          method="post"
          target="_blank"
        >
          <div style={{ margin: 8 }}>
            <label style={{ margin: 8 }}>
              <span style={{ marginRight: 8 }}>In Component</span>
              <input
                placeholder="this uses useState internally"
                type="text"
                name="name"
                // value={value}
                value={change}
                onChange={handleChange}
              />
            </label>
          </div>
          <div style={{ margin: 8 }}>
            <label style={{ margin: 8 }}>
              <span style={{ marginRight: 8 }}>useInput Hook</span>
              <textarea
                placeholder="textarea w/ useInput hook"
                type="text"
                name="box"
                // value={value}
                {...bind}
              />
            </label>
          </div>
          <div style={{ margin: 8 }}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default FormScreen;
