import { ReactElement, ReactNode } from 'react'
import styles from '../../styles/PageHeader.module.css'

interface Props {
  header: string,
  children: ReactElement,
}

const PageHeader = ({ header, children }: Props): JSX.Element => {
  return (
    <div className={styles.pageHeaderContainer}>
      <h1>{header}</h1>
      <div>{children}</div>
    </div>
  )
}

export default PageHeader