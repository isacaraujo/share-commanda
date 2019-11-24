import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Place as PlaceIcon } from '@material-ui/icons';
import { Card, Grid, Avatar, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from '@material-ui/core';

interface ListItem {
  id: number;
  name: string;
  totalPerson: number;
  totalAmount: number;
}

const list: ListItem[] = [
  {id: 0, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 1, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 2, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 3, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 4, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 5, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 6, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 7, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 8, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 9, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 10, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 11, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 12, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 13, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 14, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 15, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 16, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 17, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 18, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 19, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 20, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 21, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 22, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 23, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 24, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 25, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 26, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 27, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 28, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 29, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 30, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 31, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 32, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 33, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 34, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 35, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 36, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 37, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 38, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
  {id: 39, name: 'Bar do Urso', totalPerson: 5, totalAmount: 199.5},
];

const App: React.FC = (opts: any) => {
  const classes = opts.classes;

  let listView;

  if (list.length) {
    listView = list.map(item => {
      const caption = `There are ${item.totalPerson} people for a total of R$ ${item.totalAmount}`;

      return (
        <ListItem key={item.id} button>
          <Avatar>
            <PlaceIcon />
          </Avatar>
          <ListItemText primary={item.name} secondary={caption} className={classes.commandaListItemText} />
        </ListItem>
      );
    });
  } else {
    listView = (
      <Card className={classes.listViewEmpty}>
        <Typography variant="body1" component="p">
          There's no commanda here. <a href="/">Start your commanda here</a>
        </Typography>
      </Card>
    );
  }

  return (
    <Grid container className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Commanda
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} className={classes.gridContent}>
        <List component="nav" className={classes.commandaList}>
          {listView}
        </List>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <Typography variant="caption">v0.1.0</Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles({
  root: {
     width: '100%',
     position: 'absolute',
     backgroundColor: '#f6f6f6'
   },
   title: {
     width: '100%',
     textAlign: 'center'
   },
   commandaList: {
    maxWidth: 420,
    margin: '0 auto'
   },
   commandaListItemText: {
     paddingLeft: 12
   },
   listViewEmpty: {
     padding: 12
   },
   gridContent: {
    height: 'calc(100vh - 64px - 24px)'
   },
   footer: {
     height: 24,
     width: '100%',
     textAlign: 'right',
     fontSize: 12,
     paddingBottom: 2,
     paddingRight: 2
   }
 })(App);
