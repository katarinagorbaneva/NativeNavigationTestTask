import React, { ReactElement } from 'react';

import { Text, Box } from 'native-base';

export default function TestScreen (): ReactElement {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" safeArea>
    <Text fontSize={18}>Please, log in for continue</Text>
  </Box>
  );
}
