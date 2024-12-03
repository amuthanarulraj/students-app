import './App.css'
import { Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

function App() {
  const {t} = useTranslation('common');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('appbar.title')}
          </Typography>
          <Button color="inherit">{t('appbar.login.label')}</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ paddingTop: 5 }}>
        <Outlet></Outlet>
      </Container>
    </Box>
  )
}

export default App
