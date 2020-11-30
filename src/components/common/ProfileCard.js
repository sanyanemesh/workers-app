import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  ProfileInfo from './ProfileInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '4px 24px'
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'end'
  }
}));

export default function ProfileCard({ title, subSpecialties }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.avatar}>
          <Avatar alt={title} />
        </div>
        <div>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {(subSpecialties && subSpecialties.length > 0) ? subSpecialties : ' – '}
            </Typography>
            <div className={classes.button}>
              <ProfileInfo title={title}/>
            </div>
          </CardContent>
        </div>
        
      </Card>
    </div>
  )
}
