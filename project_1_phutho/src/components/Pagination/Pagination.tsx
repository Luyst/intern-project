import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 3;
        const halfWindow = Math.floor(maxPagesToShow / 2);

        let startPage = Math.max(1, currentPage - halfWindow);
        let endPage = Math.min(totalPages, currentPage + halfWindow);

        if (currentPage <= halfWindow) {
            endPage = Math.min(totalPages, maxPagesToShow);
        }

        if (currentPage + halfWindow >= totalPages) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (startPage > 1) {
            pages.unshift(1, '...');
        }

        if (endPage < totalPages) {
            pages.push('...', totalPages);
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
                ◀
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    className={`px-3 py-1 rounded ${
                        page === currentPage
                            ? 'bg-blue-600 text-white'
                            : typeof page === 'number' &&
                              'hover:outline-blue-600 hover:outline-2 hover:outline  text-gray-700 '
                    }`}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
            >
                ▶
            </button>
        </div>
    );
};

export default Pagination;
