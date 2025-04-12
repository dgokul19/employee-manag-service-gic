import React from 'react';
import { DeleteModalProps } from '../../utils/types';

// CSS
import classes from './index.module.scss';

const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Delete Item",
    message = "Are you sure you want to delete this item?",
    deleteId = ''
}) => {
    if (!isOpen) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={classes.modalOverlay} onClick={handleClickOutside}>
            <div className={classes.modalContent}>
                <h2>{title} {deleteId && deleteId}</h2>
                <p>{message}</p>
                <div className={classes.modalActions}>
                    <button className={`${classes.btn} ${classes.cancel}`} onClick={() => onClose()}>Cancel</button>
                    <button className={`${classes.btn} ${classes.confirm}`} onClick={() => onConfirm(deleteId)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
