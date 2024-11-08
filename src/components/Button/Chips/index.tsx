import { ChipsProps, ChipState } from './Chips.types';
import styles from './Chips.module.scss';

export default function Chips({ chipState, text }: ChipsProps) {
  const getChipClass = (state: ChipState) => {
    switch (state) {
      case 'checked':
        return styles.checked; // 체크된 칩
      case 'unchecked':
        return styles.unchecked; // 체크되지 않은 칩
      case 'sports':
        return styles.sports; // 운동 종목 칩
      case 'label':
      default:
        return styles.label; // 기본 라벨 칩
    }
  };

  return (
    <div className={`${styles.container} ${getChipClass(chipState)}`}>
      {text}
    </div>
  );
}
