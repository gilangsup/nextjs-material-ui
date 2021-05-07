import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Action from '../components/Action'
import CardGrid from '../components/CardGrid'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#121212'
  }
}));

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Nav/>
      <Action/>
      <CardGrid/>
      <Footer/>
    </div>
  )
}
