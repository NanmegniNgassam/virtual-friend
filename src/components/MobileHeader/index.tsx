import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { MobileHeaderContainer, OnlineStatus, TextContainer, UserNameLayout } from "./Header.styles";

interface MobileHeaderProps {
    deleteAllMessages: () => void;
    isMessages: boolean;
}

const MobileHeader = ({ deleteAllMessages, isMessages }: MobileHeaderProps) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    /**
     * Close the discussion deletion confirmation modal
     */
    const closeConfirmationModal = (): void => {
        setModalOpen(false);
    }

    /**
     * Delete all sent messages on user approval
     */
    const deleteDiscussion = (): void => {
        try {
            deleteAllMessages();

            closeConfirmationModal();
        } catch(error) {
            console.log("Error occuring while deleting the whole discussion : ", error);
            throw error;
        }
    }

    return (
        <MobileHeaderContainer>
            <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 50, height: 50, boxShadow: 3}}
            />
            <TextContainer>
                <UserNameLayout>virtual friend</UserNameLayout>
                <OnlineStatus>status</OnlineStatus>
            </TextContainer>
            <IconButton aria-label="delete" color="secondary" onClick={() => setModalOpen(true)} disabled={!isMessages}>
                <DeleteIcon  />
            </IconButton>
            

            <Dialog
                open={isModalOpen}
                onClose={closeConfirmationModal}
                aria-labelledby="discussion-deletion-approval"
                aria-describedby="delete all the messages sent in the chat"
                maxWidth="tablet"
            >
                <DialogTitle id="alert-dialog-title">
                    Supprimer tous les messages de la conversation ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        La totalité de votre échange avec votre virtual friend sera supprimé de manière définitive.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={closeConfirmationModal}>Retour</Button>
                    <Button color="secondary" variant="contained" onClick={deleteDiscussion}>
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
        </MobileHeaderContainer>
    );
}
 
export default MobileHeader;