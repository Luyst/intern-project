import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
} from '@mui/material';

interface TableComponentProps {
    data: Record<string, any>[]; // Dữ liệu là mảng các đối tượng
    titles: string[]; // Tiêu đề của bảng
    renderCells: (key: string, item: Record<string, any>) => React.ReactNode; // Hàm render cho các ô
}

const TableComponent: React.FC<TableComponentProps> = ({ data, titles, renderCells }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Số lượng hàng trên mỗi trang

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TableContainer className="rounded-xl bg-white">
                <Table>
                    <TableHead>
                        <TableRow>
                            {titles.map((header, index) => (
                                <TableCell
                                    className="bg-orange-400"
                                    sx={{ fontWeight: '600', color: 'white' }}
                                    align="center"
                                    key={index}
                                >
                                    {' '}
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                            <TableRow key={index}>
                                {Object.keys(item).map((key) => (
                                    <TableCell
                                        className={`${index % 2 !== 0 ? 'bg-orange-50' : 'bg-white'}`}
                                        key={key}
                                        align="center"
                                    >
                                        {renderCells(key, item)} {/* Gọi hàm renderCells để render ô */}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default TableComponent;
