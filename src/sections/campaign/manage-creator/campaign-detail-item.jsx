import PropTypes from 'prop-types';
import React, { useState } from 'react';


import Image from 'src/components/image';

import { Box, Stack, ToggleButton, ToggleButtonGroup, Tab, Tabs } from '@mui/material';


import CampaignInfo from './campaign-info';
import CampaignAdmin from './campaign-admin';
import CampaignMyTasks from './campaign-myTask';

const CampaignDetailItem = ({ campaign }) => {
  const [currentTab, setCurrentTab] = useState('tasks');
  // const { user } = useAuthContext();

  const renderGallery = (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
      gap={1}
      mt={2}
    >
      <Image
        src={campaign?.campaignBrief?.images[0]}
        alt="test"
        ratio="1/1"
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1}>
        {campaign?.campaignBrief?.images.map((elem, index) => (
          <Image
            key={index}
            src={elem}
            alt="test"
            ratio="1/1"
            sx={{ borderRadius: 2, cursor: 'pointer' }}
          />
        ))}
      </Box>
    </Box>
  );

  // const renderTabs = (
  //   <Tabs value={currentTab} onChange={(e, val) => setCurrentTab(val)} variant="scrollable">
  //     <Tab value="tasks" label="My Tasks" />
  //     <Tab value="info" label="Campaign Info" />
  //     {/* <Tab value="brief" label="Campaign Brief" /> */}
  //     <Tab value="admin" label="Campaign Admin" />
  //   </Tabs>
  // );

  return (
    <Stack overflow="scroll" gap={2}>
      {/* {renderGallery} */}
      <ToggleButtonGroup
        sx={{ mt: 2 }}
        value={currentTab}
        color="info"
        exclusive
        onChange={(e, val) => setCurrentTab(val)}
        aria-label="Platform"
        fullWidth
      >
        <ToggleButton value="tasks">My Tasks</ToggleButton>
        <ToggleButton value="info">Campaign Info</ToggleButton>
        <ToggleButton value="admin">Campaign Admin</ToggleButton>
      </ToggleButtonGroup>
      {/* {renderTabs} */}
      <Box mt={3}>
        {currentTab === 'tasks' && <CampaignMyTasks campaign={campaign} />}
        {currentTab === 'info' && <CampaignInfo campaign={campaign} />}
        {currentTab === 'admin' && <CampaignAdmin campaign={campaign} />}
      </Box>
    </Stack>
  );
};

export default CampaignDetailItem;

CampaignDetailItem.propTypes = {
  campaign: PropTypes.object,
};
