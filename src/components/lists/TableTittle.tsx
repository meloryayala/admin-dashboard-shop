import {FC} from "react";

interface TableTitleProp {
    spanTitle: string;
    isColSpan?: string;
}

const TableTittle: FC<TableTitleProp> = ({spanTitle, isColSpan}) => {
    const tableTitleStyle = `text-sm font-medium text-secondary-content/50 ${isColSpan}`
  return(
      <h4 className={tableTitleStyle}>
          {spanTitle}
      </h4>
  )
}

export default TableTittle;