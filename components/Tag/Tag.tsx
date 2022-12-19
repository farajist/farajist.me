import styles from './Tag.module.css';
interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  const classes = [styles['tag']];
  const tagColor = styles[`tag--${label}`];
  if (tagColor) classes.push(tagColor);
  return (
    <span className={classes.join(' ')} key={label}>
      {label}
    </span>
  );
};

export default Tag;
