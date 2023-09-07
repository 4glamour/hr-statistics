import { Section } from '../Section/Section';
import { DateWrapper, RecordsWrapper } from './RecordsSection.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { getRecords } from '../../services/statistics-api';

export const RecordsSection = ({ actionRecords, deleteRecord, setActionRecords }) => {
  const [date, setDate] = useState(() => new Date());
  const records = [...actionRecords].reverse();

  useEffect(() => {
    (async () => {
      try {
        const records = await getRecords(date);
        setActionRecords(records.data.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [date, setActionRecords]);

  const onDateChange = newDate => {
    setDate(newDate);
  };

  return (
    <Section title="Timeline">
      <DateWrapper>
        <DatePicker value={date} onChange={onDateChange} />
      </DateWrapper>

      <RecordsWrapper>
        <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: '#4682B4' }}>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell sx={{ width: 200 }}>Date</TableCell>
                <TableCell sx={{ width: 80 }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map(record => {
                const date = new Date(record.createdAt);
                return (
                  <TableRow
                    key={record._id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:nth-of-type(even)': { bgcolor: '#F0F8FF' },
                    }}
                  >
                    <TableCell>{record.category.name}</TableCell>
                    <TableCell>{record.category.type}</TableCell>
                    <TableCell>{date.toLocaleString()}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        onClick={() => deleteRecord(record._id)}
                        sx={{ color: '#F08080' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </RecordsWrapper>
    </Section>
  );
};
