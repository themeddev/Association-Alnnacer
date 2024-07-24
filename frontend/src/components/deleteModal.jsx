const DeleteModal = ({ confirmDelete, closeModal }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 flex items-center text-red mx-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h2 className="text-xl font-bold mb-2">Are you sure?</h2>
                    <p className="text-gray-600 mb-4">
                        Do you really want to delete this activity? This process cannot be undone.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-red text-white rounded-md px-4 py-2 hover:bg-red-600"
                            onClick={confirmDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;