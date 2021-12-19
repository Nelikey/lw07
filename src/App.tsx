import React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography sx={{margin: 1}} variant="h6" color="inherit" noWrap>
            Book the Book
          </Typography>
          <Typography sx={{margin: 1}} color="inherit" noWrap>
            Популярное
          </Typography>
          <Typography sx={{margin: 1}} color="inherit" noWrap>
            Жанры
          </Typography>
          <Typography sx={{margin: 1}} color="inherit" noWrap>
            Мои книги
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Main content */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 4,
            mb: 3,
            pt: 2
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Book The Book - книжный магазин у Вас дома!
            </Typography>
            <Typography variant="h5" align="left" color="text.secondary" paragraph>
            Наш сервис предоставляет Вам выбор из тысяч произведений
            как отечественных авторов, так и зарубежных.
            Большинство книг доступны как в электронном варианте, так и в типографном, доставка последнего
            не займет больше 3-х дней.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image= {require('./img/ana_sheri.jpg')}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom>
                      Жанр
                    </Typography>
                    <Typography>
                      Автор
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Название книги
                    </Typography>
                    <Typography align="right">
                      Цена ₽
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End of Main content */}
        </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © Book The Book 2021
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}