import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center mt-8">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="mx-1 px-3 py-1 rounded border disabled:opacity-50"
            >
                <ChevronLeftIcon 
                    className="h-5 w-5" 
                />
            </button>
            {
                pages.map(page => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`mx-1 px-3 py-1 rounded border ${
                            currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        }`}
                    >
                        {page}
                    </button>
                ))
            }
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="mx-1 px-3 py-1 rounded border disabled:opacity-50"
            >
                <ChevronRightIcon 
                    className="h-5 w-5" 
                />
            </button>
        </div>
    );
};

export default Pagination;