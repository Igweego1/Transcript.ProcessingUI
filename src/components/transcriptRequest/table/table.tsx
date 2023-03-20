import {tableCellClasses, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from './table.module.scss';
import { forwardRef } from "react";


interface TableProps {
    body?: any[],
}



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#D3ECDD',
      color: '#4CAF4F',
    }
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(211, 236, 221, 0.3)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const TranscriptRequestTable  = forwardRef<HTMLTableElement, TableProps>( ({body}, ref) => {
    return (
        <TableContainer  className={styles.tableContainer} >
            <Table ref={ref} >
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell className={styles.heading}>S/N</StyledTableCell>
                        <StyledTableCell className={styles.heading}>MATRIC NO.</StyledTableCell>
                        <StyledTableCell className={styles.heading}>NAME</StyledTableCell>
                        <StyledTableCell className={styles.heading}>DIRECTORATE</StyledTableCell>
                        <StyledTableCell className={styles.heading}></StyledTableCell> 
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                {body?.map((row, index) => (
                        <StyledTableRow key={index}>
                        {Object.keys(row).map((item, ind) => (
                            <StyledTableCell key={ind}>{row[item]}</StyledTableCell>
                        ))}
                              <StyledTableCell>
                                <div className={styles.group}>
                                <Button className={styles.actionButton} variant='outlined'>View</Button>
                                <Button className={styles.actionButton} variant='outlined'>Treat</Button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}          
                </TableBody>


            </Table>
        </TableContainer>
  ) 
})
 


export default TranscriptRequestTable