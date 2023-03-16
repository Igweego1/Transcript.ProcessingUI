import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { ReactComponent as CloseIcon } from '../../svgs/close.svg';

interface ModalProps {
    title?: string;
    subTitle?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    open: boolean;
    handleClose: () => void;
    content?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({open, maxWidth, handleClose, content, title, subTitle}) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth={maxWidth ? maxWidth : 'md'} fullWidth>
            <DialogTitle sx={{paddingInlineStart: '2rem', paddingBlockStart: '2rem', paddingBlockEnd: '', textAlign: 'center'}}>
                {title}
                <br/>
                <span style={{fontWeight: 'normal'}}>{subTitle}</span> 
                <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{paddingInline: {xs: '1rem', sm: '3rem', lg: '5rem'}}}>
                    {content && content}
            </DialogContent>
        </Dialog>
    )
}

export default CustomModal;