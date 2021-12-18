import classes from './Card.module.css';

function CardFrame(props) {

  return (
    <>
      <div className={classes.card}>
        {props.children}
      </div>
    </>
  );
}

export default CardFrame;