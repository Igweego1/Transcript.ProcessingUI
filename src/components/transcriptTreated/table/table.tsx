import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses, Tooltip, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import styles from './table.module.scss';
import { forwardRef } from "react";


interface TableProps {
    headings?: string[],
    body?: any[]
    handleOpenModal: ()=> void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#D3ECDD',
      color: '#333333',
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

const RequestTable = forwardRef<HTMLTableElement, TableProps > (({headings,body, handleOpenModal}, ref) =>{
    return (
        <TableContainer className={styles.tableContainer} >
            <Table ref={ref}>
                <TableHead>
                    <StyledTableRow>
                    {headings?.map((heading, index) => (
                        <StyledTableCell className={styles.heading} key={index}>{heading}</StyledTableCell>
                    ))}
                          <StyledTableCell className={styles.heading}>Actions</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                {body?.map((row, index) => (
                        <StyledTableRow key={index}>
                        {Object.keys(row).map((item, ind) => (
                            <StyledTableCell key={ind}>{row[item]}</StyledTableCell>
                        ))}
                              <StyledTableCell>
                                <div>
                                <Button className={styles.outlinedButton} variant='outlined' onClick={() => handleOpenModal()}>Request Access</Button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                             
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}
)

export default RequestTable;