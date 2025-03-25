import { Button } from "@ui/Button/Button";
import { IconArrow } from "@icons/SvgIcons";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  className = "",
}: PaginationProps) => {
  return (
    <div className={`${styles.pagination} ${className}`}>
      <div className={styles.buttonGroup}>
        <Button
          icon={<IconArrow rotate={90} />}
          onClick={onPrev}
          disabled={currentPage === 1}
          aria-label="Предыдущая страница"
        >
          Назад
        </Button>
        <Button
          icon={<IconArrow rotate={-90} />}
          iconPosition="after"
          onClick={onNext}
          disabled={currentPage === totalPages}
          aria-label="Следующая страница"
        >
          Вперед
        </Button>
      </div>
      <span className={styles.pageInfo}>
        Страница {currentPage} из {totalPages}
      </span>
    </div>
  );
};
