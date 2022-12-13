import styles from '../styles/product.module.css'

export const ProductDescription = ({description}) => {
    return (
      <div className={styles.descriptionContainer}>
        <h2 className={styles.productSubtitle}>{description}</h2>
        <p>
          Shed everywhere shed everywhere stretching attack your ankles chase
          the red dot, hairball run catnip eat the grass sniff litter kitter
          kitty litty little kitten big roar roar feed me for meow meow pee in
          shoe. Pet me pet me pet me pet me, bite, scratch, why are you petting
          me hide when guests come over walk on keyboard. More napping, more
          napping all the napping is exhausting chase little red dot someday it
          will be mine! or russian blue thug cat so run off table persian cat
          jump eat fish. Human clearly uses close to one life a night no one
          naps that long so i revive by standing on chestawaken!. More napping,
          more napping all the napping is exhausting.
        </p>
      </div>
    );
}