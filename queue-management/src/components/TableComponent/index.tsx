import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

interface TableComponentProps {
    data: Record<string, any>[];
    titles: string[];
    detailShow?: boolean;
    updateShow?: boolean;
    renderCells: (key: string, item: Record<string, any>) => React.ReactNode;
}

const TableComponent: React.FC<TableComponentProps> = ({
    data,
    titles,
    renderCells,
    detailShow = false,
    updateShow = false,
}) => {
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
        <div className="w-full">
            <TableContainer className="rounded-xl bg-white w-full">
                <Table>
                    <TableHead className="bg-orange-400">
                        <TableRow className="">
                            {titles.map((header, index) => (
                                <TableCell
                                    className=" text-nowrap  border-orange-100 border-l-2"
                                    sx={{ fontWeight: '600', color: 'white' }}
                                    align="left"
                                    key={index}
                                >
                                    {' '}
                                    {header}
                                </TableCell>
                            ))}
                            {detailShow && <TableCell className="border-orange-100 border-l-2"></TableCell>}
                            {updateShow && <TableCell className="border-orange-100 border-l-2"></TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                            <TableRow key={index}>
                                {Object.keys(item).map((key) => (
                                    <TableCell
                                        className={`   border-orange-100 border-l-2 ${
                                            index % 2 !== 0 ? 'bg-orange-50' : 'bg-white'
                                        }`}
                                        key={key}
                                        align="left"
                                        padding="none"
                                    >
                                        <div className="text-nowrap truncate max-w-60 text-sm p-3">
                                            {renderCells(key, item)}
                                        </div>
                                    </TableCell>
                                ))}
                                {detailShow && <TableCell>Chi tiết</TableCell>}
                                {updateShow && <TableCell>Cập nhật</TableCell>}
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
