import React, { useState } from 'react';

import { Tab, Box, Card, Tabs, Container } from '@mui/material';

import { useGetCreatorByID } from 'src/hooks/use-get-creators';

import withPermission from 'src/auth/guard/withPermissions';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

import MediaKitCover from './mediakit-cover';
import MediaKitSocial from './media-kit-social/view';

// eslint-disable-next-line react/prop-types
const MediaKit = ({ id, noBigScreen }) => {
  const settings = useSettingsContext();
  const { creator } = useGetCreatorByID(id);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [currentTab, setCurrentTab] = useState('instagram');

  const toggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const styleFullScreen = {
    minWidth: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10000,
    bgcolor: (theme) => theme.palette.grey[900],
  };

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={
        isFullScreen
          ? {
              ...styleFullScreen,
            }
          : {
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
              borderRadius: 2,
              position: 'relative',
            }
      }
    >
      {!noBigScreen && (
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            cursor: 'pointer',
            zIndex: 1000,
          }}
          onClick={toggle}
        >
          {isFullScreen ? (
            <Iconify icon="akar-icons:reduce" />
          ) : (
            <Iconify icon="akar-icons:enlarge" />
          )}
        </Box>
      )}
      <Card
        sx={{
          mb: 3,
          border: 'none',
          boxShadow: 'none',
          bgcolor: 'transparent',
        }}
      >
        <MediaKitCover user={creator} />

        <Tabs
          value={currentTab}
          onChange={(e, val) => setCurrentTab(val)}
          variant="fullWidth"
          sx={{
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
            borderRadius: 2,
            p: 2,
            [`& .Mui-selected`]: {
              bgcolor: (theme) => theme.palette.grey[900],
              borderRadius: 1.5,
            },
          }}
          TabIndicatorProps={{
            sx: {
              display: 'none',
            },
          }}
        >
          <Tab
            value="instagram"
            label="Instagram"
            icon={<Iconify icon="skill-icons:instagram" />}
          />
          <Tab value="tiktok" label="Tiktok" icon={<Iconify icon="logos:tiktok-icon" />} />
          <Tab value="partnership" label="Partnerships" />
        </Tabs>

        <MediaKitSocial currentTab={currentTab} />
      </Card>

      {/* <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Social
        </Typography>
      </Box> */}
    </Container>
  );
};

export default withPermission(['read'], 'creator', MediaKit);
